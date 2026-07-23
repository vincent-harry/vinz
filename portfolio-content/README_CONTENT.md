# Portfolio Content Workspace

This folder is the authoring workspace for materials that will be reviewed and copied into the Astro website. Website-ready copies belong under `public/` and should use lowercase, descriptive filenames.

## Replacing Core Files

- Profile picture: replace `profile/profile-picture.jpg` with a clear JPG portrait.
- Official CV: `public/documents/Vincent_Trayvilla_Updated_CV.pdf`.
- Practicum appendices: replace the matching numbered PDF in `practicum/appendices/`.
- Complete Practicum Weekly Journal: `public/documents/Practicum_Weekly_Journal_April21_July24_2026.pdf`.
- Submission files should be stored locally; the public website does not depend on external cloud-storage links.

The finalized competency-based CV and compiled weekly journal each have one website-ready copy under `public/documents/`. The endorsement letter, practicum acceptance, liability waiver, and training plan remain verified local appendix files. Generic certificate/seminar files and other zero-byte replacement slots must not be published or linked.

## Adding Materials

- Certificates: add PDF, JPG, JPEG, PNG, or WebP files to `certificates/`, then describe them in `certificates-information.txt`.
- Seminars and trainings: add files to `seminars/`, then describe them in `seminars-information.txt`.
- Project screenshots: place images in the appropriate `software-projects/<year>/<project>/screenshots/` folder and complete that project's `project-information.txt`.
- Capstone screenshots: add system interfaces to `capstone/system-screenshots/`; use the other Capstone folders for hardware, testing, and awards.
- Practicum screenshots: add images to the appropriate system folder under `practicum/output-screenshots/`.
- DTR files: add the final DTR source files to `practicum/dtr/`.

Use original, final versions whenever possible. Do not add files belonging to another student. Avoid including full home addresses, identification numbers, signatures, or other private information unless the document is required and safe for public submission.

## Information Files

Complete the accompanying `.txt` files with verified facts only. Leave unknown fields blank rather than guessing. Filenames should be descriptive and duplicates should include a clear revision date until the final version is selected.

## Build Command

After website content is connected, run:

```powershell
npm.cmd run build
```
