// Additive expansion from IMG_9269–IMG_9276, inspected 2026-10-21.
// Only previously uncovered required terms receive new questions. Coordinates
// refer to the upright whole photograph; HOTSPOTS applies the same crop and
// transform to image and indicator. Existing question objects stay unchanged.
(() => {
  const D=window.STUDY_DATA;
  const entries=[
    {
      id:'m3-photo9269-external-intercostals', answer:'External intercostals',
      alternatives:['External intercostal','External intercostal muscles','External intercostal muscle'],
      muscleGroup:'axial_muscles',category:'Axial Muscles',
      view:'Thoracic wall · uploaded close-up model', photo:'9269',
      hotspot:{type:'ellipse',x:37,y:38.5,rx:2,ry:1.3,crop:[20,18,58,48]},
      tip:'The outline is within the superficial intercostal belly between the bony ribs, lateral to the costochondral junction. It does not mark the blue costal cartilage or the differently directed medial intercostal fibers.',
      anatomicalReview:'Superficial external rib surface; inferomedial fibers lateral to the costochondral junction. The neighboring medial intercostal layer is outside the indicator.'
    },
    {
      id:'m3-photo9276-tensor-fasciae-latae',answer:'Tensor fasciae latae',
      alternatives:['Tensor fascia latae','Tensor fascia lata','Tensor fasciae latae muscle','TFL'],
      muscleGroup:'appendicular_muscles',category:'Appendicular Muscles',
      view:'Hip and thigh · uploaded anterior model',photo:'9276',
      hotspot:{type:'box',x:77.2,y:37.6,w:2,h:3.2,crop:[53,23,30,42]},
      tip:'The box is within the short lateral hip muscle belly, lateral to the oblique sartorius and above the iliotibial tract. It is not on the pale fascia or the larger quadriceps belly below.',
      anatomicalReview:'Discrete proximal anterolateral thigh belly, immediately lateral to the sartorius origin; distal continuity toward the iliotibial tract.'
    },
    {
      id:'m3-photo9276-adductor-longus',answer:'Adductor longus',
      alternatives:['Adductor longus muscle'],
      muscleGroup:'appendicular_muscles',category:'Appendicular Muscles',
      view:'Hip and thigh · uploaded anterior model',photo:'9276',
      hotspot:{type:'ellipse',x:60.8,y:51,rx:1.05,ry:1.5,crop:[53,37,29,42]},
      tip:'The outline is within the superficial triangular medial-thigh belly, lateral to the slender gracilis and medial to the crossing sartorius. It avoids the pubic tendon, femoral vessels and neighboring quadriceps.',
      anatomicalReview:'Superficial triangular adductor arising near the pubis and spreading toward the femoral shaft, between gracilis medially and sartorius laterally; not the deeper adductor brevis.'
    }
  ];
  const newlyCovered=[];
  for(const entry of entries){
    // Prevent repeated execution or accidental duplication of covered terms.
    if(D.muscles.questions.some(q=>q.answer===entry.answer))continue;
    const {photo,anatomicalReview,...station}=entry;
    const question={...station,unit:'muscles',units:['muscles'],visual:true,cumulative:true,
      questionType:'visual-identification',topics:[station.muscleGroup],region:station.category,
      subcategory:station.view,bone:'Muscle identification',
      prompt:'Identify the indicated muscle.',
      source:'Uploaded classroom photograph · IMG_'+photo+'.heic',
      sourceReferences:['IMG_'+photo+'.heic','Practical 3_238 Term Sheet.pages'],
      verification:'muscles-reviewed-location',
      image:'assets/muscles/new-20261021/img-'+photo+'.jpg',imageRatio:3/4,imageHeight:570,
      markerReview:{date:'2026-10-21',anatomicalReview}};
    D.muscles.questions.push(question);
    D.questions.push(question);
    newlyCovered.push(question.answer);
  }
  D.muscles.photoExpansion={date:'2026-10-21',inspected:8,imagesUsed:2,newlyCovered};
  for(let n=9269;n<=9276;n++)D.muscles.sources.push({file:'IMG_'+n+'.heic · inspected classroom photograph'});
  Object.assign(D.muscles.notes,{
    'Brachialis':'The new arm photographs retain the biceps and neighboring layers. No sufficiently clear, independently isolated brachialis belly was retained; a deep anterior arm view with biceps removed is needed.',
    'Iliacus':'The new torso photographs retain the abdominal wall and do not expose the iliac fossa sufficiently to isolate iliacus from psoas major.',
    'Psoas major':'The posterior abdominal wall is hidden in the new torso photographs; a view exposing psoas beside the lumbar vertebral bodies is needed.',
    'Vastus intermedius':'Rectus femoris remains in place in the new thigh photographs, hiding the deep central quadriceps. A view with rectus femoris removed is needed.',
    'Adductor brevis':'The new medial-thigh views do not expose a separate deep adductor brevis belly. A deeper view with superficial adductors removed is needed.'
  });
})();
