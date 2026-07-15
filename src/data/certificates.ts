export type Credential = {
  title: string;
  issuer?: string;
  date: string;
  category: "Certificate" | "Seminar" | "Training";
  description: string;
  image?: string;
  file?: string;
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
    file: "/assets/images/certificates/career-readiness-toolkit.png",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "November 15, 2022",
    category: "Certificate",
    description:
      "Course completion covering network access, Ethernet, IP addressing, routing, connectivity, and network security practices.",
    image: "/assets/images/certificates/ccna-introduction-to-networks-preview.png",
    file: "/documents/certificates/ccna-introduction-to-networks-certificate.pdf",
  },
  {
    title: "Generative AI for Beginners",
    issuer: "Great Learning Academy",
    date: "November 2024",
    category: "Certificate",
    description: "Online course introducing foundational generative artificial-intelligence concepts.",
    image: "/assets/images/certificates/generative-ai-preview.png",
    file: "/documents/certificates/generative-ai-certificate.pdf",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "USAID Asia Open RAN Academy",
    date: "August 24, 2024",
    category: "Certificate",
    description: "Certificate of participation for a webinar on cloud-computing concepts and services.",
    image: "/assets/images/certificates/cloud-computing-preview.png",
    file: "/documents/certificates/cloud-computing-certificate.pdf",
  },
  {
    title: "Introduction to Edge Computing",
    issuer: "USAID Asia Open RAN Academy",
    date: "August 31, 2024",
    category: "Certificate",
    description: "Certificate of participation for a webinar on edge-computing concepts and applications.",
    image: "/assets/images/certificates/edge-computing-preview.png",
    file: "/documents/certificates/edge-computing-certificate.pdf",
  },
  {
    title: "WearOS: Emerging Technology for Internet and Learning of Everything",
    issuer: "Mapúa Malayan Colleges Laguna",
    date: "November 23, 2024",
    category: "Seminar",
    description: "Seminar on wearable platforms, emerging technology, and connected learning environments.",
    image: "/assets/images/certificates/wearos-preview.png",
    file: "/documents/certificates/wearos-certificate.pdf",
  },
  {
    title: "AI Summit: Unlocking the Future",
    issuer: "Mapúa Malayan Colleges Laguna - CCIS and JPCS",
    date: "June 6, 2024",
    category: "Seminar",
    description:
      "Certificate of participation for a summit exploring computer-science opportunities in artificial intelligence.",
    image: "/assets/images/certificates/ai-summit-preview.png",
    file: "/documents/certificates/ai-summit-certificate.pdf",
  },
];
