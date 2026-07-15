export type PracticumItem = {
  name: string;
  purpose: string;
};

export type PracticumScreenshot = {
  number: number;
  title: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  relatedWork?: string;
};

export const practicum = {
  host: "City Government of Biñan",
  project: "Biñan Access Card Management Information System",
  role: "Web Systems Developer and IT Support Intern",
  period: "April 2026 - July 2026",
  overview: [
    "I completed my practicum with the City Government of Biñan in a government-office environment as a Web Systems Developer and IT Support Intern. My assigned project was the Biñan Access Card Management Information System, a web-based application for organizing resident and household information and supporting public-service administration.",
    "The engagement involved model and database review, system-module checking, data validation, documentation, local testing, troubleshooting, basic networking, workstation support, and Git-based team collaboration. My main development assignment focused on model functions and database-related work.",
  ],
  natureOfTasks: [
    "My primary project was the Biñan Access Card Management Information System, a web-based application intended to organize resident and household information and support the management of sectors, categories, services, programs, aid types, QR cards, distribution activities, user accounts, permissions, reports, and system records.",
    "My development responsibilities focused mainly on the model and database-related parts of the system. I reviewed table structures and relationships, checked how records were created, retrieved, updated, and archived, and validated the flow of information between the database, model functions, controllers, and system pages. I reviewed the handling of heads of families and household members, sector and category classifications, services and programs, user accounts, roles, and audit trails.",
    "I also helped update database descriptions and information, tested whether changes appeared correctly in related modules, and documented the purpose and results of revisions. SQL database versions and Git branches were used so updates could be reviewed and shared with the team before approval and integration into the main branch.",
    "The practicum included testing and troubleshooting the local development environment. I checked XAMPP, Apache, MySQL, phpMyAdmin, CodeIgniter environment settings, routes, database connections, project directories, and localhost access. When necessary, I also assisted with workstation preparation, software configuration, and basic network-connectivity checking.",
  ],
  software: [
    {
      name: "Visual Studio Code",
      purpose: "Reviewing and editing PHP, model, configuration, and technical-documentation files.",
    },
    {
      name: "XAMPP",
      purpose: "Providing the local Apache and MySQL environment used to run and test the application.",
    },
    {
      name: "PHP and CodeIgniter 4",
      purpose: "Implementing server-side logic and the Model-View-Controller structure.",
    },
    {
      name: "MySQL and phpMyAdmin",
      purpose: "Reviewing tables, relationships, records, descriptions, and SQL database updates.",
    },
    {
      name: "HTML, CSS, and Bootstrap",
      purpose: "Structuring forms, tables, modals, layouts, and the responsive interface.",
    },
    {
      name: "JavaScript, jQuery, and Ajax",
      purpose: "Supporting interactive controls and asynchronous page operations.",
    },
    {
      name: "Git and GitHub",
      purpose: "Managing version control, branch-based collaboration, and approved updates.",
    },
    {
      name: "Windows and web browsers",
      purpose: "Running the local development environment, checking interfaces, and performing functional tests.",
    },
  ] satisfies PracticumItem[],
  hardwareIntroduction:
    "The Biñan Access Card Management Information System is web-based and did not require specialized external hardware during development. The work used standard development and office equipment.",
  hardware: [
    {
      name: "Personal laptop",
      purpose: "Coding, database review, documentation, Git operations, and local system testing.",
    },
    {
      name: "Office desktop computers",
      purpose: "Workplace application checking and workstation setup support.",
    },
    {
      name: "Keyboard, mouse, and monitor",
      purpose: "Development, data entry, and interface checking.",
    },
    {
      name: "Basic network equipment and Ethernet cables",
      purpose: "LAN connectivity checks and workstation-support tasks when applicable.",
    },
  ] satisfies PracticumItem[],
  outputs: [
    {
      name: "Database and Model Review",
      purpose:
        "Reviewed database structures and model functions connected to resident and household records, categories, sectors, services and programs, users, roles, and audit trails. The review covered table relationships, validation, data retrieval, record updates, and archive or soft-delete behavior.",
    },
    {
      name: "Reference-Data Updates",
      purpose:
        "Reviewed and updated descriptions and information stored in category, sector, service, and program records, then checked whether revised data was returned by model functions and displayed correctly in management pages.",
    },
    {
      name: "Access, Logging, and System Checking",
      purpose:
        "Reviewed account roles and access restrictions, checked the audit-trail structure, performed local functional and database testing, and documented database revisions, troubleshooting results, and Git branch updates.",
    },
  ] satisfies PracticumItem[],
  scopeIntroduction:
    "The Biñan Access Card Management Information System is a web-based resident-information and public-service management application developed for the City Government of Biñan. It supports the following functional areas:",
  scope: [
    "Secure login and role-based access for authorized users",
    "Dashboard summaries and recent-record presentation",
    "Family, head-of-family, and household-member record management",
    "Searching, filtering, creation, and Excel import of records",
    "Sector, category, service and program, and aid-type management",
    "Printable QR-card generation by barangay or sector",
    "Aid-distribution batches and distribution records",
    "Coverage, recipient, waiting-family, kiosk, and barangay reports",
    "User accounts, roles, status, profiles, password changes, and audit trails",
  ],
  discussion: [
    "The Biñan Access Card Management Information System showed me that the reliability of an information system depends on more than the appearance of its pages. Database structures, model functions, validation rules, access restrictions, reports, audit records, and the user interface must work together so information remains accurate, secure, and available only to authorized users.",
    "Working on model and database components improved my understanding of how information moves from forms to controllers, models, database tables, and back to the interface. Reviewing categories, sectors, services, programs, users, and resident records emphasized the importance of clear field definitions, correct table relationships, and consistent descriptions.",
    "Search and filter controls help authorized users locate information, while the family-record form and Excel import feature support individual and bulk entry. Reference-data modules keep sectors, categories, services, programs, and aid types consistent across the application.",
    "The QR-card, distribution, and reporting modules connect resident records to assistance activities. Account Management and Audit Trails support controlled access and accountability by recording important system events.",
    "Local-development issues involving XAMPP, MySQL, routes, environment settings, project directories, or Git branches required patience and systematic checking. Recording changes and working through an assigned branch helped make team coordination more organized.",
  ],
  synthesis: [
    "The practicum connected system development with database management, testing, technical documentation, version control, communication, and user support. It reinforced the importance of validating model functions and user roles after database revisions and of keeping audit information and reference data consistent.",
    "Team coordination through Git, documented SQL updates, and clear troubleshooting notes helped make changes reviewable. The engagement also showed why interface behavior and database results must be checked together rather than treated as separate concerns.",
  ],
  conclusion: [
    "I realized that an IT practicum requires patience, adaptability, professional responsibility, and careful communication. System development involves analysis, data management, testing, troubleshooting, documentation, version control, and user support in addition to programming.",
    "The experience improved my confidence in model and database review, local-environment troubleshooting, documentation, basic networking, and collaboration in a government-office setting. It prepared me for entry-level work in IT support, quality assurance, database and system management, technical documentation, and web applications.",
  ],
};

export const practicumScreenshots: PracticumScreenshot[] = [
  {
    number: 1,
    title: "Login and Authentication",
    src: "/assets/images/practicum/01-login-authentication.png",
    alt: "Biñan Access Card Portal login page with username and password fields",
    caption:
      "The portal authenticates registered users before granting access and presents the official city branding.",
    width: 1913,
    height: 962,
  },
  {
    number: 2,
    title: "Administrator Dashboard",
    src: "/assets/images/practicum/02-dashboard.png",
    alt: "Biñan Access Card administrator dashboard with summary counts and recent records",
    caption:
      "The dashboard summarizes records, registered members, active sectors, services and programs, and recent activity.",
    width: 1917,
    height: 971,
  },
  {
    number: 3,
    title: "Manage Records",
    src: "/assets/images/practicum/03-manage-records.png",
    alt: "Manage Records page listing family records and record actions",
    caption:
      "The module lists family records and provides searching, filtering, creation, import, entry-count, and row-level controls.",
    width: 1917,
    height: 972,
    relatedWork:
      "My related work included reviewing model and database flow, record validation, retrieval, updating, and archive behavior.",
  },
  {
    number: 4,
    title: "Record Filters",
    src: "/assets/images/practicum/04-record-filters.png",
    alt: "Record filter panel for sector, barangay, and status",
    caption:
      "The filter panel narrows family records by sector, barangay, and status and includes a search field for filter choices.",
    width: 718,
    height: 496,
  },
  {
    number: 5,
    title: "New Family Record",
    src: "/assets/images/practicum/05-new-family-record.png",
    alt: "New Family Record form for personal, address, sector, service, and household information",
    caption:
      "The form gathers head-of-family details, address, sector, eligible services and programs, QR number, and household members.",
    width: 1918,
    height: 965,
    relatedWork:
      "I checked how head-of-family and member data moved through validation, model functions, and related database tables.",
  },
  {
    number: 6,
    title: "Excel Import",
    src: "/assets/images/practicum/06-excel-import.png",
    alt: "Excel Import dialog with template and family-number instructions",
    caption:
      "The import feature supports bulk record entry using a template that links household members through a common family number.",
    width: 696,
    height: 365,
  },
  {
    number: 7,
    title: "Sector Management",
    src: "/assets/images/practicum/07-sector-management.png",
    alt: "Sector Management table with names, codes, descriptions, status, and actions",
    caption:
      "Sector Management maintains classification names, short codes, descriptions, statuses, and record actions.",
    width: 1918,
    height: 966,
    relatedWork:
      "I reviewed sector reference data and checked that revised descriptions were returned and displayed correctly.",
  },
  {
    number: 8,
    title: "Services and Programs Management",
    src: "/assets/images/practicum/08-services-programs.png",
    alt: "Services and Programs Management table with codes, categories, descriptions, and status",
    caption:
      "The module maintains the services and programs available to qualified residents, including their codes, categories, descriptions, and statuses.",
    width: 1917,
    height: 965,
    relatedWork:
      "I reviewed service and program descriptions and checked related model and database output.",
  },
  {
    number: 9,
    title: "Manage Categories",
    src: "/assets/images/practicum/09-manage-categories.png",
    alt: "Manage Categories table with category names, codes, descriptions, and actions",
    caption:
      "The category module maintains the names, codes, and descriptions used to group services and programs.",
    width: 1918,
    height: 965,
    relatedWork:
      "I worked with category reference records, descriptions, validation, and model-related checking.",
  },
  {
    number: 10,
    title: "Aid Types",
    src: "/assets/images/practicum/10-aid-types.png",
    alt: "Aid Types page listing financial, grocery, rice, and other assistance records",
    caption:
      "The Aid Types page maintains forms of assistance that can be recorded during distribution activities.",
    width: 1918,
    height: 971,
  },
  {
    number: 11,
    title: "QR Card Generation",
    src: "/assets/images/practicum/11-qr-card-generation.png",
    alt: "QR card generation page with barangay and sector filters",
    caption:
      "The Cards page generates printable QR cards for registered heads of family and supports barangay and sector filtering.",
    width: 1918,
    height: 963,
  },
  {
    number: 12,
    title: "Distribution Batches",
    src: "/assets/images/practicum/12-distribution-batches.png",
    alt: "Distribution Batches page showing batch status and actions",
    caption:
      "Distribution Batches organizes aid-release activities and indicates whether each batch is active or closed.",
    width: 1918,
    height: 967,
  },
  {
    number: 13,
    title: "Distribution Records",
    src: "/assets/images/practicum/13-distribution-records.png",
    alt: "Distribution records table with date, QR number, claimant, aid type, and account",
    caption:
      "The distributions page records the date, QR number, family head, claimant, aid type, scanning account, and actions.",
    width: 1918,
    height: 970,
  },
  {
    number: 14,
    title: "Reports",
    src: "/assets/images/practicum/14-reports.png",
    alt: "Reports page showing QR coverage, recipients, waiting families, and barangay statistics",
    caption:
      "Reports summarize QR coverage, aid recipients, waiting families, kiosk performance, and barangay-level coverage.",
    width: 1918,
    height: 962,
  },
  {
    number: 15,
    title: "Account Management",
    src: "/assets/images/practicum/15-account-management.png",
    alt: "Account Management page listing usernames, roles, status, and account actions",
    caption:
      "Account Management lists usernames, assigned roles, account statuses, and controls for searching, filtering, and account creation.",
    width: 1918,
    height: 973,
    relatedWork:
      "I reviewed account roles and access restrictions as part of system and database checking.",
  },
  {
    number: 16,
    title: "Audit Trails",
    src: "/assets/images/practicum/16-audit-trails.png",
    alt: "Audit Trails table showing login events, user actions, browser details, and timestamps",
    caption:
      "Audit Trails records system events, user actions, descriptions, browser information, and corresponding dates and times.",
    width: 1917,
    height: 963,
    relatedWork:
      "I checked the audit-trail structure used to support accountability and troubleshooting.",
  },
  {
    number: 17,
    title: "My Account and Password Management",
    src: "/assets/images/practicum/17-my-account.png",
    alt: "My Account dialog showing profile fields and password-change controls",
    caption:
      "The dialog lets an authenticated user review profile information and update credentials after entering the current password.",
    width: 1918,
    height: 971,
  },
];
