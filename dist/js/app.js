import {translations,papers,patents,software,bibtex} from './content.js';
import {escape,renderGrouped,renderYearNav} from './render.js';
import {sortPublications} from './publication-order.js';
const lang=document.documentElement.lang==='en'?'en':'zh',t=translations[lang],$=s=>document.querySelector(s);
const assetRoot=new URL('../',import.meta.url),collections={papers,patents,software},all=[...papers,...patents,...software];
let toastTimer;
function notify(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2600);}
function menu(open){$('#menu-toggle').setAttribute('aria-expanded',String(open));$('#menu-toggle').setAttribute('aria-label',open?t.closeMenu:t.openMenu);$('#navbarNav').classList.toggle('show',open);}
$('#menu-toggle').addEventListener('click',()=>menu($('#menu-toggle').getAttribute('aria-expanded')!=='true'));
$('#navbarNav').addEventListener('click',e=>{if(e.target.closest('a'))menu(false);});
document.addEventListener('click',e=>{if(!e.target.closest('.navbar'))menu(false);});
matchMedia('(min-width:768px)').addEventListener('change',()=>menu(false));
window.addEventListener('scroll',()=>$('.navbar').classList.toggle('scrolled',scrollY>8),{passive:true});
$('#language-toggle').addEventListener('click',e=>{const next=new URL(e.currentTarget.href);next.search=location.search;next.hash=location.hash;e.currentTarget.href=next.href;});
function themeButton(){const dark=document.documentElement.dataset.bsTheme==='dark';$('#theme-toggle').setAttribute('aria-pressed',String(dark));$('#theme-toggle use').setAttribute('href','#icon-'+(dark?'moon':'sun'));}
themeButton();$('#theme-toggle').addEventListener('click',()=>{const theme=document.documentElement.dataset.bsTheme==='dark'?'light':'dark';document.documentElement.dataset.bsTheme=theme;try{localStorage.setItem('3daudio-theme',theme);}catch{}themeButton();});
const focusBeforeDialog=new WeakMap();
function openDialog(dialog){focusBeforeDialog.set(dialog,document.activeElement);dialog.showModal();document.body.classList.add('dialog-open');}
for(const dialog of document.querySelectorAll('dialog')){
 dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();dialog.close();}});
 dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('dialog-open');focusBeforeDialog.get(dialog)?.focus();});
 dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close();});
}
document.querySelectorAll('[data-close-dialog]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.closeDialog).close()));
$('#sources-button').addEventListener('click',()=>openDialog($('#sources-dialog')));
async function copyText(text){
 try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);return true;}}catch{}
 const focus=document.activeElement,area=document.createElement('textarea');area.value=text;area.readOnly=true;area.style.cssText='position:fixed;left:-9999px;top:0';document.body.append(area);area.select();let ok=false;try{ok=document.execCommand('copy');}catch{}area.remove();focus?.focus();return ok;
}
function download(text,name){const url=URL.createObjectURL(new Blob([text+'\n'],{type:'application/x-bibtex;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
document.addEventListener('click',async e=>{
 const button=e.target.closest('[data-copy-bib],[data-download-bib]');if(!button)return;
 const p=all.find(p=>p.id===(button.dataset.copyBib||button.dataset.downloadBib));if(!p)return;
 if(button.dataset.copyBib)notify(await copyText(bibtex(p))?t.copied:t.copyFailed);else download(bibtex(p),p.id+'.bib');
});
$('#copy-email')?.addEventListener('click',async()=>notify(await copyText('qutianshu@pku.edu.cn')?t.emailCopied:t.copyFailed));
const deck=$('.paper-deck');
if(deck){
 const track=deck.querySelector('.paper-deck-track');let cards=[...track.querySelectorAll('[data-paper-card]')],pickers=[...deck.querySelectorAll('[data-deck-index]')];
 const reducedMotion=matchMedia('(prefers-reduced-motion:reduce)');let current=0,scrollFrame;
 deck.querySelector('.deck-controls').hidden=false;deck.querySelector('.deck-picker').hidden=false;
 function reflect(index){current=index;deck.querySelector('.deck-count').textContent=(index+1)+' / '+cards.length;pickers.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));}
 const number=value=>value===''?null:Number(value);
 const deckItems=cards.map(card=>({card,picker:pickers.find(b=>b.getAttribute('aria-controls')===card.id),views:card.dataset.paperViews.split(' '),year:Number(card.dataset.scholarYear),scholar:{year:Number(card.dataset.scholarYear),citedBy:number(card.dataset.citations),dateRank:number(card.dataset.dateRank),citationRank:number(card.dataset.citationRank)}}));
 const orderButtons=[...deck.querySelectorAll('[data-paper-order]')];deck.querySelector('.paper-view-controls').hidden=false;
 function orderCards(order,sync=true){
  const sorted=sortPublications(deckItems.filter(item=>item.views.includes(order)),order);cards=sorted.map(x=>x.card);pickers=sorted.map(x=>x.picker);current=0;cancelAnimationFrame(scrollFrame);
  if(!cards.length)throw new Error('No homepage papers for selection: '+order);
  cards.forEach(card=>{card.hidden=false;});pickers.forEach(button=>{button.hidden=false;});
  track.replaceChildren(...cards);deck.querySelector('.deck-picker').replaceChildren(...pickers);
  cards.forEach((card,i)=>{card.setAttribute('aria-label',(i+1)+' / '+cards.length+': '+card.dataset.title);pickers[i].dataset.deckIndex=String(i);});
  track.scrollTo({left:0,behavior:'instant'});reflect(0);orderButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.paperOrder===order)));
  const source=deck.querySelector('.home-scholar-link'),sourceUrl=new URL(source.href);if(order==='year')sourceUrl.searchParams.set('sortby','pubdate');else sourceUrl.searchParams.delete('sortby');source.href=sourceUrl;
  if(sync){const url=new URL(location.href);if(order==='year')url.searchParams.delete('sort');else url.searchParams.set('sort','citations');history.replaceState(null,'',url);}
 }
 orderCards(new URLSearchParams(location.search).get('sort')==='citations'?'citations':'year',false);
 orderButtons.forEach(button=>button.addEventListener('click',()=>orderCards(button.dataset.paperOrder)));
 function show(index){index=(index+cards.length)%cards.length;track.scrollTo({left:cards[index].offsetLeft,behavior:reducedMotion.matches?'instant':'smooth'});reflect(index);}
 deck.querySelectorAll('[data-deck-step]').forEach(b=>b.addEventListener('click',()=>show(current+Number(b.dataset.deckStep))));
 deck.querySelector('.deck-picker').addEventListener('click',e=>{const button=e.target.closest('[data-deck-index]');if(button)show(Number(button.dataset.deckIndex));});
 track.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();show(e.key==='Home'?0:e.key==='End'?cards.length-1:current+(e.key==='ArrowRight'?1:-1));});
 track.addEventListener('scroll',()=>{cancelAnimationFrame(scrollFrame);scrollFrame=requestAnimationFrame(()=>{const distances=cards.map(card=>Math.abs(card.offsetLeft-track.scrollLeft));reflect(distances.indexOf(Math.min(...distances)));});},{passive:true});
 new ResizeObserver(()=>track.scrollTo({left:cards[current].offsetLeft,behavior:'instant'})).observe(track);
 track.addEventListener('click',e=>{const a=e.target.closest('[data-open-figure]');if(!a)return;e.preventDefault();const card=a.closest('[data-paper-card]'),img=a.querySelector('img');$('#figure-dialog-title').textContent=card.dataset.title;$('#figure-dialog-image').src=a.href;$('#figure-dialog-image').alt=img.alt;openDialog($('#figure-dialog'));});
 addEventListener('popstate',()=>orderCards(new URLSearchParams(location.search).get('sort')==='citations'?'citations':'year',false));
}
let pageIndex=[];
function renderSiteSearch(){
 const query=$('#site-search-input').value.trim(),terms=query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
 const base=lang==='en'?'/en/':'/';
 const pageMatches=pageIndex.filter(p=>terms.every(x=>[p.title,p.description].join(' ').toLocaleLowerCase().includes(x)));
 const paperMatches=query?papers.filter(p=>terms.every(x=>[p.title,p.titleEn,p.authors.join(' '),p.venue,p.year,p.doi,p.arxiv,p.short,p.keywords].join(' ').toLocaleLowerCase().includes(x))).map(p=>({title:lang==='en'&&p.titleEn?p.titleEn:p.title,description:p.year+' · '+p.venue,url:base+'publications/?q='+encodeURIComponent(p.title)})):[];
 const results=[...pageMatches,...paperMatches];
 $('#site-search-results').innerHTML=results.length?results.slice(0,20).map(p=>`<a class="search-result-item" href="${escape(p.url)}"><span class="search-result-title">${escape(p.title)}</span>${p.description?`<span class="search-result-excerpt">${escape(p.description)}</span>`:''}</a>`).join('')+(results.length>20?`<a class="search-result-item" href="${base}publications/?q=${encodeURIComponent(query)}">${t.allPublications} →</a>`:''):`<p class="search-empty">${t.searchEmpty}</p>`;
}
async function openSearch(){
 if($('#sources-dialog').open)$('#sources-dialog').close();
 openDialog($('#site-search'));$('#site-search-input').focus();
 if(!pageIndex.length){try{const data=await(await fetch(new URL('search-index.json',assetRoot))).json();pageIndex=data[lang];}catch{pageIndex=[{title:t.labName,url:lang==='en'?'/en/':'/',description:t.labIntro}];}}
 renderSiteSearch();
}
$('#search-toggle').addEventListener('click',openSearch);$('#site-search-input').addEventListener('input',renderSiteSearch);
document.addEventListener('keydown',e=>{if(e.key==='Escape')menu(false);if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if($('#site-search').open)$('#site-search').close();else openSearch();}});
if(document.body.dataset.page==='publications'){
 const state={collection:'papers',category:'all',query:'',year:'all',type:'all',pdf:false},areas=['all','perception','encoding','separation','generation','rendering'],types=['all','journal','conference','chapter','abstract','preprint','other'];
 function readState(){const params=new URLSearchParams(location.search);state.collection=Object.hasOwn(collections,params.get('collection'))?params.get('collection'):'papers';state.category=areas.includes(params.get('area'))?params.get('area'):'all';state.type=types.includes(params.get('type'))?params.get('type'):'all';state.year=all.some(p=>String(p.year)===params.get('year'))?params.get('year'):'all';state.query=params.get('q')||'';state.pdf=params.get('pdf')==='1';if(state.collection!=='papers'){state.type='all';state.category='all';state.pdf=false;}}
 function controls(){$('#pdf-only').checked=state.pdf;$('.pdf-only-label').hidden=state.collection!=='papers';$('#paper-search').value=state.query;$('#paper-year').value=state.year;$('#paper-type').value=state.type;$('#paper-type').disabled=state.collection!=='papers';$('.paper-filters').hidden=state.collection!=='papers';document.querySelectorAll('[data-collection]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.collection===state.collection)));document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===state.category)));$('#collection-note').textContent=state.collection==='papers'?t.academicNote:state.collection==='patents'?t.patentIntro:t.softwareIntro;$('#download-all').href=new URL(state.collection==='papers'?'catalog.bib':state.collection+'.bib',assetRoot);$('#download-all').download='tianshu-qu-'+state.collection+'.bib';}
 function updateURL(){const url=new URL(location.href),params=new URLSearchParams();if(state.collection!=='papers')params.set('collection',state.collection);if(state.query.trim())params.set('q',state.query.trim());if(state.year!=='all')params.set('year',state.year);if(state.type!=='all')params.set('type',state.type);if(state.category!=='all')params.set('area',state.category);if(state.pdf)params.set('pdf','1');url.search=params.toString();url.hash='';history.replaceState(null,'',url);}
 function render(sync=true){
  const list=collections[state.collection],terms=state.query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const filtered=list.filter(p=>(!state.pdf||p.pdf||p.arxiv)&&(state.year==='all'||String(p.year)===state.year)&&(state.type==='all'||p.type===state.type)&&(state.category==='all'||p.category===state.category)&&terms.every(x=>[p.title,p.titleEn,p.authors.join(' '),p.venue,p.venueEn,p.doi,p.arxiv,p.keywords,p.short,p.year,p.number,p.summary?.zh,p.summary?.en].join(' ').toLocaleLowerCase().includes(x)));
  $('#paper-count').textContent=filtered.length+' '+t.paperCount;$('#paper-results').innerHTML=filtered.length?renderGrouped(filtered,lang):`<div class="section-card empty-state"><p>${t.noPapers}</p><button type="button" class="btn-pill btn-link" id="reset-filters">${t.resetFilters}</button></div>`;
  $('#year-navigation').innerHTML=renderYearNav(list);document.querySelectorAll('[data-year-link]').forEach(a=>a.classList.toggle('active',a.dataset.yearLink===state.year));controls();if(sync)updateURL();
 }
 readState();$('#paper-toolbar').hidden=false;render(false);
 document.querySelectorAll('[data-collection]').forEach(b=>b.addEventListener('click',()=>{Object.assign(state,{collection:b.dataset.collection,query:'',year:'all',type:'all',category:'all',pdf:false});render();}));
 $('.paper-filters').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b){state.category=b.dataset.category;render();}});
 $('#pdf-only').addEventListener('change',e=>{state.pdf=e.target.checked;render();});
 $('#paper-search').addEventListener('input',e=>{state.query=e.target.value;render();});$('#paper-year').addEventListener('change',e=>{state.year=e.target.value;render();});$('#paper-type').addEventListener('change',e=>{state.type=e.target.value;render();});
 $('#year-navigation').addEventListener('click',e=>{const a=e.target.closest('[data-year-link]');if(!a)return;e.preventDefault();state.year=a.dataset.yearLink;render();$('#paper-results').scrollIntoView({block:'start'});});
 $('#paper-results').addEventListener('click',e=>{if(e.target.closest('#reset-filters')){Object.assign(state,{query:'',year:'all',type:'all',category:'all',pdf:false});render();$('#paper-search').focus();}});
 addEventListener('popstate',()=>{readState();render(false);});
 if(location.hash)requestAnimationFrame(()=>{try{document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();}catch{}});
}
