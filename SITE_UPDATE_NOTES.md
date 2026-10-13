# Cumulative Practical update — October 5, 2026

The existing Skeletal Lab Site remains the main project. The older GitHub site
is a content source, not a replacement application or publishing destination.

## Retained

- All 188 original skeletal question IDs, answers, alternatives, images,
  reviewed hotspot geometry, explanations and evidence fields are unchanged.
- Original `data.js`, `new-images.js`, `hotspots.js` and `hotspots.css` are unchanged.
- Existing visual identity, navigation, exact-spelling score and progress key
  (`skullLabProgress`) remain. Added progress fields are backwards-compatible.

## Added

- 295 Exam 1 study questions, including 136 visual stations and an osteon
  station also eligible for Unit 2. Total unique questions: 483.
- Four presets and Custom Practice, with topic filtering shared by Learn,
  Identification, Exam simulation and retry pools.
- Topic variety without duplicated question IDs in a set; existing counts,
  custom count and spelling mode retained.
- Category results and missed-question review with original target, response,
  accepted answer and explanation. Older responses not previously saved are
  explicitly identified as unavailable, never reconstructed.

## Sources and limits

Both hosted websites and the matching uploaded Exam 1 `index.html` were
inspected. Every usable Exam 1.zip file was inspected: 14 PDFs (126 pages) and
three photographs. Duplicated Quizlet exports and old results were recognized
as overlapping sources rather than independent new evidence.

New class assets are extracted from the ZIP when available, with the existing
reference website used for its supplied instructional schematics and credited
OpenStax micrographs. Each bitmap is shared by multiple question locations.
No new outside specimen images or AI-generated histology were used.

Reticular connective tissue, blood and hyaline cartilage have written review
but no verified specimen-recognition stations. Coverage and practice setup
say this explicitly. The ambiguous cartilage specimen on Virtual Practical 1
page 15 and the image/key conflict on page 19 are excluded from scored visuals.
Source typos such as "Planter", the liver/right-hypogastric mismatch, and the
misleading paraphrase of parfocal are not repeated as scored facts.

The source-supported questions are study material, not a claim of professor
answer-key verification or exhaustive visual mastery of the term sheet.
The existing 12 professor-keyed skeletal questions retain their evidence label.

## Verification

Real headless Chrome checks passed for all presets, custom topic combinations,
select/clear all, empty selections, question counts, exam scoring, aliases,
incorrect anatomy qualifiers, typo feedback, category results and missed retries.
Every new visual station was rendered and visually reviewed; corrected targets
were rechecked. Original skeletal fields were compared to the source snapshot.
Phone (390 px), tablet (768 px), laptop (1280 px), desktop (1920 px), light/dark
themes and responsive stations were checked. Indicators use the retained SVG
viewBox system, so their coordinates share the image's scaling and crop.

New bank metadata is in `dist/exam1-data.js`; scoped flow additions are in
`dist/cumulative.js`, with matching existing-style controls in `cumulative.css`.
