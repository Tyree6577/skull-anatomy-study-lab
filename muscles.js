// Muscle-only integrations. Existing banks, renderer, storage and scoring
// paths are retained; no changes to old question objects or old answers.
(() => {
  const escape=window.CUMULATIVE.escape, oldGrade=grade;
  const normalized=s=>norm(s).replace(/[.!?]$/,'');
  const answers=new Set(D.muscles.questions.flatMap(q=>[q.answer,...q.alternatives]).map(normalized));
  grade=function(q,response){
    if(q.unit!=='muscles')return oldGrade(q,response);
    const given=normalized(response),accepted=[q.answer,...q.alternatives].map(normalized);
    if(accepted.includes(given))return{spelled:true,identified:true,kind:'correct'};
    // Neighboring muscles must never be accepted as minor spelling errors.
    // A submitted anatomical qualifier may not contradict the target name.
    const pairs=[['major','minor'],['longus','brevis'],['anterior','posterior'],['medialis','lateralis'],['superficialis','profundus'],['internal','external'],['flexor','extensor'],['abductor','adductor'],['skeletal','cardiac']];
    const wrongQualifier=pairs.some(pair=>pair.some(w=>new RegExp('\\b'+w+'\\b').test(given)&&!new RegExp('\\b'+w+'\\b').test(normalized(q.answer))));
    const near=given.length>3&&!answers.has(given)&&!wrongQualifier&&Math.min(...accepted.map(a=>dist(given,a)))<=2;
    return{spelled:false,identified:near,kind:near?'spelling':'incorrect'};
  };
  window.CUMULATIVE.grade=grade;
  const oldEvidence=evidenceLabel;
  evidenceLabel=q=>q.unit==='muscles'?(q.verification==='muscles-keyed-location'?'Latest uploads · keyed structure, reviewed marker':'Latest uploads · reviewed muscle location'):oldEvidence(q);
  const oldImage=imageMarkup;
  imageMarkup=(q,alt)=>q.unit==='muscles'?window.HOTSPOTS.render(q,alt||'Uploaded class muscle image with one target indicated'):oldImage(q,alt);
  const oldHome=home;
  home=function(){
    const box=document.createElement('div');box.innerHTML=oldHome();
    box.querySelector('.intro p').append(' Muscles uses only your six latest Exam 3 files.');
    box.querySelector('.source-list').insertAdjacentHTML('beforeend','<li>Muscles · six latest Exam 3 uploads only</li>');
    return box.innerHTML;
  };
  const oldCoverage=coverage;
  coverage=function(){
    const {questions,required,notes,sources}=D.muscles;
    const covered=required.filter(term=>questions.some(q=>q.answer===term)).length;
    return oldCoverage()+`<section class="panel" style="margin-top:22px"><h2>Muscles · latest uploaded files only</h2><p class="small">${questions.length} image questions · ${covered} of ${required.length} muscle terms have reviewed visual locations. All six files were inspected, including the labeled practice sheet, unlabeled models, term sheet, and all 27 pages of the virtual practical. Older uploads and outside images are not used in this section.</p><p class="note">Muscle identification and related muscle image stations only. The joint-classification and older-review material in this batch were inspected but are not added to Muscles. A term without a reliable isolated target stays uncovered.</p><div class="table-scroll"><table class="coverage"><thead><tr><th>Required muscle term</th><th>Image locations</th><th>Evidence / limitation</th></tr></thead><tbody>${required.map(term=>{const n=questions.filter(q=>q.answer===term).length;return `<tr><td>${escape(term)}</td><td><span class="status ${n?'playable':'needed'}">${n?n+' reviewed location'+(n===1?'':'s'):'Not yet visually covered'}</span></td><td>${escape(n?'Latest class images + Practical 3 term sheet':notes[term]||'No unambiguous marker retained from the supplied views.')}</td></tr>`;}).join('')}</tbody></table></div><details style="margin-top:16px"><summary>Muscles source files</summary><ul class="source-list">${sources.map(s=>`<li>${escape(s.file)}</li>`).join('')}</ul><p class="small">Locations keyed in the virtual practical retain their question reference. Newly placed markers are reviewed study locations, not original instructor arrows. Image crops remove embedded labels where necessary; source photos remain unchanged.</p></details></section>`;
  };
  render();
})();
