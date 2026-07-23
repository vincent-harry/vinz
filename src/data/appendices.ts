import { publicPath } from "../utils/publicPath";

export type AppendixDocument = {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  file?: string;
  status?: "Available";
  viewLabel?: string;
  downloadLabel?: string;
};

export const appendices: AppendixDocument[] = [
  {
    number: "1.0",
    title: "Competency-Based CV",
    description:
      "Updated professional CV containing my education, practicum experience, technical skills, academic projects, certifications, and contact details.",
    file: publicPath("documents/Vincent_Trayvilla_Updated_CV.pdf"),
    status: "Available",
    viewLabel: "View Updated CV",
    downloadLabel: "Download CV",
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
    title: "Complete Practicum Weekly Journal",
    subtitle: "April 21 \u2013 July 24, 2026",
    description:
      "A 14-week compilation of practicum activities under Software Development, Technical Documentation, and IT Operations at the City Government of Bi\u00f1an ICTO.",
    file: publicPath("documents/Practicum_Weekly_Journal_April21_July24_2026.pdf"),
    status: "Available",
    viewLabel: "View Weekly Journal",
    downloadLabel: "Download Journal",
  },
];
