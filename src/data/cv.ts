import { publicPath } from "../utils/publicPath";

export const cvPath = publicPath("documents/Vincent_Harry_Trayvilla_Professional_CV.pdf");

export const cvData = {
  personalInformation: {
    name: "Vincent Harry H. Trayvilla",
    title: "Web Systems Developer | IT Support",
    location: "San Pedro City, Laguna",
    phone: {
      display: "+63 994 997 5241",
      href: "tel:+639949975241",
    },
    email: {
      display: "vince.trayvilla@gmail.com",
      href: "mailto:vince.trayvilla@gmail.com",
    },
    linkedin: {
      display: "linkedin.com/in/vincent-harry-trayvilla",
      href: "https://www.linkedin.com/in/vincent-harry-trayvilla",
    },
    github: {
      display: "github.com/vincent-harry",
      href: "https://github.com/vincent-harry",
    },
    portfolio: {
      display: "vhhtrayvilla-portfolio.vercel.app",
      href: "https://vhhtrayvilla-portfolio.vercel.app/",
    },
  },
  professionalSummary:
    "Graduating Bachelor of Science in Information Technology student with hands-on practicum experience in web systems development and IT support within a local government environment. Skilled in PHP, CodeIgniter 4, MySQL, system testing, basic networking, and hardware and software troubleshooting. Seeking an entry-level role in IT support, systems development, quality assurance, or web applications.",
  workExperience: [
    {
      organization: "City Government of Bi\u00f1an",
      location: "Bi\u00f1an City, Laguna",
      position: "Web Systems Developer and IT Support Intern",
      dates: "Apr 2026 \u2013 Jul 2026",
      assignedProject: "Bi\u00f1an Access Card Management Information System",
      responsibilities: [
        "Contributed to system development using CodeIgniter 4, PHP, MySQL, Bootstrap, jQuery, and Ajax.",
        "Worked on system models, database updates, data validation, testing, documentation, and Git-based team collaboration.",
        "Supported the live QR verification system during a three-day rice subsidy distribution across 18 barangays, helping validate eligible beneficiaries before approximately 25,000 sacks of rice were released.",
        "Provided on-site support for QR scanners, beneficiary verification, Windows workstations, XAMPP, LAN connectivity, Ethernet cabling, IP configuration, and basic hardware and software troubleshooting.",
      ],
    },
  ],
  projects: [
    {
      title: "PlanterAid \u2013 Web-Based Soil Monitoring and Recommendation System",
      dates: "Aug 2025 \u2013 Jul 2026",
      role: "Capstone Project",
      softwareUsed:
        "C#, Blazor .NET Core 8.0, SQL Server, SQL Server Management Studio, HTML, CSS, JavaScript, Arduino IDE, and ESP32/Lolin32",
      description:
        "Developed an IoT-enabled web system for monitoring soil moisture, temperature, humidity, and location data, with recommendations and alert notifications for field decision support.",
    },
    {
      title: "E-Commerce Ticketing System",
      dates: "Mar 2024 \u2013 May 2024",
      role: "Web Developer",
      softwareUsed: "ASP.NET (C#) and Microsoft Access (MDB)",
      description:
        "Developed a movie ticketing system with ticket booking and movie distributor management features.",
    },
  ],
  education: [
    {
      school: "Map\u00faa Malayan Colleges Laguna",
      location: "Cabuyao City, Laguna",
      program: "Bachelor of Science in Information Technology",
      graduation: "Expected 2026",
      academicAchievements:
        "Dean\u2019s Lister \u2013 1st Year, Terms 1\u20133 (AY 2021\u20132022); 3rd Year, Term 3 (AY 2023\u20132024); and 4th Year, Term 2 (AY 2024\u20132025).",
      relevantCoursework: [
        "Web Systems and Technologies",
        "Information Management",
        "System Analysis and Design",
        "Information Assurance and Security",
        "Systems Administration and Maintenance",
        "CCNA Routing and Switching 1",
      ],
    },
  ],
  technicalSkills: [
    {
      category: "Programming & Web",
      skills: [
        "Python",
        "C#",
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "ASP.NET",
        "Blazor .NET Core 8.0",
        "CodeIgniter 4",
        "Bootstrap",
        "jQuery",
        "Ajax",
      ],
    },
    {
      category: "Databases",
      skills: ["SQL Server", "MySQL", "Microsoft Access"],
    },
    {
      category: "Tools",
      skills: [
        "SQL Server Management Studio",
        "phpMyAdmin",
        "XAMPP",
        "Visual Studio Code",
        "Git/GitHub",
        "Microsoft Office",
      ],
    },
    {
      category: "IT Support & Networking",
      skills: [
        "Windows setup",
        "Hardware and software troubleshooting",
        "LAN connectivity",
        "Ethernet cabling",
        "IP address configuration",
        "Scanner support",
        "Internet connectivity support",
      ],
    },
  ],
  certifications: [
    {
      title: "Cisco Networking Academy \u2013 Introduction to Networks",
      date: "Nov 15, 2022",
    },
    {
      title: "Introduction to Cloud Computing",
      date: "Aug 24, 2024",
    },
    {
      title: "Introduction to Edge Computing",
      date: "Aug 31, 2024",
    },
    {
      title: "Generative AI for Beginners",
      date: "Nov 2024",
    },
    {
      title: "WearOS: Emerging Technology for Internet and Learning of Everything",
      date: "Nov 23, 2024",
    },
    {
      title: "AI Summit: Unlocking the Future",
      date: "Jun 6, 2024",
    },
    {
      title: "Career Readiness Toolkit",
      date: "Apr 21, 2026",
    },
  ],
  organizations: [
    {
      name: "InfoTech Society (ITSOC)",
      school: "Map\u00faa Malayan Colleges Laguna",
      role: "Member",
    },
    {
      name: "Junior Information System Security Association (JISSA)",
      school: "Map\u00faa Malayan Colleges Laguna",
      role: "Member",
    },
  ],
};
