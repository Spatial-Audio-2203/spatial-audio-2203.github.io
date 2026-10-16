import {readFile,readdir,stat} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {translations,papers,patents,software,research,bibliography,bibtex} from '../dist/js/content.js';
import {sortPublications} from '../dist/js/publication-order.js';
const root=path.resolve(fileURLToPath(new URL('../',import.meta.url))),dist=path.join(root,'dist');
const keys=Object.keys(translations.zh),missing=keys.filter(k=>!translations.en[k]);
if(missing.length)throw new Error('Missing English translations: '+missing.join(', '));
const all=[...papers,...patents,...software];
if(new Set(all.map(p=>p.id)).size!==all.length)throw new Error('Duplicate publication identifiers');
for(const p of all){
  if(!p.title||!p.authors.some(n=>['Tianshu Qu','曲天书'].includes(n))||!p.year||!p.type||!p.source||!p.references?.length)throw new Error('Incomplete or unrelated record: '+p.id);
  if(p.arxiv&&!/^\d{4}\.\d{4,5}$/.test(p.arxiv))throw new Error('Invalid arXiv identifier: '+p.id);
  if(p.doi&&!/^10\.\d{4,9}\/.+/.test(p.doi))throw new Error('Invalid DOI: '+p.id);
  if(bibtex(p).includes('undefined'))throw new Error('Incomplete citation: '+p.id);
}
const data=JSON.parse(await readFile(path.join(root,'data/publications.json'),'utf8'));
if(JSON.stringify(data)!==JSON.stringify(bibliography))throw new Error('Metadata source and browser module differ');
if(data.coverage.length!==data.facultyRecordCount||new Set(data.coverage.map(x=>x.source)).size!==data.facultyRecordCount)throw new Error('Incomplete faculty bibliography coverage');
for(const covered of data.coverage){const p=all.find(p=>p.id===covered.id);if(!p||p.source!==covered.source)throw new Error('Missing faculty record: '+covered.source);}
const pdfSources=JSON.parse(await readFile(path.join(root,'data/pdf-sources.json'),'utf8'));
for(const record of pdfSources.records){const p=papers.find(p=>p.id===record.id);if(!p||p.pdf!==record.pdf||!p.pdfChecked||!record.verification||p.type!==record.type)throw new Error('PDF source does not match catalogue: '+record.id);}
for(const r of research)for(const id of r.papers)if(!papers.find(p=>p.id===id))throw new Error('Unknown related publication: '+id);
for(const directory of ['dist/js','scripts'])for(const file of await readdir(path.join(root,directory))){if(!/\.(?:js|mjs)$/.test(file))continue;const result=spawnSync(process.execPath,['--check',path.join(root,directory,file)],{encoding:'utf8'});if(result.status!==0)throw new Error(result.stderr);}
const figureData=JSON.parse(await readFile(path.join(root,'data/paper-figures.json'),'utf8'));
const scholar=JSON.parse(await readFile(path.join(root,'data/google-scholar.json'),'utf8'));
if(new URL(scholar.profile_url).hostname!=='scholar.google.com'||!scholar.checked_date)throw new Error('Missing Scholar source');
if(new Set(scholar.matches.map(m=>m.scholarId)).size!==scholar.matches.length)throw new Error('Duplicate Scholar matches');
const figurePapers=figureData.figures.map(f=>{
 const paper=papers.find(p=>p.id===f.paper),match=scholar.matches.find(m=>m.id===f.paper);
 if(!match||!Number.isInteger(match.scholarYear)||!Number.isInteger(match.citedBy)||!Number.isInteger(match.dateRank)||!Number.isInteger(match.citationRank))throw new Error('Missing Scholar data for homepage card: '+f.paper);
 return {id:paper.id,year:paper.year,scholar:{year:match.scholarYear,citedBy:match.citedBy,dateRank:match.dateRank,citationRank:match.citationRank}};
});
for(const [mode,key] of [['year','dateRank'],['citations','citationRank']]){
 const actual=sortPublications(figurePapers,mode).map(p=>p.id),expected=[...figurePapers].sort((a,b)=>a.scholar[key]-b.scholar[key]).map(p=>p.id);
 if(JSON.stringify(actual)!==JSON.stringify(expected))throw new Error('Homepage card order differs from Scholar: '+mode);
}
for(const f of figureData.figures){
 if(!papers.some(p=>p.id===f.paper)||!f.label.zh||!f.label.en||!f.source.startsWith('https://')||!f.width||!f.height)throw new Error('Incomplete paper figure: '+f.paper);
 if(createHash('sha256').update(await readFile(path.join(dist,f.image))).digest('hex')!==f.image_sha256)throw new Error('Paper figure differs from cited extraction: '+f.paper);
}
const resourceData=JSON.parse(await readFile(path.join(root,'data/resources.json'),'utf8'));
for(const r of resourceData.items){
 if(!papers.some(p=>p.id===r.paper)||!r.name.zh||!r.name.en||!r.description.zh||!r.description.en||!r.links.length)throw new Error('Incomplete resource: '+r.id);
 for(const l of r.links)if(!/^https:\/\//.test(l.url)||!translations.zh[l.kind]||!translations.en[l.kind])throw new Error('Invalid resource link: '+r.id);
}
const routes=['index.html','en/index.html',...['publications','research','people','resources','contact'].flatMap(p=>[p+'/index.html','en/'+p+'/index.html'])];
for(const route of routes){
  const filename=path.join(dist,route),html=await readFile(filename,'utf8');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);if(ids.length!==new Set(ids).size)throw new Error('Duplicate HTML IDs: '+route);
  if(/\{\{.*?\}\}/.test(html))throw new Error('Unresolved template: '+route);
  for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){
    const url=match[1];if(/^(?:https?:|mailto:|tel:|data:)/.test(url))continue;
    const pathname=url.split(/[?#]/)[0];let target=url.startsWith('/')?path.join(dist,pathname):path.resolve(path.dirname(filename),pathname);
    if(!target.startsWith(dist+path.sep)&&target!==dist)throw new Error('Asset outside dist: '+url);
    const info=await stat(target);if(info.isDirectory())target=path.join(target,'index.html');if(!(await stat(target)).isFile())throw new Error('Missing asset: '+url);
  }
  for(const match of html.matchAll(/href="#([^"]+)"/g))if(!ids.includes(match[1]))throw new Error('Broken anchor: '+match[1]);
  if(!html.includes('rel="canonical"')||!html.includes('hreflang="en"')||!html.includes('hreflang="zh-CN"'))throw new Error('Missing language metadata: '+route);
  if(route.includes('publications/'))for(const p of all)if(!html.includes('data-record="'+p.id+'"'))throw new Error('Missing static record: '+p.id);
  if(route.startsWith('en/')&&!/<html\s+lang="en"(?:\s|>)/.test(html))throw new Error('Wrong language: '+route);
}
const citations=await readFile(path.join(dist,'catalog.bib'),'utf8');if((citations.match(/^@/gm)||[]).length!==papers.length)throw new Error('Incomplete bibliography export');
console.log(JSON.stringify({status:'passed',routes:routes.map(r=>'/'+r.replace('index.html','')),scholarlyRecords:papers.length,pdfLinks:papers.filter(p=>p.pdf||p.arxiv).length,paperFigures:figureData.figures.length,resources:resourceData.items.length,patents:patents.length,software:software.length,facultyRecordsCovered:data.coverage.length,sourcePages:data.sourcePages,translationKeys:keys.length,checks:['metadata completeness','faculty bibliography coverage','distinct publication IDs','BibTeX exports','JavaScript syntax','local assets','navigation targets','static records','bilingual metadata','paper figure provenance','bilingual resource links','Scholar homepage card ordering']}));
