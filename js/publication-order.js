export function citationCount(paper) {
 const count=paper.scholar?.citedBy;
 return Number.isInteger(count)&&count>=0?count:null;
}

export function scholarYear(paper) {
 return Number.isInteger(paper.scholar?.year)?paper.scholar.year:paper.year;
}

export function sortPublications(list,order='year') {
 const rank=(paper,key)=>Number.isInteger(paper.scholar?.[key])?paper.scholar[key]:Infinity;
 return [...list].sort((a,b)=>{
  if(order==='citations'){
   const ac=citationCount(a),bc=citationCount(b);
   if(ac===null&&bc!==null)return 1;
   if(bc===null&&ac!==null)return -1;
   if(ac!==bc&&ac!==null&&bc!==null)return bc-ac;
   const ar=rank(a,'citationRank'),br=rank(b,'citationRank');
   if(ar!==br)return ar-br;
  }
  const yearDifference=scholarYear(b)-scholarYear(a);
  if(yearDifference)return yearDifference;
  const ar=rank(a,'dateRank'),br=rank(b,'dateRank');
  return ar===br?0:ar-br;
 });
}
