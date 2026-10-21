# Anatomy Practical — Marker Accuracy Audit

Reviewed October 20, 2026 against published source commit ad6b47ba94f06037ff2dad894f2c9acaceb80411.

## Results

- 517 image questions reviewed individually, using 122 original images. All 87 six-station comparison sheets were visually inspected, including each reused image location.
- 522 individual indicator occurrences inspected: 507 SVG-marked questions contain 515 individual indicators (grouped bone markers counted separately), plus 7 original embedded source arrows. Three additional whole-cell mitosis schematics use no discrete indicator. Shadow/foreground copies of the same SVG geometry count as one indicator, not two.
- 499 indicators retained as appropriate to their stored prompt.
- 10 indicators corrected and visually rechecked on desktop and mobile.
- 13 question/indicator locations remain unresolved; retained unchanged and explicitly listed below, not certified as accurate.
- Corrections by category: Exam 1 histology/body regions 6; skull landmarks/sutures 3; muscles 1.
- No answers changed. No confirmed wrong stored answer was established. Two deep-forearm muscle associations remain suspect and need the matching source label mapping.
- All 676 total questions, original images, prompts, alternatives, categories and other question fields remain unchanged. Only 10 hotspot objects changed. Existing quiz code, styles, navigation and scoring were not rewritten.

## Targeted corrections

- **sk-12** — Replaced a box spanning the ridge and adjacent plate with a pointer onto the crista galli ridge.
- **sk-n01** — Replaced an approximate trace with a short pointer on the visible coronal seam.
- **sk-n08** — Replaced an approximate trace with a short pointer directly on the lambdoid seam.
- **m3-torso-alt-rectus-abdominis** — Moved the ellipse off the midline/white border into a red rectus abdominis muscle panel.
- **e1-ref-2-37** — Replaced the whole-field box with an ellipse inside one clearly bounded adipocyte.
- **e1-ref-3-37** — Replaced the whole-field box with a pointer onto an elongated fibroblast nucleus between parallel collagen bundles; the full cell border is not resolved.
- **e1-ref-3-44** — Replaced the whole-field box with a pointer into a central-nucleated cardiac muscle fiber; no speculative complete cell outline.
- **e1-ref-2-03** — Moved and narrowed the ellipse fully into the posterior knee, away from the inter-leg gap.
- **e1-region-popliteal** — Moved and narrowed the ellipse fully into the posterior knee, away from the inter-leg gap.
- **e1-region-coxal** — Moved and narrowed the ellipse into the lateral hip region rather than its outer border/proximal thigh.

## Unresolved — do not treat as verified direct-identification material

These are reported rather than guessed. No questions were removed or disabled because the request explicitly required retaining the question bank. A matching labeled classroom view or instructor confirmation is needed for the muscle associations.

| Exact question ID | Stored answer | Exact image | Limitation |
| --- | --- | --- | --- |
| e1-ref-1-11 | Parietal pleura | assets/exam1/cavities.jpg | Prompt asks for the wall-lining membrane associated with the marked pleural cavity. Conceptual answer is appropriate, but schematic does not resolve parietal pleura as a distinct layer; existing cavity marker is NOT verified as a direct membrane hotspot. |
| e1-ref-1-39 | Osteocyte | assets/exam1/compact-bone.jpg | Prompt asks for the mature cell found in lacunae. Osteocyte is the conceptual answer; the ground-bone micrograph shows lacunae, not a resolvable osteocyte cell. Cannot verify as a direct cell hotspot. |
| e1-ref-2-11 | Parietal pericardium | assets/exam1/cavities.jpg | Prompt asks for the wall-lining membrane associated with the marked pericardial cavity. Conceptual answer is appropriate, but schematic does not resolve the parietal serous pericardium distinctly enough for a direct membrane hotspot. |
| e1-ref-3-11 | Parietal peritoneum | assets/exam1/cavities.jpg | Prompt asks for the wall-lining membrane associated with the marked abdominal/peritoneal cavity. Conceptual answer is appropriate, but schematic does not resolve parietal peritoneum distinctly enough for a direct membrane hotspot. |
| m3-face-front-zygomaticus-minor | Zygomaticus minor | assets/muscles/face-front.jpeg | Adjacent slips, vessels and nerves overlap; the exact minor-muscle association cannot be independently confirmed from this view and available text labels alone. |
| m3-face-front-zygomaticus-major | Zygomaticus major | assets/muscles/face-front.jpeg | Current ellipse overlaps a blue facial vessel. Crowded oblique facial slips require a clearly labeled matching model view before moving the target. Do not treat this location as verified. |
| m3-forearm-anterior-pronator-teres | Pronator teres | assets/muscles/forearm-anterior.jpeg | Proximal forearm model orientation and overlapping muscle bellies do not allow confident independent assignment of the current marked belly without a matching labeled view. |
| m3-forearm-anterior-palmaris-longus | Palmaris longus | assets/muscles/forearm-anterior.jpeg | The marker is on a central tendon, but continuity to the named muscle is not unambiguous among adjacent flexor tendons in this photograph. |
| m3-forearm-anterior-flexor-digitorum-superficialis | Flexor digitorum superficialis | assets/muscles/forearm-anterior.jpeg | Distal white tendons cannot be confidently distinguished from neighboring flexor tendons in this photograph; the stored course-question reference alone is not location verification. |
| m3-forearm-ulnar-diagram-extensor-carpi-ulnaris | Extensor carpi ulnaris | assets/muscles/forearm-ulnar-diagram.png | Possible answer/location mismatch: the marked oblique deep-view belly is not confidently distinguishable as ECU; may be a different deep extensor/abductor. Original label-to-image mapping is needed. |
| m3-forearm-ulnar-diagram-extensor-digitorum | Extensor digitorum | assets/muscles/forearm-ulnar-diagram.png | Possible answer/location mismatch: this appears to be a deep posterior view, and the target cannot be independently confirmed as superficial extensor digitorum. Original label-to-image mapping is needed. |
| m3-thigh-anterior-sartorius | Sartorius | assets/muscles/thigh-anterior.jpeg | Current ellipse is near a pale upper-edge strip. A continuous oblique sartorius strap is not clear enough in this orientation to relocate confidently. |
| m3-leg-posterior-soleus | Soleus | assets/muscles/leg-posterior.jpeg | Current target is near a removable-model opening/fastening and white material; exposed soleus cannot be isolated confidently enough to move the target without guessing. |

## Interpretation of application questions

Brain, aorta, small-intestine and organ-system prompts sometimes ask where a pictured tissue occurs or which system a marked organ belongs to. Their answers are applications of the image, not names of an organ visibly depicted in that micrograph. These were checked against their actual prompts rather than incorrectly moved to a different source image. The three serous-membrane questions and osteocyte question above are conceptually valid but cannot meet the requested direct-visible-target standard.

## Verification

- All 122 referenced original image files loaded successfully.
- All 507 SVG stations checked at 1440×1000 desktop, 1280×800 laptop, 768×1024 tablet and 390×844 mobile browser viewports. Shared image/marker transforms matched and no SVG exceeded its containing panel. This is viewport emulation, not a physical-device test.
- All 10 modified stations visually inspected at desktop and mobile sizes with their original surrounding anatomy retained.
- Correct typed answers and feedback tested for all 10 modified stations. Exam submission, scoring, progress persistence and missed-question rendering also passed in a fresh local browser context. No user study history was modified.
- Browser reported no script errors. Baseline comparison confirmed that all non-hotspot question fields were identical. Only index.html's additional script include and the new marker-audit.js affect the website.
- No anatomical labels or answer text added to the images or marker accessibility labels.

## Evidence files

question-ledger.csv / question-ledger.json contain every image question, original and revised geometry, status, exact image reference and visual-atlas location. indicator-ledger.json enumerates all 522 individual indicator occurrences. tests.json records browser checks. The comparison sheets and corrected desktop/mobile screenshots are retained with this audit.

This is an image-based review, not instructor certification. The 13 unresolved locations are specifically excluded from claims of marker accuracy.
