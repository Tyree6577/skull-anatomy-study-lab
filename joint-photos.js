// Additive classroom-photo stations. Existing banks and indicators are untouched.
// Coordinates refer to the complete, unretouched PDF page render, before crop.
(() => {
  const D=window.STUDY_DATA, questions=[];
  const E=(x,y,rx,ry,crop)=>({type:'ellipse',x,y,rx,ry,crop});
  const P=(x,y,fromX,fromY,crop)=>({type:'pointer',x,y,fromX,fromY,crop});
  const B=(x,y,w,h,crop)=>({type:'box',x,y,w,h,crop});
  const frames={shoulder:[16,12,66,53],anterior:[32,33,37,38],posterior:[36,30,31,43]};
  const files={
    photo9225:{image:'assets/joints/class-model-9225.jpg',imageRatio:1350/1800,source:'Classroom model photograph · IMG_9225.pdf, page 1'},
    photo9226:{image:'assets/joints/class-model-9226.jpg',imageRatio:1350/1800,source:'Classroom model photograph · IMG_9226.pdf, page 1'},
    photo9227:{image:'assets/joints/class-model-9227.jpg',imageRatio:1350/1800,source:'Classroom model photograph · IMG_9227.pdf, page 1'}
  };
  const topics={components:'joint_components',name:'joint_names',structural:'joint_structural',subtype:'joint_structural',functional:'joint_functional'};
  const categories={components:'Joint components',name:'Joint identification',structural:'Structural classification',subtype:'Structural subtype',functional:'Functional classification'};
  const prompts={components:'Identify the indicated structure.',name:'Name the indicated joint or articulation.',structural:'Give the broad structural classification of the indicated joint.',subtype:'Give the structural subtype of the indicated joint.',functional:'Give the functional classification of the indicated joint.'};
  function add(id,file,hotspot,kind,answer,alternatives,tip,station){
    questions.push({id:'jp-'+id,unit:'joints',units:['joints'],visual:true,cumulative:true,
      questionType:'visual-identification',jointKind:kind,topics:[topics[kind]],
      region:'Joints',category:'Joints',subcategory:categories[kind],
      view:'Classroom joint model · '+station,bone:'Image-based joint review',
      answer,alternatives,prompt:prompts[kind],tip,...files[file],imageHeight:570,
      hotspot,jointPhoto:true,verification:'joints-reviewed-location',
      sourceReferences:[files[file].source,'Practical 3_238 Term Sheet.pages'],
      classificationSource:'Practical 3_238 Term Sheet.pages'});
  }
  const specimens=[
    {id:'photo-shoulder',file:'photo9225',station:'Photo 1',target:E(32.5,34,13,12,frames.shoulder),name:'Glenohumeral joint',names:['Shoulder','Shoulder joint','Glenohumeral','Shoulder (glenohumeral) joint'],structural:'Synovial',subtype:'Ball-and-socket',subtypes:['Ball and socket','Ball-and-socket joint','Spheroidal'],functional:'Diarthrosis'},
    {id:'photo-knee-anterior',file:'photo9226',station:'Photo 2',target:E(50,52,14,9,frames.anterior),name:'Knee joint',names:['Knee','Tibiofemoral joint'],structural:'Synovial',subtype:'Hinge',subtypes:['Hinge joint','Modified hinge','Modified hinge joint'],functional:'Diarthrosis'},
    {id:'photo-knee-posterior',file:'photo9227',station:'Photo 3',target:E(51,44,11.5,6,frames.posterior),name:'Knee joint',names:['Knee','Tibiofemoral joint'],structural:'Synovial',subtype:'Hinge',subtypes:['Hinge joint','Modified hinge','Modified hinge joint'],functional:'Diarthrosis'}
  ];
  for(const s of specimens){
    const tip=`${s.name}: ${s.structural.toLowerCase()} / ${s.subtype.toLowerCase()}; ${s.functional.toLowerCase()}. `+(s.subtype==='Hinge'?'The supplied Practical 3 term sheet lists the knee under Hinge. Modified hinge is also accepted.':'Classifications follow the supplied Practical 3 term sheet.');
    add(s.id+'-name',s.file,s.target,'name',s.name,s.names,tip,s.station);
    add(s.id+'-structural',s.file,s.target,'structural',s.structural,['Synovial joint'],tip,s.station);
    add(s.id+'-subtype',s.file,s.target,'subtype',s.subtype,[s.subtype+' joint',...s.subtypes],tip,s.station);
    add(s.id+'-functional',s.file,s.target,'functional',s.functional,['Diarthroses','Freely movable','Freely movable joint'],tip,s.station);
  }
  const components=[
    ['shoulder-capsule','photo9225','Articular capsule',['Joint capsule','Glenohumeral joint capsule','Fibrous capsule','Fibrous layer of articular capsule','Fibrous layer of the articular capsule'],B(28,38,9,5,frames.shoulder),'The box isolates the broad capsular sleeve around the humeral neck, below the exposed head and away from the fastening screws. The inner synovial membrane is not separately visible.','Photo 1'],
    ['knee-tendon','photo9226','Tendon',['Quadriceps tendon','Quadriceps femoris tendon','Tendon of quadriceps femoris'],E(48.6,33,2.2,4,[33,18,35,53]),'The outline follows the long anterior tendon above the patellar region. Its position and continuity with the patellar apparatus identify it, not its orange color.','Photo 2'],
    ['knee-meniscus','photo9226','Meniscus',['Lateral meniscus','Lateral meniscus of knee'],E(40.5,52.6,1.6,.55,[33,39,32,26]),'The small oval isolates the exposed crescent-shaped wedge between the lateral femoral condyle and the tibial plateau; the fibula at image left provides lateral orientation.','Photo 2'],
    ['knee-ligament-anterior','photo9226','Ligament',['Collateral ligament','Fibular collateral ligament','Lateral collateral ligament','Lateral collateral ligament of knee','LCL'],P(36.3,48.5,31.5,46,frames.anterior),'The pointer ends on the narrow band running from the lateral femoral region toward the fibular head. The scored course-level answer is ligament; its specific name is also accepted.','Photo 2'],
    ['knee-ligament-posterior','photo9227','Ligament',['Collateral ligament','Tibial collateral ligament','Medial collateral ligament','Medial collateral ligament of knee','MCL'],P(57.5,48.3,64,51.4,[36,33,31,29]),'The pointer tip is on the medial side band connecting the femur to the tibia. The fibula on the opposite side helps establish orientation. The scored course-level answer is ligament.','Photo 3']
  ];
  for(const [id,file,answer,aliases,target,tip,station] of components)add(id,file,target,'components',answer,aliases,tip,station);
  Object.assign(D.joints.files,files);
  D.joints.specimens.push(...specimens);
  D.joints.componentRows.push(['photo-capsule','Articular capsule',[],null,'Classroom model target'],['photo-ligament','Ligament',[],null,'Classroom model targets']);
  D.joints.limitations.push('The three classroom photographs add external model views, not an opened joint. No new photo stations test synovial fluid, an internal synovial membrane, bursae, cruciate ligaments, or a separately distinguishable articular-cartilage layer. Hardware and uncertain overlapping bands are not tested.');
  D.joints.questions.push(...questions);
  D.questions.push(...questions);
})();
