// Reuse the retained image renderer, typed-answer form, scoring, and review.
(() => {
  const escape=window.CUMULATIVE.escape,oldGrade=grade;
  const normalized=s=>norm(s).replace(/[.!?]$/,'');
  const known=new Set(D.joints.questions.flatMap(q=>[q.answer,...q.alternatives]).map(normalized));
  grade=function(q,response){
    if(q.unit!=='joints')return oldGrade(q,response);
    const given=normalized(response),accepted=[q.answer,...q.alternatives].map(normalized);
    if(accepted.includes(given))return{spelled:true,identified:true,kind:'correct'};
    // Distinct functional classes must never count as a spelling error.
    const classes=['synarthrosis','synarthroses','amphiarthrosis','amphiarthroses','diarthrosis','diarthroses'];
    const conflict=known.has(given)||classes.some(c=>given.includes(c)&&!accepted.some(a=>a.includes(c)))||(/\b(sheath|fluid|cavity|cartilage|membrane)\b/.test(given)&&!accepted.some(a=>a.split(' ').at(-1)===given.split(' ').at(-1)));
    const near=given.length>3&&!conflict&&Math.min(...accepted.map(a=>dist(given,a)))<=2;
    return{spelled:false,identified:near,kind:near?'spelling':'incorrect'};
  };
  window.CUMULATIVE.grade=grade;
  const oldImage=imageMarkup;
  imageMarkup=(q,alt)=>q.unit==='joints'?`<div class="joint-image ${q.id.startsWith('j3-atlantoaxial-')?'joint-photo':''}">${window.HOTSPOTS.render(q,alt||'Uploaded joint diagram with one target indicated')}</div>`:oldImage(q,alt);
  const oldEvidence=evidenceLabel;
  evidenceLabel=q=>q.unit==='joints'?'Uploaded diagram + Practical 3 term sheet · reviewed target':oldEvidence(q);
  const oldQuestionPanel=questionPanel;
  questionPanel=function(exam=false){
    const q=state.pool[state.index],html=oldQuestionPanel(exam);
    if(!q||q.unit!=='joints'||exam)return html;
    const box=document.createElement('div');box.innerHTML=html;
    box.querySelector('h1').textContent=q.jointKind==='components'?'Identify the indicated structure':q.jointKind==='name'?'Name the indicated joint':'Classify the indicated joint';
    return box.innerHTML;
  };
  const oldHome=home;
  home=function(){
    const box=document.createElement('div');box.innerHTML=oldHome();
    box.querySelector('.intro p').append(' Joints and separate Axial / Appendicular Muscles are now available.');
    box.querySelector('.source-list').insertAdjacentHTML('beforeend','<li>Joints · four uploaded screenshots + Practical 3 term sheet</li>');
    if(window.CUMULATIVE.eligible().some(q=>q.unit==='joints')){
      const modes={all:'All joints content',components:'Joint structures / components',name:'Joint names only',structural:'Structural class + subtypes',functional:'Functional classification only'};
      box.querySelector('.selection-panel').insertAdjacentHTML('beforeend',`<div class="field" style="margin-top:14px"><label for="jointModeFilter">Joints practice focus</label><select id="jointModeFilter">${Object.entries(modes).map(([value,label])=>`<option value="${value}" ${window.CUMULATIVE.selection().jointMode===value?'selected':''}>${label}</option>`).join('')}</select><p class="small">Applies only to Joints, including mixed sets. “All joints content” mixes component, name, structural, and functional questions. Other selected categories are unaffected.</p></div>`);
    }
    return box.innerHTML;
  };
  const oldRender=render;
  render=function(){oldRender();const focus=document.getElementById('jointModeFilter');if(focus)focus.onchange=()=>{window.CUMULATIVE.setJointMode(focus.value);render();};};
  const oldCoverage=coverage;
  coverage=()=>oldCoverage()+`<section class="panel" style="margin-top:22px"><h2>Joints</h2><p class="small">${D.joints.questions.length} image-based questions from all four new screenshots. Components, names, structural class/subtype, and functional class use the same scoring and review flow. Classifications follow the supplied Practical 3 term sheet.</p><div class="table-scroll"><table class="coverage"><thead><tr><th>Component</th><th>Coverage</th></tr></thead><tbody>${D.joints.componentRows.map(row=>`<tr><td>${escape(row[1])}</td><td>Reviewed visual target</td></tr>`).join('')}</tbody></table></div><details><summary>Joint examples and source limits</summary><ul class="source-list">${D.joints.specimens.map(s=>`<li>${escape(s.name)}: ${escape(s.structural)} / ${escape(s.subtype)}; ${escape(s.functional)}${s.id==='atlantoaxial'?' (subtype reviewed in feedback, not independently image-tested)':''}.</li>`).join('')}</ul><ul class="source-list">${D.joints.limitations.map(x=>`<li>${escape(x)}</li>`).join('')}</ul></details></section>`;
  render();
})();
