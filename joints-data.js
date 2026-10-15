// Focused addition: four uploaded screenshots + the supplied Practical 3 term sheet.
// Original screenshot bytes are retained; coordinates are percentages before crop.
(() => {
  const D=window.STUDY_DATA, questions=[];
  const E=(x,y,rx,ry,crop)=>({type:'ellipse',x,y,rx,ry,crop});
  const P=(x,y,fromX,fromY,crop)=>({type:'pointer',x,y,fromX,fromY,crop});
  const L=(points,crop)=>({type:'boundary',points,crop});
  const B=(x,y,w,h,crop)=>({type:'box',x,y,w,h,crop});
  const files={
    components:{image:'assets/joints/synovial-components.png',imageRatio:1565/1173,source:'Uploaded screenshot · 8:55:55 PM'},
    types:{image:'assets/joints/joint-types.png',imageRatio:1556/1164,source:'Uploaded screenshot · 8:55:28 PM'},
    cartilage:{image:'assets/joints/cartilaginous-types.png',imageRatio:1740/1291,source:'Uploaded screenshot · 8:55:01 PM'},
    fibrous:{image:'assets/joints/fibrous-types.png',imageRatio:1773/1292,source:'Uploaded screenshot · 8:54:36 PM'}
  };
  const topics={components:'joint_components',name:'joint_names',structural:'joint_structural',subtype:'joint_structural',functional:'joint_functional'};
  const jointKinds={components:'Joint components',name:'Joint identification',structural:'Structural classification',subtype:'Structural subtype',functional:'Functional classification'};
  function add(id,file,hotspot,kind,answer,alternatives,tip,station){
    questions.push({id:'j3-'+id,unit:'joints',units:['joints'],visual:true,cumulative:true,
      questionType:'visual-identification',jointKind:kind,topics:[topics[kind]],
      region:'Joints',category:'Joints',subcategory:jointKinds[kind],
      view:'Uploaded joint diagram · '+station,bone:'Image-based joint review',
      answer,alternatives,prompt:kind==='components'?'Identify the indicated structure.':kind==='name'?'Name the indicated joint or articulation.':kind==='structural'?'Give the broad structural classification of the indicated joint.':kind==='subtype'?'Give the structural subtype of the indicated joint.':'Give the functional classification of the indicated joint.',
      tip,...files[file],imageHeight:570,hotspot,verification:'joints-reviewed-location',
      sourceReferences:[files[file].source,'Practical 3_238 Term Sheet.pages'],
      classificationSource:'Practical 3_238 Term Sheet.pages'});
  }
  const componentRows=[
    ['articular-cartilage','Articular cartilage', ['Hyaline articular cartilage'],E(43,38.8,.75,.25,[33,30,31,18]),'The thin cartilage covering follows the articulating bone surface.'],
    ['synovial-cavity','Synovial cavity',['Joint cavity','Articular cavity'],E(48,39.1,.85,.4,[33,30,31,18]),'The outline is inside the space between the cartilage-covered bone ends. The cavity contains synovial fluid, but this drawing does not distinguish the fluid as a separate visible structure.'],
    ['meniscus','Meniscus',['Articular disc','Meniscus / articular disc','Meniscus (articular disc)'],E(38.5,41.2,1.1,.45,[33,30,31,18]),'The shaded wedge between the bone ends is the meniscus in this frontal knee schematic.'],
    ['fibrous-layer','Fibrous layer of articular capsule',['Fibrous capsule','Fibrous layer','Outer fibrous layer','Fibrous layer of the articular capsule'],P(35.75,40.4,31.5,41.5,[30,29,35,21]),'The pointer ends within the outer wall of the capsule, outside its thin inner lining.'],
    ['synovial-membrane','Synovial membrane',['Synovium','Synovial lining'],P(36.55,38.3,31.5,36.8,[30,29,35,21]),'The pointer ends on the thin inner capsular lining beside the joint cavity, not the cartilage covering the bone end.'],
    ['bursa','Bursa',['Bursae','Synovial bursa'],B(23.5,89.4,27,10,[20,84,34,16]),'The box isolates the separate flattened fluid-filled sac shown below the joint.'],
    ['tendon-sheath','Tendon sheath',['Synovial tendon sheath','Tendon sheaths'],E(65,88.4,.9,2.2,[59,62,19,38]),'The outline is on the outer sleeve surrounding the tendon, rather than the exposed core.'],
    ['tendon','Tendon',['Tendons'],E(72.1,71.3,.85,1.6,[59,62,19,38]),'The target is on the exposed central cord that continues inside the surrounding sheath.']
  ];
  for(const [id,answer,aliases,hotspot,tip] of componentRows)add(id,'components',hotspot,'components',answer,aliases,tip,'A');
  const specimens=[
    {id:'sagittal',file:'fibrous',station:'B',target:L([[21.5,29],[21.5,33],[21.4,37]],[5,2,35,52]),name:'Sagittal suture',names:['Suture','Sagittal suture joint'],structural:'Fibrous',subtype:'Suture',functional:'Synarthrosis'},
    {id:'forearm-membrane',file:'fibrous',station:'C',target:E(70.6,30.2,1.5,5,[62,1,19,50]),name:'Radioulnar syndesmosis',names:['Syndesmosis','Interosseous membrane between radius and ulna','Radioulnar interosseous membrane','Middle radioulnar joint'],structural:'Fibrous',subtype:'Syndesmosis',functional:'Amphiarthrosis'},
    {id:'leg-membrane',file:'fibrous',station:'D',target:E(57.2,37.2,1.4,6,[49,2,16,66]),name:'Tibiofibular syndesmosis',names:['Syndesmosis','Interosseous membrane between tibia and fibula','Tibiofibular interosseous membrane'],structural:'Fibrous',subtype:'Syndesmosis',functional:'Amphiarthrosis'},
    {id:'tooth-socket',file:'fibrous',station:'E',target:P(29.6,77.5,37,74,[5,51,36,41]),name:'Gomphosis',names:['Tooth socket joint','Dentoalveolar joint','Tooth and socket joint'],structural:'Fibrous',subtype:'Gomphosis',functional:'Synarthrosis'},
    {id:'growth-plate',file:'cartilage',station:'F',target:L([[13.2,16.3],[15.4,14.6],[18,13.8]],[0,3,33,94]),name:'Epiphyseal plate',names:['Growth plate','Epiphyseal synchondrosis'],structural:'Cartilaginous',subtype:'Synchondrosis',functional:'Synarthrosis'},
    {id:'intervertebral-disc',file:'cartilage',station:'G',target:E(68.5,31.3,1.5,.6,[49,2,43,92]),name:'Intervertebral symphysis',names:['Intervertebral disc','Intervertebral disk','Intervertebral joint','Intervertebral symphysis joint'],structural:'Cartilaginous',subtype:'Symphysis',functional:'Amphiarthrosis'},
    {id:'pubic',file:'cartilage',station:'H',target:B(68.1,69.2,1.1,3.2,[44,31,51,64]),name:'Pubic symphysis',names:['Symphysis pubis'],structural:'Cartilaginous',subtype:'Symphysis',functional:'Amphiarthrosis'},
    {id:'shoulder',file:'types',station:'I',target:E(37.5,24.1,.55,2.3,[25,7,26,36]),name:'Glenohumeral joint',names:['Shoulder','Shoulder joint','Glenohumeral'],structural:'Synovial',subtype:'Ball-and-socket',subtypes:['Ball and socket','Ball-and-socket joint','Spheroidal'],functional:'Diarthrosis'},
    {id:'elbow',file:'types',station:'J',target:E(66.6,27.7,1.4,1.4,[51,7,27,30]),name:'Humeroulnar joint',names:['Elbow','Elbow joint','Humeroulnar'],structural:'Synovial',subtype:'Hinge',subtypes:['Hinge joint','Ginglymus'],functional:'Diarthrosis'},
    {id:'thumb-cmc',file:'types',station:'K',target:E(26.2,55.3,.85,.9,[15,45,29,54]),name:'First carpometacarpal joint',names:['Carpometacarpal joint of thumb','Thumb carpometacarpal joint','Thumb CMC joint','First CMC joint','Trapeziometacarpal joint'],structural:'Synovial',subtype:'Saddle',subtypes:['Saddle joint','Sellar'],functional:'Diarthrosis'},
    {id:'intercarpal',file:'types',station:'L',target:P(31.1,51.7,39.5,49,[15,45,29,54]),name:'Intercarpal joint',names:['Intercarpal','Intercarpal joints'],structural:'Synovial',subtype:'Plane',subtypes:['Plane joint','Gliding','Gliding joint','Plane (gliding)'],functional:'Diarthrosis'},
    {id:'knuckle',file:'types',station:'M',target:E(34.5,72.2,.8,.7,[15,45,29,54]),name:'Metacarpophalangeal joint',names:['MCP joint','Knuckle','Knuckle joint','Metacarpophalangeal'],structural:'Synovial',subtype:'Condylar',subtypes:['Condyloid','Ellipsoid','Condyloid joint','Ellipsoidal','Condylar (ellipsoid)'],functional:'Diarthrosis'},
    {id:'atlantoaxial',file:'types',station:'N',target:E(65,53.3,1.3,.8,[51,47,28,51]),name:'Atlantoaxial joint',names:['Atlantoaxial','Median atlantoaxial joint','Atlas-axis joint','Joint between atlas and axis'],structural:'Synovial',subtype:'Pivot',subtypes:['Pivot joint','Trochoid'],functional:'Diarthrosis',note:'The course lists the atlantoaxial joint as a pivot joint. The marker locates the atlas-axis level; the median pivot is not separately exposed in this external view.'},
    {id:'knee',file:'components',station:'O',target:E(48.4,40,4.5,3.8,[32,13,33,64]),name:'Knee joint',names:['Knee','Tibiofemoral joint'],structural:'Synovial',subtype:'Hinge',subtypes:['Hinge joint','Modified hinge','Modified hinge joint'],functional:'Diarthrosis'}
  ];
  // The median atlas-axis pivot is not resolved in this view. Do not force a
  // subtype station onto an image of the lateral articulations.
  for(const s of specimens){
    const info=`${s.name}: ${s.structural.toLowerCase()} / ${s.subtype.toLowerCase()}; ${s.functional.toLowerCase()}. ${s.note||'Classifications follow the supplied Practical 3 term sheet.'}`;
    add(s.id+'-name',s.file,s.target,'name',s.name,s.names,info,s.station);
    add(s.id+'-structural',s.file,s.target,'structural',s.structural,[s.structural+' joint'],info,s.station);
    if(s.id!=='atlantoaxial')add(s.id+'-subtype',s.file,s.target,'subtype',s.subtype,[s.subtype+' joint',...(s.subtypes||[])],info,s.station);
    add(s.id+'-functional',s.file,s.target,'functional',s.functional,[s.functional.replace(/sis$/,'ses')],info,s.station);
  }
  D.joints={questions,specimens,componentRows,files,limitations:[
    'Synovial fluid occupies the cavity but has no distinct visible boundary in this uncolored drawing; only the cavity is tested.',
    'No isolated fat pad, periosteum, or distinct reinforcing ligament is resolved clearly enough for a new marker.',
    'The fibrous layer and inner membrane are tested separately. A whole-capsule station was not forced across the overlapping tissue boundaries.',
    'The atlas-axis level is shown; the median pivot is not separately resolved, so no pivot-subtype image question is scored from that view.'
  ]};
  Object.assign(D.exam1.topicLabels,{joint_components:'Joint structures / components',joint_names:'Joint names',joint_structural:'Structural classification / subtypes',joint_functional:'Functional classification'});
  D.questions.push(...questions);
})();
