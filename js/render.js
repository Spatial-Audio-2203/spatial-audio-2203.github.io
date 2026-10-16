import {translations,bibtex,paperUrl} from './content.js';
export const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const link=(url,label,cls='')=>`<a href="${escape(url)}"${cls?` class="${cls}"`:''} target="_blank" rel="noopener noreferrer">${escape(label)}</a>`;
export const authors=p=>p.authors.map(n=>['Tianshu Qu','曲天书'].includes(n)?`<strong>${escape(n)}</strong>`:escape(n)).join(', ');
export const typeLabel=(p,lang)=>lang==='en'?({journal:'Journal article',conference:'Conference paper',chapter:'Book chapter',preprint:'Preprint',abstract:'Meeting abstract',patent:'Patent',software:'Software copyright',other:'Other publication'}[p.type]):translations[lang][p.type==='abstract'?'abstractType':p.type];
export const citationMeta=(p,lang)=>[lang==='en'&&p.venueEn?p.venueEn:p.venue,p.volume?p.volume+(p.issue?'('+p.issue+')':''):p.issue?'('+p.issue+')':'',p.pages,p.number].filter(Boolean).join(', ');
export function paperLinks(p,lang){
 const t=translations[lang],a=[];
 if(p.arxiv||p.pdf)a.push(link(p.pdf||'https://arxiv.org/pdf/'+p.arxiv,p.type==='abstract'?t.abstractPdf:p.pdfVersion==='author-manuscript'?t.authorManuscriptPdf:'PDF','btn-pill btn-pdf'));
 if(p.arxiv)a.push(link('https://arxiv.org/abs/'+p.arxiv,'arXiv','btn-pill btn-arxiv'));
 if(p.ieee)a.push(link(p.ieee,'IEEE Xplore','btn-pill btn-link btn-ieee'));
 if(p.code)a.push(link(p.code,t.code,'btn-pill btn-code'));
 if(p.benchmark)a.push(link(p.benchmark,t.benchmark,'btn-pill btn-link'));
 if(p.project)a.push(link(p.project,t.project,'btn-pill btn-link'));
 if(p.doi)a.push(link('https://doi.org/'+p.doi,'DOI','btn-pill btn-doi'));
 else if(p.publisher)a.push(link(p.publisher,t.publicationPage,'btn-pill btn-link'));
 if(p.source&&p.source!==paperUrl(p))a.push(link(p.source,t.recordSource,'btn-pill btn-link'));
 else if(!p.doi&&!p.publisher&&!p.arxiv)a.push(link(p.source,t.officialRecord,'btn-pill btn-link'));
 return a.join('');
}
export function renderPublications(list,lang,scope=''){
 const t=translations[lang];
 return list.map(p=>{
  const id=scope+p.id, title=lang==='en'&&p.titleEn?p.titleEn:p.title;
  const summary=p.detail?.[lang]||p.summary?.[lang];
  return `<article class="pub-entry" id="publication-${escape(id)}" data-record="${escape(p.id)}"><span class="year-badge">${p.year}</span><p class="pub-citation"><span class="pub-authors">${authors(p)}</span> (${p.year}). ${link(paperUrl(p),title,'pub-title')}. <em class="pub-venue">${escape(citationMeta(p,lang))}</em>.</p>${lang==='en'&&p.titleEnTranslated?`<p class="original-title" lang="zh-CN">${escape(p.title)}</p>`:''}<p class="publication-type">${escape(typeLabel(p,lang))}</p><div class="pub-actions">${paperLinks(p,lang)}<details class="pub-details"><summary class="btn-pill btn-bib">BibTeX</summary><div class="pub-panel"><pre tabindex="0"><code>${escape(bibtex(p))}</code></pre><div class="citation-actions"><button type="button" class="btn-pill btn-link" data-copy-bib="${escape(p.id)}">${t.copyCitation}</button><button type="button" class="btn-pill btn-link" data-download-bib="${escape(p.id)}">${t.downloadCitation}</button></div></div></details>${summary?`<details class="pub-details"><summary class="btn-pill btn-abstract">${t.abstract}</summary><div class="pub-panel"><p>${escape(summary)}</p></div></details>`:''}</div></article>`;
 }).join('');
}
export function renderGrouped(list,lang,prefix='year'){
 return [...new Set(list.map(p=>p.year))].sort((a,b)=>b-a).map(y=>`<section class="publication-year-group" id="${prefix}-${y}" aria-labelledby="${prefix}-title-${y}"><h2 class="year-heading" id="${prefix}-title-${y}">${y}</h2><div class="publication-list">${renderPublications(list.filter(p=>p.year===y),lang)}</div></section>`).join('');
}
export const renderYearNav=list=>[...new Set(list.map(p=>p.year))].sort((a,b)=>b-a).map(y=>`<a href="#year-${y}" data-year-link="${y}">${y}<span>${list.filter(p=>p.year===y).length}</span></a>`).join('');
