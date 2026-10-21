# New muscle photographs: coverage and live-question verification

Completed October 21, 2026.

Website: https://skull-anatomy-practical-lab.dawsontyree89.chatgpt.site/

Published source: `e48276a7688ca4721608f3c2b94397c33d7ce562`.

## Result

All eight uploaded photographs, IMG_9269–IMG_9276, were inspected. Two photographs support three accurate additions, covering **3 of the 8 previously uncovered muscle terms**. This does not achieve majority coverage: the other five cannot be isolated confidently in these photographs. They remain explicitly uncovered.

| Category | New Questions | Passed | Corrected and Retested | Unresolved New Questions |
|---|---:|---:|---:|---:|
| Axial Muscles | 1 | 1 | 0 | 0 |
| Appendicular Muscles | 2 | 2 | 0 | 0 |
| Total | 3 | 3 | 0 | 0 |

There are now 116 muscle image questions and 689 questions overall. All 676 pre-existing question records were compared against the live baseline and are unchanged. No existing question was removed or replaced. No skeletal or joint section was changed in this muscle expansion.

## Every newly covered term and question

| Question ID | Photograph | Correct answer | Category | Reviewed indicator |
|---|---|---|---|---|
| `m3-photo9269-external-intercostals` | IMG_9269 | External intercostals | Axial Muscles | Small ellipse within the superficial intercostal belly between bony ribs, lateral to the costochondral junction; not on blue cartilage or medial intercostal fibers |
| `m3-photo9276-tensor-fasciae-latae` | IMG_9276 | Tensor fasciae latae | Appendicular Muscles | Small box inside the discrete proximal lateral-hip belly, lateral to sartorius and proximal to the iliotibial tract |
| `m3-photo9276-adductor-longus` | IMG_9276 | Adductor longus | Appendicular Muscles | Small ellipse in the superficial triangular medial-thigh belly, lateral to gracilis and medial to the crossing sartorius |

The same IMG_9276 photograph is reused for two distinct locations. Indicators do not contain answer names. Crops retain nearby anatomy for orientation. Original uploads remain unmodified; upright, resized JPEG exports are used on the website.

## Actual browser testing

Tests were run first on the local preview, then repeated on the **actual published website**, using a fresh isolated browser context so the student's saved progress was not altered.

- Every new question was opened in the existing practice interface and its displayed marker was manually checked against the source photograph, muscle boundaries, orientation, and neighboring structures.
- A second visual pass inspected all three rendered questions on desktop (1440 px) and phone (390 px). All six live screenshots were inspected. No marker was floating, on a shared boundary, or on tendon/fascia rather than the intended belly.
- **23 live answer submissions** exercised canonical names, uppercase, leading/trailing and repeated spaces, final punctuation, every configured alternative, a neighboring muscle name, and a clearly incorrect answer.
- Correct submissions were accepted; incorrect submissions were rejected; feedback displayed the correct anatomical name. Each submission's attempt and exact-answer scoring increments were checked.
- Alternatives tested include singular/plural external intercostal names, tensor fascia lata(e), TFL, and the appropriate names ending in “muscle.” All other stored muscle answers were also checked against each new question: no cross-muscle acceptance was found.
- Axial-only, appendicular-only, all-muscle, Custom axial-only, Custom appendicular-only, combined Custom muscles, Custom skull-only (new questions excluded), and Everything selections were tested against exact expected question IDs. No duplicates or misclassified new questions occurred.
- Question counts of 5 and custom 3 were exercised. Repeated starts produced randomized question orders.
- A three-question exam containing all new questions produced the expected **2 / 3** score after two correct and one incorrect answer. Feedback remained hidden until completion; the missed answer appeared correctly in results and retry.
- All three questions were deliberately missed, verified in saved missed-question review, retried, and answered correctly; all three cleared the missed list.
- Every new photo loaded successfully on desktop and mobile. Image and indicator transforms matched, crop aspect ratios were correct, and no horizontal overflow was found.
- Live Coverage showed one reviewed location for each new term and retained exactly the five remaining uncovered terms below.
- No browser page errors occurred. No temporary test controls or separate quiz system were deployed.

**Corrections:** none were needed for these three new markers, answers, or categories after testing. The existing marker renderer, grading, scoring, category filtering, navigation, styles, and study flow were reused. Only the additive bank, its image assets, a script include, source-description wording, and uncovered-term limitation notes were added/updated.

## Still not visually covered

| Term | Why it was not forced into a question | Useful additional view |
|---|---|---|
| Brachialis | The arm photographs do not provide a sufficiently clear, independently isolated brachialis belly; biceps and adjacent layers remain in place | Anterior distal upper arm with biceps removed/reflected, elbow and humerus visible |
| Iliacus | The intact abdominal wall obscures the iliac fossa; the separate muscle belly cannot be confidently isolated | Open posterior abdominal wall/pelvis showing the iliac fossa |
| Psoas major | The posterior abdominal wall and its relationship to lumbar vertebral bodies are hidden | Open abdomen showing the muscle beside the lumbar spine and separate from iliacus |
| Vastus intermedius | Rectus femoris remains in place over the deep central quadriceps | Anterior thigh with rectus femoris removed, femur and neighboring vasti retained |
| Adductor brevis | The deeper medial layer is not separately exposed | Medial thigh with superficial adductors removed/reflected and clear proximal attachments |

These are uncreated questions, not unresolved scored questions. There is no question ID for them, and they are not counted as successful visual coverage. In particular, a combined iliopsoas location is not counted as separate coverage for iliacus or psoas major.

## All eight photographs considered

| Photograph | Inspection outcome |
|---|---|
| IMG_9269 | Used for external intercostals; close view distinguishes bony ribs, cartilage, and differently directed muscle fields |
| IMG_9270 | Posterior/lateral arm: useful orientation, but no clear missing-term target beyond existing coverage |
| IMG_9271 | Anterior arm with detached deltoid: biceps/nearby layers retained; no confident isolated brachialis target |
| IMG_9272 | Anterior/lateral thigh: rectus femoris still covers vastus intermedius; other clearly visible muscles already covered |
| IMG_9273 | Wider medial thigh: orientation helpful, but no reliably isolated deep missing-term belly |
| IMG_9274 | Close medial thigh: gracilis, sartorius and exposed adductor magnus are already covered; no separate confident adductor brevis target |
| IMG_9275 | Wider whole-body model: considered against the closer IMG_9276; no additional clear missing-term target |
| IMG_9276 | Used for tensor fasciae latae and adductor longus, with different crops/indicators; intact abdominal wall prevents separate iliacus/psoas coverage |

## Anatomical checks

Only the newly uploaded classroom photographs were used as new question images. External references were used to check anatomy/model numbering, not as website image sources:

- [OpenStax: thoracic-wall and intercostal muscles](https://openstax.org/books/anatomy-and-physiology/pages/11-4-axial-muscles-of-the-abdominal-wall-and-thorax)
- [OpenStax: pelvic-girdle and lower-limb muscles](https://openstax.org/books/anatomy-and-physiology-2e/pages/11-6-appendicular-muscles-of-the-pelvic-girdle-and-lower-limbs)
- [3B Scientific M20 leg model manual](https://www.fab-ent.com/MEDIA/41_INSTRUCTIONS/12-4555_MANUAL.PDF): distinguishes rectus femoris (20), vastus intermedius (22), gracilis (27), and adductor magnus (28) in the separate leg-model photographs.
- [3B Scientific M10 arm model manual](https://www.fab-ent.com/MEDIA/41_INSTRUCTIONS/12-4556_MANUAL.PDF): checked while inspecting the arm photographs; no uncertain brachialis question was retained.

These are reviewed study locations, not new instructor-keyed arrows or a guarantee of full practical-exam coverage. Existing historical question limitations were not re-audited or changed in this focused expansion.
