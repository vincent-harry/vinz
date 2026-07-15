export type AppendixDocument = {
  number: string;
  title: string;
  description: string;
  file?: string;
};

export const appendices: AppendixDocument[] = [
  {
    number: "1.0",
    title: "Competency-Based CV",
    description:
      "One-page curriculum vitae covering professional background, experience, academic projects, education, certifications, and technical skills.",
    file: "/documents/practicum/appendices/1-competency-based-cv.pdf",
  },
  {
    number: "2.0",
    title: "Endorsement Letter",
    description:
      "Official practicum endorsement document included in the completed portfolio.",
    file: "/documents/practicum/appendices/2-endorsement-letter.pdf",
  },
  {
    number: "3.0",
    title: "Practicum Acceptance",
    description:
      "Practicum confirmation and acceptance document from the host organization.",
    file: "/documents/practicum/appendices/3-practicum-acceptance.pdf",
  },
  {
    number: "4.0",
    title: "Liability Waiver",
    description:
      "Signed liability-waiver document submitted as part of the practicum requirements.",
    file: "/documents/practicum/appendices/4-liability-waiver.pdf",
  },
  {
    number: "5.0",
    title: "Training Plan",
    description:
      "Training-plan document outlining the practicum assignment and intended learning activities.",
    file: "/documents/practicum/appendices/5-training-plan.pdf",
  },
  {
    number: "7.0",
    title: "Complete Daily Journal",
    description:
      "Final complete practicum journal covering April 21 through July 10, 2026.",
    file: "/documents/practicum/appendices/7-complete-daily-journal.pdf",
  },
];
