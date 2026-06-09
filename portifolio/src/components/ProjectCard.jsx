import "../Css/Projects.css";
import { useEffect, useRef } from "react";
import BccourseFinder from "../Images/BcCourse.jpeg";
import Gadget from "../Images/gadget.jpeg";
import rockPaper from "../Images/rockpaper.jpeg";
import portfolio from "../Images/portfolio.jpeg";

const featured = [
  {
    id: 1,
    title: "AI Course Finder",
    label: "Featured Project",
    image: BccourseFinder,
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
    image: Gadget,
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
    image: rockPaper,
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
    image: portfolio,
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
      "Designed an ERD for a hospital management system with Doctor, Patient, Department and Consultation entities. Applied normalisation from 0NF to 3NF on a car rental dataset — identifying anomalies, functional dependencies, and resolving partial and transitive dependencies.",
    tech: ["SQL", "ERD", "Normalisation", "MS Access"],
    github: "/database-design.pdf",
  },
  {
    id: 2,
    title: "Network Development Project",
    description:
      "Designed and documented a small network infrastructure for a business scenario covering IP addressing, subnetting, routing, and security.",
    tech: ["Networking", "Subnetting", "Routing", "Security"],
    github: "#",
  },
  {
    id: 3,
    title: "Solar Car Project",
    description:
      "A team project involving the design and planning of a solar-powered vehicle. Covers energy systems, sustainability, and engineering fundamentals.",
    tech: ["Engineering", "Solar Energy", "Teamwork"],
    github: "#",
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = sectionRef.current?.querySelectorAll(".fade-item");
          if (entry.isIntersecting) {
            elements?.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          } else {
            elements?.forEach((el) => el.classList.remove("visible"));
          }
        });
      },
      { threshold: 0.05 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="sec-heading fade-item">
        <span className="sec-num">02.</span>
        <h2>Projects</h2>
      </div>
      <p className="section-sub fade-item">
        Things I've built, broken, and learned from.
      </p>

      <div className="featured-list">
        {featured.map((p) => (
          <div
            key={p.id}
            className={`featured-row fade-item ${p.align === "right" ? "reverse" : ""}`}
          >
            <div className="featured-image">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="featured-content">
              <span className="featured-label">{p.label}</span>
              <h3 className="featured-title">{p.title}</h3>
              <div className="featured-desc-box">
                <p>{p.description}</p>
              </div>
              <ul className="featured-tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="featured-links">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    title="Live Site"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="20"
                      height="20"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="other-heading fade-item">
        <span className="sec-num">—</span>
        <h3>Other Noteworthy Projects</h3>
      </div>

      <div className="noteworthy-grid">
        {noteworthy.map((p) => (
          <div key={p.id} className="nw-card fade-item">
            <div className="nw-top">
              <div className="nw-folder">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="nw-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="18"
                    height="18"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
            <h3 className="nw-title">{p.title}</h3>
            <p className="nw-desc">{p.description}</p>
            <ul className="nw-tech">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
