// Additive bank: only the six supplied Exam 3 files, never older image sets.
(() => {
  const D=window.STUDY_DATA, images=window.MUSCLE_IMAGES.images, questions=[];
  const E=(x,y,rx=2,ry=2,crop)=>({type:'ellipse',x,y,rx,ry,...(crop?{crop}:{})});
  const B=(x,y,w,h,crop)=>({type:'box',x,y,w,h,...(crop?{crop}:{})});
  const P=(x,y,fromX,fromY,crop)=>({type:'pointer',x,y,fromX,fromY,...(crop?{crop}:{})});
  const aliases={
    'Frontal belly':['frontalis','frontal belly of occipitofrontalis'],
    'Occipital belly':['occipitalis','occipital belly of occipitofrontalis'],
    'Sternocleidomastoid':['SCM'], 'Rhomboids':['rhomboid muscles','rhomboid major and minor'],
    'Tensor fasciae latae':['tensor fascia latae','TFL'],
    'Fibularis longus':['peroneus longus'],'Fibularis brevis':['peroneus brevis'],
    'Skeletal muscle tissue':['skeletal muscle','skeletal muscular tissue'],
    'Cardiac muscle tissue':['cardiac muscle','cardiac muscular tissue'],
    'Muscle fascicle':['fascicle','muscle fasciculus'],'Tendon':['tendons']
  };
  // Each entry is a separately inspected location on the SAME original image.
  // Question IDs remain independent of the old skeletal / Exam 1 namespaces.
  function stations(imageKey,view,entries){
    const im=images[imageKey];
    for(const [answer,hotspot,tip,key] of entries){
      const id='m3-'+imageKey+'-'+answer.toLowerCase().replace(/[^a-z0-9]+/g,'-');
      questions.push({id,unit:'muscles',units:['muscles'],visual:true,cumulative:true,
        questionType:'visual-identification',topics:['muscles'],region:'Muscles',category:'Muscles',
        subcategory:view,view,bone:'Muscle identification',answer,
        alternatives:[...(aliases[answer]||[]),...(!/tissue|fascicle|tendon/i.test(answer)?[answer+' muscle']:[])],
        prompt:/tissue/.test(answer)?'Identify the muscle tissue subtype in the outlined field.':'Identify the indicated muscle or structure.',
        tip,source:im.source+(key?' · Virtual Practical 3, question '+key:' · reviewed image location'),
        sourceReferences:[im.source,im.resource,'Practical 3_238 Term Sheet.pages',...(key?['Virtual+Practical+3.pdf, answer key Q'+key]:[])],
        verification:key?'muscles-keyed-location':'muscles-reviewed-location',
        image:im.image,imageRatio:im.imageRatio,imageHeight:570,hotspot});
    }
  }
  const head=[0,0,100,98],face=[10,0,76,98],torso=[8,0,82,100],back=[0,0,100,100];
  stations('face-side','Head and neck · lateral model',[
    ['Temporalis',E(27,24,3,4,head),'The target is within the red temporal muscle above the ear, not on the pale aponeurosis.',23],
    ['Masseter',E(55,51,3,4,head),'The target lies in the thick vertical muscle over the mandibular ramus.'],
    ['Sternocleidomastoid',E(44,82,3,4,head),'Follow the oblique strap from the mastoid region toward the sternum and clavicle.'],
    ['Orbicularis oculi',E(76,29,2,3,head),'The target is on the circular muscle surrounding the eye.'],
    ['Occipital belly',E(9,35,1.7,3,head),'The red muscle patch behind the ear belongs to the posterior scalp belly.']
  ]);
  stations('face-front','Head and neck · anterior-oblique model',[
    ['Frontal belly',E(51,6,2.5,2.5,face),'The marker isolates the muscle of the forehead, above the orbital ring.'],
    ['Orbicularis oculi',E(40,22,2.5,3,face),'The marker is on the ring around the eye, not the eyelid or forehead.'],
    ['Orbicularis oris',E(60,55,2.5,1.5,face),'The marker follows the circular muscle around the mouth.'],
    ['Zygomaticus minor',E(44,40,1.2,1.2,[13,20,70,58]),'This is the more superior, smaller oblique slip reaching the upper lip.',24],
    ['Zygomaticus major',E(45,46,1.1,1.2,[13,20,70,58]),'The larger oblique slip runs toward the angle of the mouth.'],
    ['Depressor anguli oris',E(45,70,1.6,2,[13,30,70,65]),'The triangular slip descends from the angle of the mouth toward the mandible.',25]
  ]);
  stations('face-diagram-front','Head and neck · anterior diagram',[
    ['Buccinator',E(52,68,2.4,1.8),'The marker lies within the horizontal cheek muscle deep to the muscles at the mouth angle.'],
    ['Orbicularis oris',E(80,72,3,2),'The outlined portion belongs to the muscle encircling the lips.'],
    ['Zygomaticus major',E(48,56,2,1.8),'Trace this oblique slip from the zygomatic region toward the mouth angle.']
  ]);
  stations('face-diagram-side','Head and neck · lateral diagram',[
    ['Temporalis',E(41,34,5,4),'The fan-shaped temporal muscle sits above the zygomatic arch.'],
    ['Masseter',B(48,65,8,7),'The boxed area is within the broad muscle on the mandibular ramus.'],
    ['Sternocleidomastoid',E(69,78,3,4),'The outlined strap crosses the lateral neck.'],
    ['Frontal belly',E(13,30,2.2,4),'The forehead belly lies anterior to the temporal region.'],
    ['Occipital belly',E(85,31,1.8,4),'The posterior scalp patch is behind the temporal muscle.']
  ]);
  // Labels outside this crop are intentionally not rendered; the lower jaw
  // and adjacent lateral neck remain for orientation. Never show full context.
  stations('neck-diagram','Neck · superficial layer diagram',[
    ['Platysma',E(52,86,2.8,4,[37,44,41,56]),'The marker is within the broad superficial sheet spreading from the lower jaw over the anterior neck.',64]
  ]);
  stations('torso-front','Trunk · anterior model',[
    ['Pectoralis major',E(37,49,4,3,torso),'The marker is within the large superficial fan on the anterior chest.'],
    ['Pectoralis minor',E(63,47,2,2,torso),'The smaller deep chest muscle crosses the exposed upper ribs toward the coracoid process.',26],
    ['Serratus anterior',P(65,57,78,58,torso),'The pointer ends on a muscular rib slip at the lateral thoracic wall.'],
    ['Rectus abdominis',B(47,73,6,5,torso),'The box isolates one muscular segment beside the linea alba.'],
    ['External oblique',E(62,77,2.5,3,torso),'The marker lies in the superficial lateral abdominal wall, away from the rectus segments.'],
    ['Deltoid',E(24,44,2.5,2.5,torso),'The marker isolates the shoulder cap rather than the adjacent chest muscle.']
  ]);
  stations('back-split','Back · superficial and deep model',[
    ['Levator scapulae',E(35,26,2,3,back),'The target is in the strap joining the upper cervical region to the superior medial scapula.',27],
    ['Rhomboids',E(34,50,3,3,back),'The outlined deep muscle region runs from the vertebral column to the medial border of the scapula.',28],
    ['Trapezius',E(58,43,3,4,back),'The marker sits on the superficial sheet of the upper back.',29],
    ['Latissimus dorsi',E(67,76,4,4,back),'The marker is within the broad superficial lower-back muscle.',30]
  ]);
  stations('back-full','Back · posterior model',[
    ['Trapezius',E(40,41,3,4),'The target is on the superficial sheet between the spine and shoulder.'],
    ['Latissimus dorsi',E(38,65,4,3),'The target lies below the scapular muscles in the broad lower-back sheet.'],
    ['Deltoid',E(14,37,4,3),'The marker is within the posterior shoulder cap.'],
    ['Infraspinatus',E(34,49,3,2),'The target is on the scapular muscle below the scapular spine and above teres minor.'],
    ['Teres major',E(24,52,2.5,1.5),'The target lies on the thick inferior scapular band below teres minor.']
  ]);
  stations('abdominal','Trunk · anterior abdominal wall model',[
    ['Rectus abdominis',E(40,68,4,4),'The marker isolates a red muscular segment, not the white tendinous intersection.'],
    ['External oblique',E(20,68,2.2,4),'The target is within the lateral superficial muscle, not its broad white aponeurosis.'],
    ['Internal oblique',E(79,60,1.6,3),'This exposed deeper lateral muscle has fibers directed superomedially.'],
    ['Pectoralis major',E(66,19,5,4),'The upper fan is superficial to the chest wall.']
  ]);
  stations('internal','Trunk · internal wall model',[
    ['Transversus abdominis',E(78,68,2.8,4),'The marker sits on the deep lateral abdominal muscle with transverse fibers.'],
    ['Internal intercostals',P(70,18,83,16,[7,0,86,67]),'The pointer tip is between two ribs on the internal chest-wall surface.']
  ]);
  stations('internal-diagram','Trunk · internal anatomy diagram',[
    ['Diaphragm',E(28,52,4,5),'The target is within the cut dome separating thoracic and abdominal regions.',63]
  ]);
  stations('chest-diagram','Trunk · superficial and deep diagram',[
    ['Pectoralis major',E(31,36,5,5),'The target is within the broad superficial fan on the chest.'],
    ['Pectoralis minor',E(71,37,2.2,4),'The smaller triangular muscle lies on the exposed deep chest wall.'],
    ['Serratus anterior',P(75,58,87,59),'The tip ends on one of the sawtooth muscular slips over the ribs.'],
    ['External oblique',E(73,77,3,5),'The target lies lateral to the rectus sheath on the abdominal wall.']
  ]);
  stations('shoulder-anterior','Shoulder and arm · anterior model',[
    ['Subscapularis',E(37,23,5,4,[9,0,70,99]),'The target is on the broad muscle covering the anterior surface of the scapula.',31],
    ['Biceps brachii',E(66,68,2.5,4,[9,0,70,99]),'The marker is within the anterior upper-arm belly, not the tendon or neurovascular bundle.',34],
    ['Teres major',E(32,41,3,2,[9,0,70,99]),'The marker is within the thick band inferior to subscapularis.']
  ]);
  stations('shoulder-posterior','Shoulder and arm · posterior model',[
    ['Infraspinatus',E(59,12,3,3,[29,0,43,99]),'The exposed scapular muscle is below the scapular spine, behind the shoulder cap.'],
    ['Teres minor',E(57,16.5,2,1.4,[29,0,43,99]),'The small scapular band lies between infraspinatus and teres major.',32],
    ['Teres major',E(58,20,2.8,1.5,[29,0,43,99]),'The larger inferior scapular band is below teres minor.',33],
    ['Deltoid',E(42,16,3,4,[29,0,43,99]),'The marker isolates the superficial shoulder cap.'],
    ['Triceps brachii',E(45,32,2.5,4,[29,0,43,99]),'The posterior upper-arm belly lies proximal to the white elbow tendon.']
  ]);
  stations('cuff-diagram','Shoulder · scapular views diagram',[
    ['Supraspinatus',E(24,24,4,2.5,[5,0,94,99]),'The target is in the fossa superior to the scapular spine.'],
    ['Infraspinatus',E(27,43,5,4,[5,0,94,99]),'The target lies below the scapular spine.'],
    ['Subscapularis',E(77,44,5,5,[5,0,94,99]),'The marker is on the anterior scapular surface in the right-hand view.']
  ]);
  stations('arm-diagram','Shoulder and arm · lateral diagram',[
    ['Deltoid',E(66,49,6,5),'The outlined area is within the shoulder cap.'],
    ['Triceps brachii',E(44,79,5,3),'The marker lies within the posterior upper-arm muscle.']
  ]);
  stations('forearm-anterior','Forearm · anterior superficial model',[
    ['Pronator teres',E(55,21,2,3,[25,0,49,99]),'The target lies in the oblique proximal forearm muscle, above the flexor bellies.',35],
    ['Palmaris longus',P(52,58,66,59,[25,0,49,99]),'The pointer tip ends on the slender central superficial tendon, not the neighboring nerves.',36],
    ['Flexor carpi radialis',E(58,39,1.6,4,[25,0,49,99]),'The marker isolates the radial superficial flexor belly.'],
    ['Flexor carpi ulnaris',E(41,40,1.2,3,[25,0,49,99]),'The marker sits on the ulnar-edge superficial flexor.'],
    ['Flexor digitorum superficialis',P(56,64,67,68,[25,0,49,99]),'The pointer reaches the exposed finger-flexor tendon group before it passes into the palm.',38]
  ]);
  stations('forearm-anterior-deep','Forearm · anterior deep model',[
    ['Flexor pollicis longus',E(60,46,1.6,4,[24,0,49,99]),'The target is within the exposed deep radial belly continuing toward the thumb.',39],
    ['Flexor digitorum profundus',E(40,39,2,4,[24,0,49,99]),'The marker isolates the deep medial finger-flexor belly after the superficial layer is removed.']
  ]);
  stations('forearm-posterior','Forearm · posterior superficial model',[
    ['Brachioradialis',E(33,22,1.6,4,[24,0,43,99]),'The target is the lateral proximal forearm muscle, adjacent to the radial extensors.'],
    ['Extensor carpi radialis longus',E(34,48,1.3,2.5,[24,0,43,99]),'The marker is on the longer radial extensor, near its transition to tendon.',40],
    ['Extensor carpi radialis brevis',E(32,60,1.2,2.5,[24,0,43,99]),'The target is the shorter radial extensor adjacent to the longus.',41],
    ['Extensor digitorum',E(40,64,1.5,3,[24,0,43,99]),'The marker is in the common finger-extensor belly, not the radial border muscle.']
  ]);
  stations('forearm-posterior-alt','Forearm · posterior alternate model',[
    ['Extensor digitorum',E(46,47,2.5,3,[25,0,49,99]),'The target is within the central posterior forearm belly leading toward the finger tendons.']
  ]);
  stations('forearm-ulnar-diagram','Forearm · posterior diagram',[
    ['Extensor carpi ulnaris',E(47,62,3,4),'The marker isolates the ulnar posterior border muscle, beside the central finger extensor.'],
    ['Extensor digitorum',E(42,75,3,4),'The target is on the broad central extensor whose tendons continue toward the fingers.']
  ]);
  stations('forearm-posterior-deep','Forearm · posterior deep model',[
    ['Supinator',E(13,42,2,2,[0,21,99,47]),'The marker lies in the proximal exposed muscle wrapping around the radius.',42],
    ['Abductor pollicis longus',E(29,46,2.5,2,[0,21,99,47]),'The target is within the exposed oblique deep muscle continuing toward the thumb.',43]
  ]);
  stations('thigh-anterior','Hip and thigh · anterior superficial model',[
    ['Vastus medialis',E(61,49,3,2.5,[0,31,100,42]),'The target is in the distal medial quadriceps bulge beside the patella.',44],
    ['Rectus femoris',E(32,49,4,2.5,[0,31,100,42]),'The marker isolates the central superficial quadriceps belly.',46],
    ['Vastus lateralis',E(47,62,4,2,[0,31,100,42]),'The target is in the lateral quadriceps belly, away from the oblique sartorius.'],
    ['Sartorius',E(35,40,2.5,1,[0,31,100,42]),'The marker follows the long narrow strap crossing the anterior thigh obliquely.'],
    ['Iliopsoas',E(14,43,2.5,2,[0,31,100,42]),'The target is on the proximal hip-flexor muscle approaching the femur.',45]
  ]);
  stations('thigh-deep','Hip and thigh · anterior deep model',[
    ['Vastus lateralis',E(47,34,4,2,[0,27,100,46]),'The target is in the lateral quadriceps belly beside the exposed central deep muscle.'],
    ['Vastus medialis',E(53,59,4,2.5,[0,27,100,46]),'The target is in the medial quadriceps belly adjacent to the exposed deep center.']
  ]);
  stations('thigh-medial','Hip and thigh · medial deep model',[
    ['Adductor magnus',E(26,53,4,3,[0,0,100,100]),'The target lies on the exposed deep medial adductor mass.']
  ]);
  stations('thigh-medial-superficial','Hip and thigh · medial superficial model',[
    ['Gracilis',E(35,51,3,6),'The outline is within the flat superficial medial strap identified in the supplied virtual-practical key.',56],
    ['Adductor magnus',E(37,70,3,3),'The marker isolates the exposed adductor strip below the superficial medial strap.',55]
  ]);
  stations('thigh-posterior','Hip and thigh · posterior model',[
    ['Biceps femoris',E(37,43,4,2,[0,31,100,35]),'The marker is within the lateral hamstring belly.',49],
    ['Semitendinosus',E(40,51,3,2,[0,31,100,35]),'The target is on the superficial medial hamstring with a long distal tendon.',50],
    ['Semimembranosus',E(39,59,3,1.5,[0,31,100,35]),'The target isolates the broad medial hamstring visible deep to semitendinosus.'],
    ['Gluteus maximus',E(14,47,4,3,[0,28,100,40]),'The marker sits in the broad superficial buttock muscle, proximal to the thigh.']
  ]);
  stations('gluteal-diagram','Hip · superficial gluteal diagram',[
    ['Gluteus maximus',E(79,64,5,5),'The target is in the large superficial buttock muscle.'],
    ['Gluteus medius',E(66,13,5,3),'The marker isolates the exposed superior gluteal muscle above maximus.']
  ]);
  stations('gluteal-deep-diagram','Hip · deep gluteal diagram',[
    ['Gluteus medius',E(78,40,5,4),'The target is on the gluteal muscle exposed when the superficial layer is removed.']
  ]);
  stations('leg-anterior','Leg · anterior model',[
    ['Tibialis anterior',E(49,44,4,2.5,[0,29,100,35]),'The target is in the muscle immediately lateral to the anterior tibial border.',47],
    ['Extensor digitorum longus',E(52,40,3,1,[0,29,100,35]),'The marker isolates the more lateral anterior-compartment extensor.'],
    ['Extensor hallucis longus',P(62,41,67,32,[0,29,100,35]),'The tip isolates the slender exposed strip between the adjacent anterior-compartment muscles.',48]
  ]);
  stations('leg-lateral','Leg · lateral model',[
    ['Fibularis longus',E(47,43,4,2.5,[0,19,100,58]),'The marker is within the proximal lateral-compartment muscle.',57],
    ['Fibularis brevis',E(60,37,3,1.5,[0,19,100,58]),'The marker isolates the shorter distal lateral belly adjacent to the fibula.',58]
  ]);
  stations('leg-posterior','Leg · posterior superficial model',[
    ['Gastrocnemius',E(37,65,3,2,[0,24,100,48]),'The marker is on the bulky superficial calf belly, not the calcaneal tendon.',51],
    ['Soleus',E(40,49,2,1.5,[0,24,100,48]),'The exposed deeper calf muscle is visible beside gastrocnemius.',52]
  ]);
  stations('leg-deep','Leg · posterior deep model',[
    ['Flexor hallucis longus',E(56,56,4,3,[0,31,100,39]),'The target lies in the large lateral deep-flexor belly.',53],
    ['Popliteus',E(23,47,3,2,[0,31,100,39]),'The target is on the short oblique muscle at the back of the knee.',54],
    ['Tibialis posterior',E(51,51,2,1,[0,31,100,39]),'The marker isolates the central deep muscle between the long digital flexors.'],
    ['Flexor digitorum longus',E(48,46,2,1,[0,31,100,39]),'The target lies in the medial deep-flexor belly, above the central neurovascular bundle.']
  ]);
  stations('torso-alt','Trunk · alternate anterior model',[
    ['Pectoralis major',E(42,52,4,3,[9,0,80,100]),'The marker is within the large anterior chest fan.'],
    ['Rectus abdominis',E(50,74,3,3,[9,0,80,100]),'The outline isolates a muscular segment on the anterior abdomen.']
  ]);
  stations('back-alt','Back · alternate posterior model',[
    ['Latissimus dorsi',E(56,55,3,4,[12,0,75,100]),'The marker is on the broad lower-back sheet below the scapular region.'],
    ['Trapezius',E(59,29,2.5,3,[12,0,75,100]),'The target is in the superficial upper-back sheet.']
  ]);
  stations('abdominal-alt','Trunk · alternate abdominal model',[
    ['Rectus abdominis',E(46,66,3,3,[15,0,67,100]),'The marker lies on a muscular belly between the white tendinous intersections.']
  ]);
  stations('forearm-anterior-alt','Forearm · alternate anterior model',[
    ['Brachioradialis',E(58,28,1.8,4,[27,0,49,100]),'The target is the thick muscle along the radial border of the proximal forearm.',37]
  ]);
  stations('skeletal-tissue','Muscle histology · class micrograph',[
    ['Skeletal muscle tissue',B(20,18,58,62),'The outlined field shows long parallel fibers with obvious cross-striations. The PDF key identifies the major type as muscular; the visible parallel striated fibers support skeletal muscle.']
  ]);
  stations('cardiac-tissue','Muscle histology · class micrograph',[
    ['Cardiac muscle tissue',B(20,18,58,62),'The outlined field is the cardiac muscle specimen identified by the supplied virtual-practical key.',8]
  ]);
  // Crop removes the embedded answer labels while retaining the whole-muscle
  // cross section, pulled-out bundle and tendon for scale and orientation.
  stations('muscle-organization','Muscle organization · class diagram',[
    ['Muscle fascicle',E(67,42,3.2,8,[0,16,79,84]),'The marker is on the pulled-out bundle of muscle fibers, not a single cell.',67],
    ['Tendon',E(5,30,1.3,3,[0,16,79,84]),'The target is the narrow connective-tissue attachment at the end of the muscle.']
  ]);
  const required=('Frontal belly|Occipital belly|Orbicularis oculi|Orbicularis oris|Buccinator|Zygomaticus major|Zygomaticus minor|Depressor anguli oris|Platysma|Masseter|Temporalis|Sternocleidomastoid|Diaphragm|External intercostals|Internal intercostals|Rectus abdominis|External oblique|Internal oblique|Transversus abdominis|Pectoralis major|Pectoralis minor|Serratus anterior|Latissimus dorsi|Trapezius|Deltoid|Levator scapulae|Rhomboids|Teres major|Supraspinatus|Infraspinatus|Subscapularis|Teres minor|Biceps brachii|Brachialis|Triceps brachii|Pronator teres|Flexor carpi radialis|Palmaris longus|Flexor carpi ulnaris|Flexor digitorum superficialis|Flexor digitorum profundus|Flexor pollicis longus|Brachioradialis|Extensor carpi radialis longus|Extensor carpi radialis brevis|Extensor digitorum|Extensor carpi ulnaris|Supinator|Abductor pollicis longus|Gluteus maximus|Gluteus medius|Iliopsoas|Iliacus|Psoas major|Sartorius|Rectus femoris|Vastus lateralis|Vastus medialis|Vastus intermedius|Tensor fasciae latae|Adductor longus|Adductor magnus|Adductor brevis|Gracilis|Semitendinosus|Semimembranosus|Biceps femoris|Tibialis anterior|Extensor digitorum longus|Extensor hallucis longus|Fibularis longus|Fibularis brevis|Gastrocnemius|Soleus|Popliteus|Flexor digitorum longus|Flexor hallucis longus|Tibialis posterior').split('|');
  D.muscles={questions,required,sources:window.MUSCLE_IMAGES.sources,
    notes:{'Tensor fasciae latae':'No unambiguous target was retained from the available hip views.',
      'Vastus intermedius':'The deep quadriceps view does not provide an unambiguous muscular target separate from neighboring bellies and aponeuroses.',
      'Adductor longus':'No unambiguous separate target was retained from the available medial thigh views.',
      'Adductor brevis':'No unambiguous separate target was retained from the available medial thigh views.',
      'External intercostals':'Current rib views do not reliably isolate the external layer from neighboring intercostal layers.',
      'Brachialis':'No confidently isolated target has been retained from the visible arm views.',
      'Iliacus':'Iliopsoas is tested as the combined visible unit; its components are not forced onto an ambiguous boundary.',
      'Psoas major':'Iliopsoas is tested as the combined visible unit; its components are not forced onto an ambiguous boundary.'}};
  D.exam1.topicLabels.muscles='Muscles';
  D.questions.push(...questions);
})();
