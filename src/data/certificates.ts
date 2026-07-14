export type Credential = {
  title: string;
  issuer: string;
  date: string;
  category: "Certificate" | "Seminar" | "Training";
  description: string;
  image?: string;
};

export const credentials: Credential[] = [
  {
    title: "Career Readiness Toolkit",
    issuer: "Mapúa MCL Office for Strategic Partnerships and Global Engagement",
    date: "April 21, 2026",
    category: "Training",
    description:
      "Pathways to Employability program focused on career readiness and professional opportunities.",
    image: "/assets/images/certificates/career-readiness-toolkit.png",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2022",
    category: "Certificate",
    description: "Foundational networking concepts and network configuration.",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2023",
    category: "Certificate",
    description: "Foundational cloud concepts, services, security, and architecture.",
  },
  {
    title: "Introduction to Computing",
    issuer: "Credential listed in current CV",
    date: "2024",
    category: "Certificate",
    description: "Introductory computing concepts and applications.",
  },
  {
    title: "Generative AI",
    issuer: "Credential listed in current CV",
    date: "2024",
    category: "Certificate",
    description: "Introduction to generative artificial-intelligence concepts.",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Credential listed in current CV",
    date: "2024",
    category: "Certificate",
    description: "Core concepts in cloud infrastructure and services.",
  },
  {
    title: "Introduction to Edge Computing",
    issuer: "Credential listed in current CV",
    date: "2024",
    category: "Certificate",
    description: "Overview of processing and services closer to connected devices.",
  },
  {
    title: "WearOS: Emerging Technology for Internet and Learning of Everything",
    issuer: "Seminar listed in current CV",
    date: "2024",
    category: "Seminar",
    description: "Discussion of wearable platforms and connected technologies.",
  },
  {
    title: "AI Summit: Unlocking the Future - Artificial Intelligence Opportunities",
    issuer: "Seminar listed in current CV",
    date: "2024",
    category: "Seminar",
    description: "Seminar on emerging opportunities and applications of artificial intelligence.",
  },
];
