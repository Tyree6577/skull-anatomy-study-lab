// Additional uploaded specimens, reviewed before marking. Percent coordinates
// refer to the deployed, orientation-corrected asset, never the display size.
(() => {
  const D=window.STUDY_DATA;
  const E=(x,y,rx,ry,crop)=>({type:'ellipse',x,y,rx,ry,crop});
  const B=(x,y,w,h,crop)=>({type:'box',x,y,w,h,crop});
  const A=(x,y,fromX,fromY,crop)=>({type:'pointer',x,y,fromX,fromY,crop});
  const L=(points,crop)=>({type:'boundary',points,crop});
  const P=(points,crop)=>({type:'region',points,crop});
  const images={
    clavicle:['IMG_0165.JPEG',1377,1506,'Clavicle · Uploaded specimen',[5,23,87,34]],
    'femur-anterior':['Lower Limbs · Lab screenshot 1',442,800,'Femur · Anterior',[25,1,44,98]],
    'femur-posterior':['Lower Limbs · Lab screenshot 2',402,1024,'Femur · Posterior',[27,1,62,97]],
    'coxa-lateral':['Os Coxa · Lab screenshot',514,800,'Coxal bone · Lateral',[5,14,87,80]],
    humerus:['Upper Limbs · Lab screenshot 1',457,800,'Humerus · Uploaded specimen',[27,6,38,86]],
    'ulna-proximal':['Upper Limbs · Lab screenshot 2',259,371,'Ulna · Proximal oblique',[31,3,53,86]],
    'upper-bones':['Upper Limbs · Lab screenshot 3',451,800,'Upper limb bones · Uploaded specimens',[3,12,94,74]],
    'skull-lateral':['IMG_9117.HEIC',707,573,'Skull · Mounted lateral',[1,3,94,96]],
    'skull-superior':['IMG_9118.HEIC',737,614,'Skull · Mounted superior',[4,2,94,96]],
    'skull-posterior':['IMG_9119.HEIC',630,635,'Skull · Mounted posterior',[4,7,85,84]],
    'skull-inferior':['IMG_9124.HEIC',876,1434,'Skull · Inferior specimen',[5,1,92,96]],
    'skull-internal':['IMG_9125.HEIC',1183,1577,'Skull · Internal specimen',[4,2,94,96]],
    'skull-oblique':['IMG_9127.HEIC',1075,1085,'Skull · Lateral specimen',[1,3,97,86]],
    'skull-anterior':['IMG_9128.HEIC',576,1040,'Skull · Anterior specimen',[1,14,98,83]],
    'vertebra-superior':['IMG_9118.HEIC · vertebra detail',184,174,'Vertebra · Superior detail',[0,0,100,100]],
    'cervical-superior':['IMG_9118.HEIC · cervical detail',131,123,'Cervical vertebra · Superior detail',[0,0,100,100]]
  };
  const questions=[];
  function add(id,image,answer,bone,category,hotspot,tip,alternatives=[],coverageKey){
    const [source,w,h,view,frame]=images[image];
    questions.push({id,answer,alternatives,bone,category,view,image:`assets/new-${image}.webp`,imageRatio:w/h,imageHeight:/superior$/.test(image)&&!image.startsWith('skull')?270:image==='ulna-proximal'?400:image==='upper-bones'&&hotspot.crop?360:image.startsWith('femur')&&hotspot.crop?440:620,hotspot:{...hotspot,crop:hotspot.crop||frame,context:['ap-n11','ap-n12','ap-n13','ap-n14'].includes(id)},region:id.startsWith('ap-')?'Appendicular skeleton':id.startsWith('sk-')?'Skull':'Axial skeleton',source:`Archive.zip · ${source}`,verification:'upload-photo',tip,...(coverageKey?{coverageKey}:{})});
  }
  const ft=[26,0,48,28],fb=[27,76,62,23],hip=[8,39,68,54];
  // First priority: appendicular landmarks. Whole bones get a shaft marker;
  // openings are outlined and edges are traced instead of using background dots.
  add('ap-n01','clavicle','Clavicle','Clavicle','Bone',A(52,41,52,28),'The S-shaped bone connects the sternum to the scapula.');
  add('ap-n02','clavicle','Acromial end','Clavicle','Process & landmark',E(18,33.6,6.5,5,[5,23,87,34]),'The lateral end is flattened and meets the acromion.');
  add('ap-n03','clavicle','Sternal end','Clavicle','Process & landmark',E(82,48,4.8,4.4,[5,23,87,34]),'The bulky medial end articulates with the manubrium.');
  add('ap-n04','femur-posterior','Femur','Femur','Bone',A(61,49,83,49),'Identify the entire thigh bone; the pointer touches its shaft.');
  add('ap-n05','femur-posterior','Head of femur','Femur','Process & landmark',E(40,6.5,7.5,4.5,ft),'The rounded medial head articulates with the acetabulum.');
  add('ap-n06','femur-posterior','Neck of femur','Femur','Process & landmark',B(46,8.5,9,3.5,ft),'This narrowed bridge connects the head to the shaft.');
  add('ap-n07','femur-posterior','Greater trochanter','Femur','Process & landmark',E(67,7,6,3.5,ft),'The large lateral projection lies beside the neck.');
  add('ap-n08','femur-posterior','Lesser trochanter','Femur','Process & landmark',A(51,16.3,34,22,ft),'This smaller posteromedial projection is inferior to the neck.');
  add('ap-n09','femur-posterior','Linea aspera','Femur','Process & landmark',L([[59,31],[59.7,39],[60.2,48],[60.6,56]],[34,23,45,42]),'The rough longitudinal ridge runs along the posterior shaft.');
  add('ap-n10','femur-posterior','Popliteal surface','Femur','Process & landmark',P([[57,72],[66,72],[73,84],[53,85]],[32,64,55,32]),'This triangular posterior surface is just above the distal condyles.');
  add('ap-n11','femur-posterior','Medial condyle of femur','Femur','Process & landmark',E(44.5,92.8,5.5,1.8,fb),'The condyle on the same side as the femoral head is medial.');
  add('ap-n12','femur-posterior','Lateral condyle of femur','Femur','Process & landmark',E(73,89.5,5.5,1.6,fb),'The opposite distal articular surface is the lateral condyle.');
  add('ap-n13','femur-posterior','Medial epicondyle of femur','Femur','Process & landmark',A(39,86.8,28,80,fb),'The medial epicondyle is the prominence proximal to the medial condyle.');
  add('ap-n14','femur-posterior','Lateral epicondyle of femur','Femur','Process & landmark',A(82,86.5,88,79,fb),'Find the lateral prominence just proximal to the lateral condyle.');
  add('ap-n15','femur-anterior','Patellar surface','Femur','Process & landmark',E(49,95,5.8,2.6,[25,73,44,27]),'The anterior distal groove receives the patella.');
  add('ap-n16','coxa-lateral','Coxal bone','Coxal bone','Bone',A(49,40,69,38),'Identify the entire hip bone, formed by the ilium, ischium, and pubis.',['os coxa','hip bone']);
  add('ap-n17','coxa-lateral','Ilium','Coxal bone','Bone region',E(53,34,16,9),'The broad upper portion is the ilium.');
  add('ap-n18','coxa-lateral','Iliac crest','Coxal bone','Process & landmark',L([[27,26],[38,20],[50,17.1],[61,17],[72,20],[81,26]]),'Trace the curved superior border of the ilium.');
  add('ap-n19','coxa-lateral','Anterior superior iliac spine','Coxal bone','Process & landmark',A(88,34.5,95,25),'The anterior end of the iliac crest forms this prominent spine.');
  add('ap-n20','coxa-lateral','Anterior inferior iliac spine','Coxal bone','Process & landmark',A(74,49.5,90,46),'The second anterior spine lies inferior to the anterior superior iliac spine.');
  add('ap-n21','coxa-lateral','Posterior superior iliac spine','Coxal bone','Process & landmark',A(10.5,44.2,5,32),'The posterior end of the iliac crest terminates at this spine.');
  add('ap-n22','coxa-lateral','Posterior inferior iliac spine','Coxal bone','Process & landmark',A(26,52,10,59), 'This posterior projection is just above the greater sciatic notch.');
  add('ap-n23','coxa-lateral','Greater sciatic notch','Coxal bone','Foramen & notch',L([[38,52.5],[36,57],[33,61],[29,65]],hip),'Trace the broad posterior concavity above the ischial spine.');
  add('ap-n24','coxa-lateral','Ischial spine','Coxal bone','Process & landmark',A(30.2,67.6,13,65,hip),'This pointed projection separates the greater and lesser sciatic notches.');
  add('ap-n25','coxa-lateral','Lesser sciatic notch','Coxal bone','Foramen & notch',L([[34,69.4],[33,71.5],[31.5,73.5]],hip),'The smaller concavity is immediately below the ischial spine.');
  add('ap-n26','coxa-lateral','Ischial tuberosity','Coxal bone','Process & landmark',E(38,85.2,4.5,3),'The rough inferior ischial prominence supports weight when sitting.');
  add('ap-n27','coxa-lateral','Ischium','Coxal bone','Bone region',B(32,76,13,9),'The posteroinferior portion of the hip bone is the ischium.');
  add('ap-n28','coxa-lateral','Pubis','Coxal bone','Bone region',B(65,75,5,5),'The anterior portion of the hip bone borders the front of the obturator foramen.');
  add('ap-n29','coxa-lateral','Acetabulum','Coxal bone','Fossa',E(59,60,8.5,6),'This lateral socket receives the head of the femur.');
  add('ap-n30','coxa-lateral','Obturator foramen','Coxal bone','Foramen & notch',E(55.5,79,7,5.5),'Identify the large opening enclosed by the pubis and ischium.');
  add('ap-n31','humerus','Humerus','Humerus','Bone',A(44,47,61,48),'Identify the entire upper-arm bone.');
  add('ap-n32','humerus','Head of humerus','Humerus','Process & landmark',E(53,13,3.8,3,[29,5,36,23]),'The rounded proximal articular surface faces medially.');
  add('ap-n33','ulna-proximal','Olecranon','Ulna','Process & landmark',E(54,19,6.5,9),'This large proximal projection forms the point of the elbow. The classroom probe is also on this projection.');
  add('ap-n34','ulna-proximal','Coronoid process of ulna','Ulna','Process & landmark',A(72.5,43,84,50),'The anterior projection lies inferior to the trochlear notch.');
  add('ap-n35','upper-bones','Humerus','Humerus','Bone',A(20,45,6,45),'The pointer indicates the shaft of the upper-arm bone.');
  add('ap-n36','upper-bones','Radius','Radius','Bone',A(56,48,66,46),'The radius has a small disc-shaped proximal head and broad distal end.');
  add('ap-n37','upper-bones','Ulna','Ulna','Bone',A(83,42,94,43),'The ulna has the prominent proximal elbow projection.');
  add('ap-n38','upper-bones','Head of radius','Radius','Process & landmark',E(56,26.7,2.8,1.2,[41,21,30,21]),'The disc-shaped head is at the proximal end of the radius.');
  add('ap-n39','upper-bones','Neck of radius','Radius','Process & landmark',B(54.5,29,2.5,2.3,[41,21,30,21]),'The narrowed neck lies immediately below the radial head.');
  add('ap-n40','upper-bones','Radial tuberosity','Radius','Process & landmark',A(52.8,32.8,45,35,[41,21,30,21]),'The rough prominence lies just distal to the radial neck.');
  // Second priority: skull. Natural sutures are distinct from the specimen's
  // straight removable-cap cut; drilled attachment holes are never tested.
  add('sk-n01','skull-lateral','Coronal suture','Frontal/parietal bones','Suture',L([[58,18],[60.7,25],[62.6,32],[65,43],[65.8,51],[67.8,57]],[25,3,69,94]),'The natural suture separates the frontal and parietal bones.');
  add('sk-n02','skull-lateral','Squamous suture','Temporal/parietal bones','Suture',L([[37,72],[44,67.3],[51,63],[58,61],[64,63]],[13,35,81,63]),'This curved natural suture separates the temporal squama from the parietal bone.');
  add('sk-n03','skull-oblique','Mastoid process','Temporal bone','Process & landmark',E(71.5,77.5,2.8,3.4,[38,54,51,31]),'The rounded process lies posterior-inferior to the ear-canal opening.');
  add('sk-n04','skull-oblique','Styloid process','Temporal bone','Process & landmark',A(58.4,78.8,49,83,[38,54,51,31]),'The slender pointed projection is anterior to the mastoid process.');
  add('sk-n05','skull-oblique','Temporal bone','Temporal bone','Cranial bone',E(46,65,8,3.6),'The squamous temporal surface lies below the squamous suture.',['temporal bones'],'Temporal bones');
  add('sk-n06','skull-lateral','Parietal bone','Parietal bone','Cranial bone',E(43,35,11,9),'This bone occupies the upper lateral cranial wall.',['parietal bones'],'Parietal bones');
  add('sk-n07','skull-superior','Sagittal suture','Parietal bones','Suture',L([[60,53],[60.7,61],[61.6,71],[64,82],[66,87]],[22,44,70,48]),'This midline seam separates the paired parietal bones.');
  add('sk-n08','skull-posterior','Lambdoid suture','Parietal/occipital bones','Suture',L([[26,56],[37,61],[49,66],[59,72],[70,80]],[4,7,85,84]),'Trace the posterior suture between the parietals and occipital bone.');
  add('sk-n09','skull-posterior','Occipital bone','Occipital bone','Cranial bone',E(43,81,10,6,[4,7,85,84]),'The occipital bone lies inferior to the lambdoid suture.');
  add('sk-n10','skull-anterior','Superciliary arch','Frontal bone','Process & landmark',E(25,27.6,8.5,2.2,[1,17,98,39]),'This brow ridge lies above the superior orbital rim.');
  add('sk-n11','skull-anterior','Middle nasal concha','Ethmoid bone','Process & landmark',E(42.2,45.2,2.2,2.5,[21,31,59,34]),'The upper visible curled shelf belongs to the ethmoid; the separate inferior concha is below it.');
  add('sk-n12','skull-anterior','Inferior nasal concha','Inferior nasal concha','Facial bone',E(42.7,52.5,2.1,1.6,[21,31,59,34]),'This lower curled bone projects from the lateral nasal wall.',['inferior nasal concha bones','inferior nasal conchae'],'Inferior nasal concha bones');
  add('sk-n13','skull-anterior','Infraorbital foramen','Maxilla','Foramen & notch',E(77.3,49.9,1.5,.8,[39,32,59,34]),'The small opening is on the maxilla below the orbit.');
  add('sk-n14','skull-anterior','Mental foramen','Mandible','Foramen & notch',E(25.8,83.5,1.1,1.1,[13,68,76,29]),'The small opening is on the anterior-lateral mandibular body.');
  add('sk-n15','skull-inferior','Carotid canal','Temporal bone','Foramen & notch',E(30.1,57.5,1.5,1.1,[13,43,47,31]),'The round inferior opening is anterior to the irregular jugular foramen.');
  add('sk-n16','skull-inferior','Foramen lacerum','Sphenoid/temporal/occipital bones','Foramen & notch',E(42.5,51.5,1.6,1.1,[21,40,54,29]),'This irregular gap lies medial to the foramen ovale at the petrous apex.');
  add('sk-n17','skull-internal','Foramen spinosum','Sphenoid bone','Foramen & notch',E(36.2,40.8,.7,.65,[24,28,34,23]),'The small opening lies posterolateral to the larger foramen ovale.');
  add('sk-n18','skull-internal','Foramen ovale','Sphenoid bone','Foramen & notch',E(38,38.6,1.7,1.2,[24,28,34,23]),'The larger oval opening is in the greater wing of the sphenoid.');
  add('sk-n19','skull-internal','Greater wing of sphenoid','Sphenoid bone','Process & landmark',B(25,33,9,5,[9,19,66,36]),'This broad surface forms the lateral middle cranial fossa.');
  add('sk-n20','skull-internal','Lesser wing of sphenoid','Sphenoid bone','Process & landmark',L([[30,26.6],[34,27.8],[38,29.6],[41,32],[43,34]],[15,14,69,35]),'This sharp ridge divides the anterior and middle cranial fossae.');
  add('sk-n21','skull-internal','Petrous portion','Temporal bone','Process & landmark',L([[25,48],[29,46.8],[33,44.8],[37,43],[41,42],[44,40.5]],[9,29,73,37]),'The dense petrous ridge separates the middle and posterior cranial fossae.',['petrous part']);
  add('sk-n22','skull-inferior','Foramen magnum','Occipital bone','Foramen & notch',E(49.5,68.5,11.4,8),'This is the large central opening through which the spinal cord passes.');
  add('sk-n23','skull-inferior','Occipital condyle','Occipital bone','Process & landmark',E(35.4,65.9,3.8,5.1,[13,49,71,36]),'The smooth oval condyle borders the foramen magnum laterally.',['occipital condyles']);
  // Third priority: axial details visible in the background of the same class
  // photo. Small native crops are deliberately displayed at a modest size.
  add('ax-n01','vertebra-superior','Body of vertebra','Vertebra','Process & landmark',E(29,31,13,16),'The large anterior weight-bearing portion is the vertebral body.',['vertebral body']);
  add('ax-n02','vertebra-superior','Vertebral foramen','Vertebra','Foramen & notch',E(46,55,7,9),'The opening lies between the body and vertebral arch.');
  add('ax-n03','vertebra-superior','Vertebral arch','Vertebra','Process & landmark',L([[56,42],[61,49],[61,57],[57,65],[49,70],[40,67]]),'The bony arch forms the posterior and lateral walls of the vertebral foramen.');
  add('ax-n04','cervical-superior','Transverse foramen','Cervical vertebra','Foramen & notch',E(38,18,5,4),'The small lateral opening is characteristic of cervical vertebrae.');
  add('ax-n05','cervical-superior','Cervical vertebra','Cervical vertebra','Vertebra',A(20,52,5,38),'The paired transverse foramina identify this as a cervical vertebra; it has a body, so it is not an atlas.',['cervical vertebrae']);
  // This old edge-on opening does not meet the current visibility standard.
  // Keep historical progress untouched, but do not offer it as a playable item.
  D.questions=D.questions.filter(q=>q.id!=='ax-c13').concat(questions);
  D.sources.additional='Archive.zip · 14 additional uploaded class images (reused for multiple locations)';
  D.coverageNotes={'Sacral canal':'Previous edge-on marker withdrawn: the canal opening cannot be isolated confidently in the available views.'};
})();
