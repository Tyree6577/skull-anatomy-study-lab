// Practical II question bank: original professor-keyed items plus clearly visible
// locations transcribed from the professor-provided class-photo PowerPoint.
(() => {
  const keyed = [
    {id:"sk-09",answer:"Supraorbital notch",alternatives:["supraorbital foramen"],region:"Skull",category:"Foramen & notch",view:"Skull · Anterior",bone:"Frontal bone",image:"assets/skull-anterior-source.jpg",marker:{x:30,y:30},source:"Virtual Practical II, slide 8, question 9; key slide 27",verification:"keyed",coverageKey:"Supraorbital foramen (notch)",tip:"Find the small opening or notch on the superior orbital margin."},
    {id:"sk-10",answer:"Inferior orbital fissure",alternatives:[],region:"Skull",category:"Fissure",view:"Skull · Anterior",bone:"Sphenoid bone",image:"assets/skull-anterior-source.jpg",marker:{x:30,y:45},source:"Virtual Practical II, slide 8, question 10; key slide 27",verification:"keyed",tip:"This is the long cleft at the posterior-inferior part of the orbit."},
    {id:"sk-11",answer:"Mental protuberance",alternatives:[],region:"Skull",category:"Process & landmark",view:"Skull · Anterior",bone:"Mandible",image:"assets/skull-anterior-source.jpg",marker:{x:50,y:91},source:"Virtual Practical II, slide 8, question 11; key slide 27",verification:"keyed",tip:"The mental protuberance is the midline prominence of the chin."},
    {id:"sk-12",answer:"Crista galli",alternatives:[],region:"Skull",category:"Process & landmark",view:"Skull · Internal cranial cavity",bone:"Ethmoid bone",image:"assets/skull-internal-source.jpg",marker:{x:50,y:23},source:"Virtual Practical II, slide 9, question 12; key slide 27",verification:"keyed",tip:"Look for the narrow midline ridge in the anterior cranial fossa."},
    {id:"sk-13",answer:"Sella turcica",alternatives:[],region:"Skull",category:"Fossa",view:"Skull · Internal cranial cavity",bone:"Sphenoid bone",image:"assets/skull-internal-source.jpg",marker:{x:50,y:43},source:"Virtual Practical II, slide 9, question 13; key slide 27",verification:"keyed",tip:"The sella turcica is the saddle-like depression centered in the sphenoid."},
    {id:"sk-14",answer:"Jugular foramen",alternatives:[],region:"Skull",category:"Foramen & notch",view:"Skull · Internal cranial cavity",bone:"Temporal/occipital bones",image:"assets/skull-internal-source.jpg",marker:{x:63,y:54},source:"Virtual Practical II, slide 9, question 14; key slide 27",verification:"keyed",tip:"This large irregular opening sits lateral to the foramen magnum."},
    {id:"sk-15",answer:"Palatine bone",alternatives:[],region:"Skull",category:"Facial bone",view:"Skull · Inferior",bone:"Palatine bone",image:"assets/skull-inferior-source.jpg",marker:{x:50,y:27},source:"Virtual Practical II, slide 10, question 15; key slide 27",verification:"keyed",tip:"On the inferior skull, it forms the posterior portion of the hard palate."},
    {id:"sk-16",answer:"Foramen ovale",alternatives:[],region:"Skull",category:"Foramen & notch",view:"Skull · Inferior",bone:"Sphenoid bone",image:"assets/skull-inferior-source.jpg",marker:{x:34,y:43},source:"Virtual Practical II, slide 10, question 16; key slide 27",verification:"keyed",tip:"The foramen ovale is the larger oval opening in the greater wing of the sphenoid."},
    {id:"sk-17",answer:"Styloid process",alternatives:[],region:"Skull",category:"Process & landmark",view:"Skull · Inferior",bone:"Temporal bone",image:"assets/skull-inferior-source.jpg",marker:{x:28,y:58},source:"Virtual Practical II, slide 10, question 17; key slide 27",verification:"keyed",tip:"The styloid process is the thin, pointed projection beside the temporal bone."},
    {id:"sk-18",answer:"Condylar process",alternatives:["mandibular condyle"],region:"Skull",category:"Process & landmark",view:"Skull · Mandible lateral",bone:"Mandible",image:"assets/mandible-lateral-source.jpg",marker:{x:46,y:24},source:"Virtual Practical II, slide 11, question 18; key slide 27",verification:"keyed",tip:"At the posterior end of the mandibular ramus, this is the rounded articular projection."},
    {id:"sk-19",answer:"Sagittal suture",alternatives:[],region:"Skull",category:"Suture",view:"Skull · Superior",bone:"Parietal bones",image:"assets/skull-superior-source.jpg",marker:{x:54,y:23},source:"Virtual Practical II, slide 11, question 19; key slide 27",verification:"keyed",tip:"This midline suture runs anteroposteriorly between the two parietal bones."},
    {id:"sk-20",answer:"Lambdoid suture",alternatives:[],region:"Skull",category:"Suture",view:"Skull · Superior",bone:"Parietal/occipital bones",image:"assets/skull-superior-source.jpg",marker:{x:55,y:69},source:"Virtual Practical II, slide 11, question 20; key slide 27",verification:"keyed",tip:"This suture crosses the posterior skull between the parietals and occipital bone."}
  ];

  const classRows = [
    // Skull: the same class photographs are intentionally reused for different visible locations.
    ["sk-c01","Frontal bone",[],"Skull","Cranial bone","Skull · Anterior","Frontal bone","05",50,23,3,"The frontal bone forms the forehead and superior orbital region."],
    ["sk-c02","Parietal bone",["parietal bones"],"Skull","Cranial bone","Skull · Lateral","Parietal bone","06",53,25,4,"The parietal bone forms much of the superior-lateral cranial wall.","Parietal bones"],
    ["sk-c03","Temporal bone",["temporal bones"],"Skull","Cranial bone","Skull · Lateral","Temporal bone","06",38,55,4,"Find the cranial bone surrounding the external acoustic meatus.","Temporal bones"],
    ["sk-c04","Occipital bone",[],"Skull","Cranial bone","Skull · Posterior","Occipital bone","03",50,57,2,"The occipital bone forms the posterior-inferior cranium."],
    ["sk-c05","Maxilla",[],"Skull","Facial bone","Skull · Anterior","Maxilla","05",50,58,3,"The maxilla forms the upper jaw and part of the orbit and nasal opening."],
    ["sk-c06","Zygomatic bone",[],"Skull","Facial bone","Skull · Anterior","Zygomatic bone","05",18,52,3,"The zygomatic bone forms the cheek and lateral orbital rim."],
    ["sk-c07","Nasal bones",["nasal bone"],"Skull","Facial bone","Skull · Anterior","Nasal bones","05",50,34,3,"These paired bones form the bridge of the nose."],
    ["sk-c08","Mandible",[],"Skull","Facial bone","Skull · Anterior","Mandible","05",50,84,3,"The mandible is the lower jaw."],
    ["sk-c10","Infraorbital foramen",[],"Skull","Foramen & notch","Skull · Anterior close-up","Maxilla","08",31,49,5,"This opening is on the maxilla immediately below the orbit."],
    ["sk-c11","Supraorbital margin",[],"Skull","Process & landmark","Skull · Anterior close-up","Frontal bone","08",30,29,5,"Trace the superior bony rim of the orbit."],
    ["sk-c12","Vomer",[],"Skull","Facial bone","Skull · Anterior close-up","Vomer","08",50,50,5,"The vomer forms the inferior part of the bony nasal septum."],
    ["sk-c13","Inferior nasal concha",["inferior nasal concha bones","inferior nasal conchae"],"Skull","Facial bone","Skull · Anterior close-up","Inferior nasal concha","08",44,50,5,"Find the curled bone on the lateral wall of the nasal cavity.","Inferior nasal concha bones"],
    ["sk-c14","External acoustic meatus",["external auditory meatus"],"Skull","Foramen & notch","Skull · Lateral","Temporal bone","06",44,60,4,"This is the ear-canal opening in the temporal bone.","External acoustic (auditory) meatus"],
    ["sk-c15","Mastoid process",[],"Skull","Process & landmark","Skull · Lateral","Temporal bone","06",37,70,4,"The mastoid process is the rounded projection posterior-inferior to the ear canal."],
    ["sk-c16","Squamous suture",[],"Skull","Suture","Skull · Lateral","Temporal/parietal bones","06",38,46,4,"This arched suture separates the temporal and parietal bones."],
    ["sk-c17","Coronal suture",[],"Skull","Suture","Skull · Lateral","Frontal/parietal bones","06",70,32,4,"This suture separates the frontal bone from the parietal bone."],
    ["sk-c18","Optic foramen",["optic canal"],"Skull","Foramen & notch","Skull · Orbit close-up","Sphenoid bone","07",55,47,5,"Look deep in the orbit for the small round optic opening."],
    ["sk-c19","Superior orbital fissure",[],"Skull","Fissure","Skull · Orbit close-up","Sphenoid bone","07",58,50,5,"This cleft lies posteriorly in the orbit above the inferior orbital fissure."],
    ["sk-c20","Foramen magnum",[],"Skull","Foramen & notch","Skull · Inferior","Occipital bone","10",50,67,6,"The foramen magnum is the large central opening in the occipital bone."],
    ["sk-c21","Occipital condyle",["occipital condyles"],"Skull","Process & landmark","Skull · Inferior","Occipital bone","10",42,58,6,"The paired smooth condyles flank the foramen magnum."],
    ["sk-c22","Petrous portion",["petrous part"],"Skull","Process & landmark","Skull · Internal cranial cavity","Temporal bone","09",35,48,6,"Identify the dense ridge of temporal bone separating the middle and posterior cranial fossae."],
    ["sk-c23","Cribriform plate",[],"Skull","Process & landmark","Skull · Internal cranial cavity","Ethmoid bone","09",44,20,6,"The perforated cribriform plate lies beside the crista galli."],
    ["sk-c24","External occipital protuberance",[],"Skull","Process & landmark","Skull · Posterior","Occipital bone","03",50,60,2,"This midline bump projects from the posterior occipital bone."],
    ["sk-c25","Anterior fontanel",["anterior fontanelle"],"Skull","Fontanel","Fetal skull · Superior","Fetal skull","12",50,41,7,"The anterior fontanel is the large diamond-shaped soft spot at the coronal-sagittal junction."],

    // Axial skeleton.
    ["ax-c01","Thoracic vertebra",["thoracic vertebrae"],"Axial skeleton","Vertebra","Thoracic vertebra · Posterior","Thoracic vertebra","01",50,47,1,"Identify the vertebra by its long, inferiorly directed spinous process."],
    ["ax-c02","Spinous process",[],"Axial skeleton","Process & landmark","Thoracic vertebra · Posterior","Thoracic vertebra","01",50,64,1,"This is the single posterior midline projection."],
    ["ax-c03","Transverse process",[],"Axial skeleton","Process & landmark","Thoracic vertebra · Posterior","Thoracic vertebra","01",18,43,1,"The transverse process projects laterally from the vertebral arch."],
    ["ax-c04","Lamina",[],"Axial skeleton","Process & landmark","Thoracic vertebra · Posterior","Thoracic vertebra","01",42,50,1,"The lamina is the plate between the transverse and spinous processes."],
    ["ax-c06","Lumbar vertebra",["lumbar vertebrae"],"Axial skeleton","Vertebra","Lumbar vertebra · Posterior","Lumbar vertebra","02",50,47,1,"Identify the vertebra by its large size and broad, blunt spinous process."],
    ["ax-c07","Spinous process",[],"Axial skeleton","Process & landmark","Lumbar vertebra · Posterior","Lumbar vertebra","02",50,61,1,"This is the broad posterior midline projection."],
    ["ax-c08","Transverse process",[],"Axial skeleton","Process & landmark","Lumbar vertebra · Posterior","Lumbar vertebra","02",12,39,1,"The transverse process projects laterally from the vertebral arch."],
    ["ax-c09","Lamina",[],"Axial skeleton","Process & landmark","Lumbar vertebra · Posterior","Lumbar vertebra","02",40,49,1,"The lamina forms the posterior part of the vertebral arch."],
    ["ax-c11","Sacrum",[],"Axial skeleton","Bone","Sacrum · Posterior","Sacrum","14",48,52,9,"The sacrum is the triangular fused bone at the base of the vertebral column."],
    ["ax-c12","Median sacral crest",[],"Axial skeleton","Process & landmark","Sacrum · Posterior","Sacrum","14",46,60,9,"This rough midline ridge represents fused spinous processes."],
    ["ax-c13","Sacral canal",[],"Axial skeleton","Foramen & notch","Sacrum · Posterior","Sacrum","14",50,31,9,"The sacral canal is the superior continuation of the vertebral canal."],
    ["ax-c14","Superior articular process",["superior articular processes"],"Axial skeleton","Process & landmark","Sacrum · Posterior","Sacrum","14",65,30,9,"This paired projection articulates with the fifth lumbar vertebra."],
    ["ax-c15","Sternum",[],"Axial skeleton","Bone","Thoracic cage · Anterior","Sternum","13",50,37,8,"Identify the flat midline bone of the anterior thoracic cage."],
    ["ax-c16","Manubrium",[],"Axial skeleton","Bone region","Thoracic cage · Anterior","Sternum","13",50,12,8,"The manubrium is the broad superior part of the sternum."],
    ["ax-c17","Body of sternum",["sternal body","body"],"Axial skeleton","Bone region","Thoracic cage · Anterior","Sternum","13",50,36,8,"This is the long central part of the sternum."],
    ["ax-c18","Xiphoid process",[],"Axial skeleton","Process & landmark","Thoracic cage · Anterior","Sternum","13",50,61,8,"The xiphoid process is the small inferior end of the sternum."],
    ["ax-c19","Suprasternal notch",["jugular notch"],"Axial skeleton","Foramen & notch","Thoracic cage · Anterior","Sternum","13",50,8,8,"This midline notch is at the superior border of the manubrium."],
    ["ax-c20","Sternal angle",["angle of Louis"],"Axial skeleton","Joint & junction","Thoracic cage · Anterior","Sternum","13",50,22,8,"The sternal angle marks the manubriosternal junction."],
    ["ax-c21","Xiphisternal joint",[],"Axial skeleton","Joint & junction","Thoracic cage · Anterior","Sternum","13",50,58,8,"This joint is where the sternal body meets the xiphoid process."],
    ["ax-c22","True rib",["true ribs","vertebrosternal rib"],"Axial skeleton","Bone","Thoracic cage · Anterior","Rib","13",25,35,8,"A true rib attaches directly to the sternum through its own costal cartilage.","True ribs"],
    ["ax-c23","Vertebrochondral rib",["false rib","vertebrochondral ribs"],"Axial skeleton","Bone","Thoracic cage · Anterior","Rib","13",25,64,8,"These false ribs join the cartilage of the rib above rather than the sternum directly.","Vertebrochondral ribs"],
    ["ax-c24","Floating rib",["floating ribs"],"Axial skeleton","Bone","Thoracic cage · Anterior","Rib","13",72,70,8,"Floating ribs have no anterior attachment to the sternum.","Floating ribs"],

    // Appendicular skeleton.
    ["ap-c01","Scapula",[],"Appendicular skeleton","Bone","Scapula · Posterior","Scapula","17",55,57,10,"Identify the flat triangular shoulder-girdle bone."],
    ["ap-c02","Acromion",[],"Appendicular skeleton","Process & landmark","Scapula · Posterior","Scapula","17",15,35,10,"The acromion is the expanded lateral continuation of the scapular spine."],
    ["ap-c03","Coracoid process",[],"Appendicular skeleton","Process & landmark","Scapula · Anterior","Scapula","16",54,30,10,"The coracoid is the hook-like anterior projection superior to the glenoid fossa."],
    ["ap-c04","Subscapular fossa",[],"Appendicular skeleton","Fossa","Scapula · Anterior","Scapula","16",38,55,10,"This broad shallow depression occupies the anterior surface of the scapula."],
    ["ap-c05","Glenoid fossa",["glenoid cavity"],"Appendicular skeleton","Fossa","Scapula · Anterior","Scapula","16",61,48,10,"The glenoid fossa is the shallow lateral socket for the humeral head."],
    ["ap-c06","Medial border",["vertebral border"],"Appendicular skeleton","Process & landmark","Scapula · Anterior","Scapula","16",22,55,10,"This long border lies closest to the vertebral column."],
    ["ap-c07","Spine of scapula",["scapular spine","spine"],"Appendicular skeleton","Process & landmark","Scapula · Posterior","Scapula","17",46,42,10,"The spine is the prominent posterior ridge dividing two fossae."],
    ["ap-c08","Supraspinous fossa",[],"Appendicular skeleton","Fossa","Scapula · Posterior","Scapula","17",55,35,10,"This depression lies superior to the scapular spine."],
    ["ap-c09","Infraspinous fossa",[],"Appendicular skeleton","Fossa","Scapula · Posterior","Scapula","17",55,58,10,"This broad depression lies inferior to the scapular spine."],
    ["ap-c10","Femur",[],"Appendicular skeleton","Bone","Femur · Anterior","Femur","18",42,53,11,"Identify the long bone of the thigh."],
    ["ap-c11","Head of femur",["femoral head","head"],"Appendicular skeleton","Process & landmark","Femur · Anterior","Femur","18",47,10,11,"The femoral head is the rounded proximal articular surface."],
    ["ap-c12","Neck of femur",["femoral neck","neck"],"Appendicular skeleton","Process & landmark","Femur · Anterior","Femur","18",42,15,11,"The neck is the narrowed region connecting the head to the shaft."],
    ["ap-c13","Greater trochanter",[],"Appendicular skeleton","Process & landmark","Femur · Anterior","Femur","18",35,16,11,"The greater trochanter is the large lateral proximal projection."],
    ["ap-c14","Lesser trochanter",[],"Appendicular skeleton","Process & landmark","Femur · Anterior","Femur","18",42,23,11,"The lesser trochanter is the smaller posteromedial projection below the neck."],
    ["ap-c15","Patellar surface",[],"Appendicular skeleton","Process & landmark","Femur · Anterior","Femur","18",42,84,11,"This smooth distal anterior surface articulates with the patella."],
    ["ap-c16","Linea aspera",[],"Appendicular skeleton","Process & landmark","Femur · Posterior","Femur","19",50,56,11,"The linea aspera is the prominent longitudinal ridge on the posterior shaft."],
    ["ap-c17","Popliteal surface",[],"Appendicular skeleton","Process & landmark","Femur · Posterior","Femur","19",50,78,11,"This smooth triangular area is on the distal posterior femur."],
    ["ap-c18","Patella",[],"Appendicular skeleton","Bone","Patella · Anterior","Patella","15",50,44,9,"Identify the kneecap."],
    ["ap-c19","Tibia",[],"Appendicular skeleton","Bone","Tibia","Tibia","20",45,50,12,"Identify the larger, medial bone of the leg."],
    ["ap-c22","Medial malleolus",[],"Appendicular skeleton","Process & landmark","Tibia","Tibia","20",36,84,12,"This distal projection forms the medial ankle."],
    ["ap-c23","Fibula",[],"Appendicular skeleton","Bone","Fibula","Fibula","21",48,50,12,"Identify the slender lateral bone of the leg."],
    ["ap-c24","Head of fibula",["fibular head","head"],"Appendicular skeleton","Process & landmark","Fibula","Fibula","21",48,10,12,"The head is the enlarged proximal end of the fibula."],
    ["ap-c25","Lateral malleolus",[],"Appendicular skeleton","Process & landmark","Fibula","Fibula","21",52,84,12,"This distal projection forms the lateral ankle."],
    ["ap-c26","Coxal bone",["os coxa","hip bone"],"Appendicular skeleton","Bone","Coxal bone · Lateral","Coxal bone","24",52,49,14,"Identify the fused hip bone composed of ilium, ischium, and pubis."],
    ["ap-c27","Ilium",[],"Appendicular skeleton","Bone region","Coxal bone · Medial","Coxal bone","23",50,30,13,"The ilium is the broad superior portion of the coxal bone."],
    ["ap-c28","Ischium",[],"Appendicular skeleton","Bone region","Coxal bone · Lateral","Coxal bone","24",38,75,14,"The ischium forms the posteroinferior part of the coxal bone."],
    ["ap-c29","Pubis",[],"Appendicular skeleton","Bone region","Coxal bone · Lateral","Coxal bone","24",68,72,14,"The pubis forms the anterior part of the coxal bone."],
    ["ap-c30","Iliac crest",[],"Appendicular skeleton","Process & landmark","Coxal bone · Medial","Coxal bone","23",45,9,13,"The iliac crest is the curved superior border of the ilium."],
    ["ap-c31","Iliac fossa",[],"Appendicular skeleton","Fossa","Coxal bone · Medial","Coxal bone","23",50,28,13,"This large smooth depression is on the medial surface of the ilium."],
    ["ap-c32","Auricular surface of coxal bone",["auricular surface"],"Appendicular skeleton","Joint & junction","Coxal bone · Medial","Coxal bone","22",20,34,13,"This ear-shaped surface articulates with the sacrum."],
    ["ap-c33","Greater sciatic notch",[],"Appendicular skeleton","Foramen & notch","Coxal bone · Medial","Coxal bone","23",78,47,13,"This large posterior indentation lies superior to the ischial spine."],
    ["ap-c34","Ischial spine",[],"Appendicular skeleton","Process & landmark","Coxal bone · Medial","Coxal bone","23",76,56,13,"This pointed projection separates the greater and lesser sciatic notches."],
    ["ap-c35","Lesser sciatic notch",[],"Appendicular skeleton","Foramen & notch","Coxal bone · Medial","Coxal bone","23",74,62,13,"This smaller indentation lies inferior to the ischial spine."],
    ["ap-c36","Ischial tuberosity",[],"Appendicular skeleton","Process & landmark","Coxal bone · Medial","Coxal bone","23",55,86,13,"This rough inferior projection bears weight when sitting."],
    ["ap-c37","Acetabulum",[],"Appendicular skeleton","Fossa","Coxal bone · Lateral","Coxal bone","24",54,54,14,"The acetabulum is the deep lateral socket for the head of the femur."],
    ["ap-c38","Obturator foramen",[],"Appendicular skeleton","Foramen & notch","Coxal bone · Lateral","Coxal bone","24",55,74,14,"This is the large opening formed by the pubis and ischium."],
    ["ap-c39","Radius",[],"Appendicular skeleton","Bone","Radius","Radius","25",53,68,15,"Identify the lateral forearm bone in anatomical position."],
    ["ap-c40","Head of radius",["radial head","head"],"Appendicular skeleton","Process & landmark","Radius","Radius","25",11,64,15,"The radial head is the disc-shaped proximal end."],
    ["ap-c41","Neck of radius",["radial neck","neck"],"Appendicular skeleton","Process & landmark","Radius","Radius","25",15,65,15,"The neck is the narrowed region immediately distal to the radial head."],
    ["ap-c42","Radial tuberosity",[],"Appendicular skeleton","Process & landmark","Radius","Radius","25",20,66,15,"This rough proximal prominence receives the biceps brachii tendon."],
    ["ap-c43","Styloid process of radius",["radial styloid process","styloid process"],"Appendicular skeleton","Process & landmark","Radius","Radius","25",96,72,15,"This pointed projection is at the distal lateral radius."],
    ["ap-c44","Ulnar notch",[],"Appendicular skeleton","Foramen & notch","Radius","Radius","25",91,68,15,"This distal medial indentation articulates with the ulna."],
    ["ap-c45","Ulna",[],"Appendicular skeleton","Bone","Ulna","Ulna","26",52,60,16,"Identify the medial forearm bone in anatomical position."],
    ["ap-c46","Olecranon",[],"Appendicular skeleton","Process & landmark","Ulna","Ulna","26",5,55,16,"The olecranon is the large proximal posterior process forming the point of the elbow."],
    ["ap-c47","Trochlear notch",[],"Appendicular skeleton","Foramen & notch","Ulna","Ulna","26",10,61,16,"This C-shaped proximal notch articulates with the humeral trochlea."],
    ["ap-c48","Coronoid process of ulna",["ulnar coronoid process","coronoid process"],"Appendicular skeleton","Process & landmark","Ulna","Ulna","26",13,65,16,"This anterior proximal projection forms the lower lip of the trochlear notch."],
    ["ap-c49","Styloid process of ulna",["ulnar styloid process","styloid process"],"Appendicular skeleton","Process & landmark","Ulna","Ulna","26",95,58,16,"This small pointed projection is at the distal ulna."],
    ["ap-c50","Humerus",[],"Appendicular skeleton","Bone","Humerus · Anterior","Humerus","28",50,50,17,"Identify the long bone of the arm."],
    ["ap-c51","Head of humerus",["humeral head","head"],"Appendicular skeleton","Process & landmark","Humerus · Anterior","Humerus","28",49,9,17,"The rounded proximal articular surface faces medially."],
    ["ap-c52","Anatomical neck",[],"Appendicular skeleton","Process & landmark","Humerus · Anterior","Humerus","28",49,16,17,"This slight groove borders the articular head."],
    ["ap-c53","Greater tubercle",[],"Appendicular skeleton","Process & landmark","Humerus · Anterior","Humerus","28",55,11,17,"The greater tubercle is the large lateral proximal prominence."],
    ["ap-c54","Capitulum",[],"Appendicular skeleton","Joint & junction","Humerus · Anterior","Humerus","28",56,92,17,"The capitulum is the rounded lateral distal articular surface for the radius."],
    ["ap-c55","Trochlea",[],"Appendicular skeleton","Joint & junction","Humerus · Anterior","Humerus","28",48,92,17,"The spool-shaped trochlea is the medial distal articular surface for the ulna."],
    ["ap-c56","Lateral epicondyle of humerus",["lateral epicondyle"],"Appendicular skeleton","Process & landmark","Humerus · Anterior","Humerus","28",60,88,17,"This nonarticular projection is lateral to the capitulum."],
    ["ap-c57","Medial epicondyle of humerus",["medial epicondyle"],"Appendicular skeleton","Process & landmark","Humerus · Anterior","Humerus","28",40,88,17,"This prominent nonarticular projection is medial to the trochlea."],
    ["ap-c58","Radial fossa",[],"Appendicular skeleton","Fossa","Humerus · Anterior","Humerus","28",55,86,17,"This shallow anterior depression lies superior to the capitulum."],
    ["ap-c59","Coronoid fossa",[],"Appendicular skeleton","Fossa","Humerus · Anterior","Humerus","28",48,85,17,"This anterior depression lies superior to the trochlea."],
    ["ap-c60","Olecranon fossa",[],"Appendicular skeleton","Fossa","Humerus · Posterior","Humerus","27",49,87,17,"This large posterior distal depression receives the ulna's olecranon."],
    ["ap-c61","Carpals",["carpal bones"],"Appendicular skeleton","Bone group","Hand · Dorsal","Hand","29",55,73,18,"The carpals are the compact cluster of wrist bones."],
    ["ap-c62","Metacarpals",["metacarpal bones"],"Appendicular skeleton","Bone group","Hand · Dorsal","Hand","29",53,52,18,"The metacarpals form the palm between carpals and phalanges."],
    ["ap-c63","Phalanges of hand",["phalanges","finger phalanges"],"Appendicular skeleton","Bone group","Hand · Dorsal","Hand","29",53,25,18,"These are the bones of the digits distal to the metacarpals."],
    ["ap-c64","Tarsals",["tarsal bones"],"Appendicular skeleton","Bone group","Foot · Dorsal","Foot","30",48,62,18,"The tarsals form the proximal foot and ankle region."],
    ["ap-c65","Calcaneus",[],"Appendicular skeleton","Bone","Foot · Dorsal","Foot","30",56,77,18,"The calcaneus is the large heel bone."],
    ["ap-c66","Talus",[],"Appendicular skeleton","Bone","Foot · Dorsal","Foot","30",49,63,18,"The talus sits superior to the calcaneus and articulates with the leg bones."],
    ["ap-c67","Metatarsals",["metatarsal bones"],"Appendicular skeleton","Bone group","Foot · Dorsal","Foot","30",47,40,18,"The metatarsals form the long central portion of the foot."],
    ["ap-c68","Phalanges of foot",["phalanges","toe phalanges"],"Appendicular skeleton","Bone group","Foot · Dorsal","Foot","30",45,22,18,"These are the toe bones distal to the metatarsals."]
  ];

  const classQuestions = classRows.map(([id,answer,alternatives,region,category,view,bone,image,x,y,slide,tip,coverageKey]) => ({
    id,answer,alternatives,region,category,view,bone,image:`assets/class-${image}.webp`,marker:{x,y},
    source:`Bone images for practical.pptx, slide ${slide} (class photo)`,verification:"class-photo",coverageKey,tip
  }));

  const requirements = {
    "Skull": [
      "Frontal bone","Frontal sinus","Supraorbital foramen (notch)","Superciliary arch","Coronal suture","Supraorbital margin","Parietal bones","Sagittal suture","Temporal bones","Squamous suture","Carotid canal","External acoustic (auditory) meatus","Internal acoustic (auditory) meatus","Mandibular fossa","Mastoid process","Styloid process","Jugular foramen","Petrous portion","Occipital bone","External occipital protuberance","Foramen magnum","Lambdoid suture","Occipital condyle","Sphenoid bone","Foramen ovale","Foramen rotundum","Foramen spinosum","Foramen lacerum","Greater wing of sphenoid","Lesser wing of sphenoid","Inferior orbital fissure","Superior orbital fissure","Optic foramen","Sella turcica","Sphenoidal sinus","Ethmoid bone","Cribriform plate","Crista galli","Middle nasal concha","Ethmoid sinus","Mandible","Condylar process","Coronoid process","Mental foramen","Mental protuberance","Maxilla","Infraorbital foramen","Maxillary sinus","Palatine bone","Zygomatic bone","Lacrimal bones","Nasal bones","Vomer","Inferior nasal concha bones","Hyoid bone","Sphenoidal fontanel","Mastoid fontanel","Anterior fontanel","Posterior fontanel"
    ],
    "Axial skeleton": [
      "Body of vertebra","Vertebral arch","Lamina","Pedicle","Spinous process","Transverse process","Vertebral foramen","Intervertebral disc","Intervertebral foramen","Cervical vertebra","Transverse foramen","Atlas","Articular facet for dens","Axis","Dens","Thoracic vertebra","Lumbar vertebra","Sacrum","Anterior sacral foramina","Superior articular process","Sacral canal","Median sacral crest","Ala","Auricular surface of sacrum","Coccyx","Sternum","Manubrium","Body of sternum","Xiphoid process","Suprasternal notch","Sternal angle","Xiphisternal joint","True ribs","Vertebrochondral ribs","Floating ribs","Head of rib","Neck of rib","Tubercle of rib","Angle of rib","Costal groove"
    ],
    "Appendicular skeleton": [
      "Clavicle","Acromial end","Sternal end","Scapula","Acromion","Coracoid process","Subscapular fossa","Supraspinous fossa","Infraspinous fossa","Glenoid fossa","Spine of scapula","Medial border","Humerus","Head of humerus","Anatomical neck","Greater tubercle","Lesser tubercle","Deltoid tuberosity","Capitulum","Trochlea","Lateral epicondyle of humerus","Medial epicondyle of humerus","Radial fossa","Coronoid fossa","Olecranon fossa","Radius","Head of radius","Neck of radius","Radial tuberosity","Styloid process of radius","Ulnar notch","Ulna","Olecranon","Trochlear notch","Radial notch","Coronoid process of ulna","Ulnar tuberosity","Styloid process of ulna","Carpals","Metacarpals","Phalanges of hand","Coxal bone","Ilium","Iliac crest","Iliac fossa","Auricular surface of coxal bone","Anterior superior iliac spine","Anterior inferior iliac spine","Posterior superior iliac spine","Posterior inferior iliac spine","Greater sciatic notch","Ischium","Ischial spine","Lesser sciatic notch","Ischial tuberosity","Pubis","Pubic tubercle","Acetabulum","Obturator foramen","Femur","Head of femur","Neck of femur","Greater trochanter","Lesser trochanter","Linea aspera","Medial condyle of femur","Lateral condyle of femur","Medial epicondyle of femur","Lateral epicondyle of femur","Popliteal surface","Patellar surface","Patella","Tibia","Medial condyle of tibia","Lateral condyle of tibia","Tibial tuberosity","Anterior border","Medial malleolus","Fibula","Head of fibula","Lateral malleolus","Tarsals","Calcaneus","Talus","Metatarsals","Phalanges of foot"
    ]
  };

  window.STUDY_DATA = {
    module:"skeletal-system",
    sources:{
      termSheet:"Practical 2_238_Term Sheet.pdf, required skeletal-system terms",
      practical:"Virtual+Practical+2_nosin.pptx, slides 8-11; answer key slide 27",
      photos:"Bone images for practical.pptx, slides 1-19 (professor-provided class photos)"
    },
    questions:[...keyed,...classQuestions],
    requirements
  };
})();
