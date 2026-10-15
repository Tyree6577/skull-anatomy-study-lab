// Reorganize existing muscle records in place. IDs, answers, images, markers,
// evidence, and saved progress are preserved. No questions are duplicated.
(() => {
  const D=window.STUDY_DATA;
  const axial=new Set(('Frontal belly|Occipital belly|Orbicularis oculi|Orbicularis oris|Buccinator|Zygomaticus major|Zygomaticus minor|Depressor anguli oris|Platysma|Masseter|Temporalis|Sternocleidomastoid|Diaphragm|External intercostals|Internal intercostals|Rectus abdominis|External oblique|Internal oblique|Transversus abdominis').split('|'));
  const foundations=new Set(['Skeletal muscle tissue','Cardiac muscle tissue','Muscle fascicle','Tendon']);
  const labels={axial_muscles:'Axial Muscles',appendicular_muscles:'Appendicular Muscles',muscle_foundations:'Muscle histology / organization'};
  for(const q of D.muscles.questions){
    const group=axial.has(q.answer)?'axial_muscles':foundations.has(q.answer)?'muscle_foundations':'appendicular_muscles';
    q.topics=[group];q.muscleGroup=group;q.region=labels[group];q.category=labels[group];
  }
  D.muscles.groups={axial:[...axial],foundations:[...foundations],labels};
  Object.assign(D.exam1.topicLabels,labels);
})();
