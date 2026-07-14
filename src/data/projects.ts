export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type AcademicProject = {
  year: string;
  title: string;
  category: string;
  overview: string;
  purpose: string;
  features: string[];
  software: string[];
  learning: string;
  images: ProjectImage[];
};

export const academicProjects: AcademicProject[] = [
  {
    year: "First Year",
    title: "4 Pics 1 Word",
    category: "Machine Problem",
    overview:
      "A Python implementation of the word puzzle in which four image clues point to one answer.",
    purpose:
      "The project applied introductory programming concepts to a complete, interactive desktop game flow.",
    features: [
      "Four visual clues for each puzzle",
      "Answer input and validation",
      "Puzzle progression after a correct response",
      "Simple graphical game interface",
    ],
    software: ["Python"],
    learning:
      "The project strengthened my understanding of basic application logic, user input, answer checking, and game-state progression.",
    images: [
      {
        src: "/assets/machine problem/1st yr/4pics1word_1.png",
        alt: "4 Pics 1 Word game screen showing four image clues and an answer field",
        caption: "Puzzle interface with image clues and answer input",
      },
      {
        src: "/assets/machine problem/1st yr/4pics1word_2.png",
        alt: "Second 4 Pics 1 Word puzzle screen",
        caption: "Additional puzzle and game progression screen",
      },
    ],
  },
  {
    year: "Second Year",
    title: "Xamarin Android Ticketing Application",
    category: "Machine Problem",
    overview:
      "A mobile ticketing application created with Xamarin for an Android-oriented booking flow.",
    purpose:
      "The project explored mobile interface design and the sequence of actions required to select and purchase a ticket.",
    features: [
      "User login",
      "Ticket and schedule selection",
      "Ticket buying or booking flow",
      "Checkout summary",
    ],
    software: ["C#", "Xamarin", "Android development tools"],
    learning:
      "The application developed my understanding of mobile navigation, form handling, and multi-screen transaction flows.",
    images: [
      {
        src: "/assets/machine problem/2nd yr/login2nd.png",
        alt: "Xamarin ticketing application login screen",
        caption: "Login screen",
      },
      {
        src: "/assets/machine problem/2nd yr/selectticket2nd.png",
        alt: "Xamarin ticketing application ticket-selection screen",
        caption: "Ticket selection",
      },
      {
        src: "/assets/machine problem/2nd yr/buy2nd.png",
        alt: "Xamarin ticketing application booking screen",
        caption: "Ticket buying flow",
      },
      {
        src: "/assets/machine problem/2nd yr/checkout2nd.png",
        alt: "Xamarin ticketing application checkout screen",
        caption: "Checkout summary",
      },
    ],
  },
  {
    year: "Fourth Year",
    title: "E-Commerce Ticketing System",
    category: "Machine Problem | Web Development Project",
    overview:
      "A web-based movie ticketing system developed from March to May 2024 using ASP.NET and C# with an MS Access database.",
    purpose:
      "The project provided a web interface for presenting movies, processing ticket bookings, and managing movie-distributor information.",
    features: [
      "Now-showing movie presentation",
      "Movie and ticket selection",
      "Ticket booking workflow",
      "Generated ticket display",
      "Movie distributor management",
    ],
    software: ["C#", "ASP.NET", "MS Access"],
    learning:
      "The project expanded my experience with web application structure, database-backed records, and transaction-oriented interfaces.",
    images: [
      {
        src: "/assets/machine problem/4th yr/nowshowing webdev.png",
        alt: "E-Commerce Ticketing System now-showing page",
        caption: "Now-showing movie page",
      },
      {
        src: "/assets/machine problem/4th yr/webdev4thyr.png",
        alt: "E-Commerce Ticketing System booking interface",
        caption: "Movie ticket booking interface",
      },
      {
        src: "/assets/machine problem/4th yr/webticket.png",
        alt: "Generated movie ticket from the E-Commerce Ticketing System",
        caption: "Generated ticket output",
      },
    ],
  },
];
