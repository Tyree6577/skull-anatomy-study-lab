# Classroom joint photographs - October 18, 2026

Focused additive update to the existing Joints section. The existing 659 question records are unchanged. There are now 676 total questions, including 80 Joints questions.

## Sources and counts

- IMG_9225.pdf, page 1: shoulder model, 5 questions (joint name, structural class, subtype, functional class, articular capsule).
- IMG_9226.pdf, page 1: anterior knee model, 7 questions (four joint/classification questions plus tendon, meniscus, and ligament).
- IMG_9227.pdf, page 1: posterior knee model, 5 questions (four joint/classification questions plus ligament).

All three single-page PDFs were visually inspected. Assets are actual page photographs rendered to 1350 x 1800, saved as high-quality JPEGs without retouching the anatomy. Original PDF hashes and image hashes are in assets/joints/class-model-provenance.json. Crops and indicators share the existing SVG coordinate system. No external image is included.

The supplied Practical 3_238 Term Sheet.pages provides classifications: shoulder = Synovial / Ball-and-socket / Diarthrosis; knee = Synovial / Hinge / Diarthrosis. Modified hinge is accepted for the knee. SOMSO's official model catalog was also consulted for model context, not as a replacement image source. Component locations are based on anatomical position, shape, and attachments, not color alone.

## Scope and limits

The capsule target is on the broad shoulder sleeve. The anterior knee tendon target is proximal to the patella. The meniscus target is the visible lateral wedge between femur and tibia. The two ligament targets are on side bands connecting bones; the course-level answer is Ligament, with specific collateral-ligament names accepted.

No new photo question tests internal synovial membrane, fluid, bursae, cruciate ligaments, or a separately distinguishable articular-cartilage layer. Hidden anatomy, model hardware, and uncertain bands were excluded. The older diagram-based stations remain available.

## Integration and verification

- Only index.html and the joint-specific wrapper changed; a new additive joint-photos.js and three photo assets/provenance file were added.
- Existing question data, other image assets, styling, scoring, navigation, and selection behavior remain unchanged.
- All 17 new records accept their answers and aliases and reject unrelated answers.
- All 659 original question records compared equal to the baseline.
- Eight distinct image/marker combinations visually inspected at desktop, tablet, and phone sizes; all 17 questions rendered at desktop and phone sizes.
- A misplaced posterior ligament oval was corrected to a pointer directly on the band and rechecked.
- All photos decoded successfully; no browser errors or horizontal overflow at 1440, 768, or 390 pixels.
- Actual practice forms: 17/17 correct; actual exam forms: 17/17; no feedback shown during exam.
- Wrong-answer feedback, progress recording, missed-question review/retry, question-count selection, hidden Learn details, Coverage, dark theme, Joints focus selection, Custom Practice, and Everything tested.
- Joints = 80; Everything = 676; Custom all joint topics + appendicular muscles = 158.

Publication preserves the existing owner-private audience. This update does not itself upload to the user's separate GitHub repository.
