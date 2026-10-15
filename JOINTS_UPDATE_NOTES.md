# Joints and muscle groups — October 14, 2026

Focused update to the existing Anatomy Practical Study Lab; no website redesign.

## Joints

- Added 63 image-based questions using all four newly uploaded screenshots. Original image bytes and source hashes are retained in `dist/assets/joints/provenance.json`.
- Eight component targets: articular cartilage, synovial cavity, meniscus, fibrous layer of the articular capsule, synovial membrane, bursa, tendon sheath, and tendon.
- Fourteen joint examples support 14 name questions, 14 broad structural-class questions, 13 subtype questions, and 14 functional-class questions. Classification wording follows `Practical 3_238 Term Sheet.pages`.
- Examples: sagittal suture; forearm and leg interosseous syndesmoses; gomphosis; epiphyseal synchondrosis; intervertebral and pubic symphyses; shoulder; elbow; thumb carpometacarpal; intercarpal; metacarpophalangeal; atlas-axis; knee.
- The median atlas-axis pivot is not separately visible. Its course classification appears in feedback/coverage, but no pivot-subtype question is scored from this view.
- Synovial fluid has no distinct visible boundary separate from the cavity. A fat pad, periosteum, reinforcing ligament, and independent whole-capsule target are not forced onto unclear areas.
- Responsive SVG crops and indicators use original-image coordinates. Display-only line contrast improves faint diagrams without changing source images; the grayscale vertebral model retains its original contrast.

## Muscle organization

- Preserved all 113 existing muscle questions, IDs, answers, aliases, images, hotspots, tips, evidence, and saved-progress keys.
- Reclassified only grouping metadata: 31 Axial Muscles questions, 78 Appendicular Muscles questions, and 4 general muscle histology/organization stations.
- Head, neck, thorax, and abdominal-wall muscles are axial. Shoulder/girdle and limb muscles are appendicular, following the term sheet's functional sections. A shoulder muscle is not classified as axial merely because it appears on a torso photograph.
- Skeletal/cardiac tissue, muscle fascicle, and tendon remain under Muscles · All and the separate Custom topic Muscle histology / organization.
- Older saved Custom selections containing `muscles` migrate to all three new muscle groups without losing progress.

## Integration and verification

- Existing typed answers, scoring, Learn, question counts, randomized sessions, Exam simulation, missed-question review/retry, theme, and navigation are reused.
- Independent Axial Muscles, Appendicular Muscles, and Joints presets; independent Custom topics; Everything includes all additions.
- Joints focus: components, names, structural class/subtype, functional class, or all content. The focus affects Joints only in mixed sets.
- Confirmed every baseline question remains. The 483 non-muscle question records are unchanged; muscle records differ only in grouping metadata. Original source banks and all existing assets/hotspot rendering files are unchanged.
- Focused real-browser checks cover the new questions, aliases, rejection of different functional classes, five-question exam scoring, misses, saved-selection migration, mixed sets, and phone/tablet/desktop layouts. Every new question is rendered; all 22 unique marked locations are visually inspected.

The Sites sharing policy is unchanged. GitHub receives the static website files and this note, not Sites credentials or private QA files.
