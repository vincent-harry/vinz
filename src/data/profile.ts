import { cvData, cvPath } from "./cv";

const personalInformation = cvData.personalInformation;
const primaryEducation = cvData.education[0];

export const profile = {
  name: personalInformation.name,
  title: personalInformation.title,
  program: primaryEducation.program,
  school: primaryEducation.school,
  graduation: primaryEducation.graduation,
  location: personalInformation.location,
  email: personalInformation.email.display,
  phone: personalInformation.phone.display,
  linkedin: personalInformation.linkedin.href,
  github: personalInformation.github.href,
  portfolio: personalInformation.portfolio.href,
  cv: cvPath,
};
