const featured = [
  {
    id: 1,
    title: "AI Course Finder",
    label: "Featured Project",
    image: "/images/BcCourse.jpeg",
    description:
      "A team project built as part of my school curriculum. A web app that fetches and recommends AI courses using a C# backend API, deployed live on Microsoft Azure. My first experience with full-stack development and cloud deployment.",
    tech: ["HTML", "CSS", "JavaScript", "C#", "REST API", "Azure"],
    github: "https://github.com/Tebatso23/bccoursefinderForMatricStudents.git",
    live: "https://bccoursefinder.azurewebsites.net/",
    align: "left",
  },
  {
    id: 2,
    title: "Gadget Catalog",
    label: "Featured Project",
    image: "/images/gadget.jpeg",
    description:
      "A feature-rich single-page application with search, bookmarking, comparison, and spec-printing — all without page reloads. Built to solve a real problem of browsing and comparing tech specs efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/Tebatso23/gadget-catalog.git",
    live: "https://sprightly-entremet-f6c320.netlify.app/",
    align: "right",
  },
  {
    id: 3,
    title: "Rock Paper Scissors",
    label: "Featured Project",
    image: "/images/rockpaper.jpeg",
    description:
      "An interactive Rock Paper Scissors game with score tracking, animations, and a clean minimal interface. Built to practice DOM manipulation and game logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tebatso23/Rock-Paper-Scissor-Game.git",
    live: "https://tebatso23.github.io/Rock-Paper-Scissor-Game/",
    align: "left",
  },
  {
    id: 4,
    title: "Portfolio Site",
    label: "Featured Project",
    image: "/images/portfolio.jpeg",
    description:
      "My personal developer portfolio showcasing my projects, skills, and journey. Designed and built from scratch with React, animations, and a custom design system.",
    tech: ["React.js", "CSS3", "Figma"],
    github: "#",
    live: "#",
    align: "right",
  },
];

const noteworthy = [
  {
    id: 1,
    title: "Database Design Project",
    description:
      "Designed an ERD for a hospital management system with Doctor, Patient, Department and Consultation entities. Applied normalisation from 0NF to 3NF on a car rental dataset.",
    tech: ["SQL", "ERD", "Normalisation", "MS Access"],
    github: "/database-design.pdf",
  },
  {
    id: 3,
    title: "Solar Car Project",
    description:
      "Designed and 3D printed a solar-powered vehicle as a team of 9. Used CAD tools like Tinkercad and Fusion 360, iterated through multiple print failures, and successfully assembled a working car.",
    tech: ["Tinkercad", "Fusion 360", "3D Printing", "CAD", "Teamwork"],
    github: "/solarCar.pptx",
  },
];

export { featured, noteworthy };
