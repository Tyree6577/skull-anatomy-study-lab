// Focused addition from Muscle+models.pptx. All 31 slides were inspected.
// Photograph extraction omits PowerPoint text boxes and answer-revealing arrows.
(() => {
  const D=window.STUDY_DATA;
  const id='m3-models-ppt-slide13-brachialis';
  if(!D.muscles.questions.some(q=>q.answer==='Brachialis')){
    const q={id,unit:'muscles',units:['muscles'],visual:true,cumulative:true,
      questionType:'visual-identification',topics:['appendicular_muscles'],
      muscleGroup:'appendicular_muscles',region:'Appendicular Muscles',category:'Appendicular Muscles',
      subcategory:'Upper arm · posterolateral model, deltoid removed',
      view:'Upper arm · posterolateral model, deltoid removed',bone:'Muscle identification',
      answer:'Brachialis',alternatives:['Brachialis muscle','Musculus brachialis'],
      prompt:'Identify the indicated muscle.',
      tip:'The outline lies in the exposed distal lateral upper-arm belly, deep to the biceps margin and anterior to triceps. It stays above the elbow, away from the radial nerve and the forearm brachioradialis.',
      source:'Muscle+models.pptx · slide 13 photograph',
      sourceReferences:['Muscle+models.pptx, slide 13 (corroborating labeled views: slides 8–10 and 12–14)','ppt/media/image13.jpeg'],
      verification:'muscles-reviewed-location',image:'assets/muscles/models-ppt-20261021/slide13.jpeg',
      imageRatio:3/4,imageHeight:620,
      hotspot:{type:'ellipse',x:34.1,y:54.8,rx:1.15,ry:2,crop:[23,15,49,80]},
      markerReview:{date:'2026-10-21',evidence:'Slide 13 brachialis arrow, corroborated by the anterior and alternate posterolateral views. The marker is inside the exposed muscle belly, not on the radial nerve or adjoining triceps/biceps.'}};
    D.muscles.questions.push(q);D.questions.push(q);
  }
  if(!D.muscles.questions.some(q=>q.answer==='Vastus intermedius')){
    const q={id:'m3-models-ppt-slide18-vastus-intermedius',unit:'muscles',units:['muscles'],
      visual:true,cumulative:true,questionType:'visual-identification',topics:['appendicular_muscles'],
      muscleGroup:'appendicular_muscles',region:'Appendicular Muscles',category:'Appendicular Muscles',
      subcategory:'Thigh · anterior deep model, rectus femoris removed',
      view:'Thigh · anterior deep model, rectus femoris removed',bone:'Muscle identification',
      answer:'Vastus intermedius',alternatives:['Vastus intermedius muscle','Musculus vastus intermedius'],
      prompt:'Identify the indicated muscle.',
      tip:'The outline isolates the exposed central deep quadriceps component after rectus femoris is removed. Its visible surface includes a broad pale aponeurosis; identify the muscle as a whole, not the painted vessels crossing it. Vastus lateralis and vastus medialis remain outside the outlined field.',
      source:'Muscle+models.pptx · slide 18 photograph',
      sourceReferences:['Muscle+models.pptx, slide 18','ppt/media/image18.jpeg','3B Scientific M20 model key, structure 22'],
      verification:'muscles-reviewed-location',image:'assets/muscles/models-ppt-20261021/slide18-upright.jpeg',
      imageRatio:1151/1541,imageHeight:620,
      hotspot:{type:'region',points:[[62.5,27.5],[64.2,30],[63.6,37],[61.5,45],[59.8,53],[57,61],[54.5,66],[50.2,66],[48.8,60],[49.3,49],[50.7,39],[52.7,32],[56,28]],crop:[29,0,48,86],
        note:'Identify the muscle represented by the whole outlined field, rather than an individual painted vessel.'},
      markerReview:{date:'2026-10-21',evidence:'Slide 18 labels the exposed central component as vastus intermedius; the matching M20 key independently identifies model structure 22 as this muscle. Region isolation avoids a misleading dot on a vessel or adjacent vastus. The supplied photograph is rotated 90 degrees clockwise for an upright view; no anatomical content is changed.'}};
    D.muscles.questions.push(q);D.questions.push(q);
  }
  // The user explicitly requested the instructor's label and exact arrow
  // after reviewing the independently unresolved model-key discrepancy.
  if(!D.muscles.questions.some(q=>q.answer==='Adductor brevis')){
    const q={id:'m3-models-ppt-slide20-adductor-brevis',unit:'muscles',units:['muscles'],
      visual:true,cumulative:true,questionType:'visual-identification',topics:['appendicular_muscles'],
      muscleGroup:'appendicular_muscles',region:'Appendicular Muscles',category:'Appendicular Muscles',
      subcategory:'Thigh · posterior model, class-labeled target',
      view:'Thigh · posterior model, class-labeled target',bone:'Muscle identification',
      answer:'Adductor brevis',alternatives:['Adductor brevis muscle','Musculus adductor brevis'],
      prompt:'Identify the indicated muscle using the class slide’s terminology.',
      tip:'This station follows the class slide’s Adductor brevis label at the original arrow endpoint. It is a course-labeled target, not an independently anatomy-verified identification; the model-key discrepancy remains noted in Coverage.',
      source:'Muscle+models.pptx · slide 20 · instructor-labeled target',
      sourceReferences:['Muscle+models.pptx, slide 20','ppt/media/image20.jpeg','User-confirmed class screenshot, 2026-10-21'],
      verification:'muscles-course-labeled-location',image:'assets/muscles/models-ppt-20261021/slide20-upright.jpeg',
      imageRatio:1153/1541,imageHeight:620,
      hotspot:{type:'pointer',x:54.756,y:19.459,fromX:68,fromY:15,crop:[35,0,37,63]},
      markerReview:{date:'2026-10-21',evidence:'Exact slide 20 instructor arrow endpoint transferred through the slide crop and 90-degree photograph rotation. Stored answer follows the instructor label at the user’s explicit request. Independent anatomical identity remains unresolved.',independentlyVerified:false,courseLabelConfirmed:true}};
    D.muscles.questions.push(q);D.questions.push(q);
  }
  D.muscles.sources.push({file:'Muscle+models.pptx · all 31 slides inspected'});
  D.muscles.modelExpansion={file:'Muscle+models.pptx',slidesInspected:31,covered:['Brachialis','Vastus intermedius','Adductor brevis'],
    courseLabeled:['Adductor brevis'],unsupported:['Psoas major','Iliacus'],usedSlides:[13,18,20]};
  Object.assign(D.muscles.notes,{
    'Adductor brevis':'Course-labeled target: the question follows slide 20’s Adductor brevis label and exact arrow, as explicitly requested. Independent anatomical verification remains unresolved because of the model-key discrepancy; confirm the identification with the instructor.',
    'Psoas major':'Muscle+models.pptx slides 16–18 show the combined iliopsoas unit on a detached thigh model, without a distinct psoas major belly or lumbar attachment. An open posterior abdominal-wall view showing psoas beside the lumbar spine is needed.',
    'Iliacus':'Muscle+models.pptx slides 16–18 label only combined iliopsoas; the iliac fossa and a separate fan-shaped iliacus belly are not shown. A pelvic view exposing iliacus in the iliac fossa, separate from psoas, is needed.'
  });
})();
