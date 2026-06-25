import "../Css/About.css";
import myPhoto from "../Images/Tebatso.jpg";
import { useEffect, useRef } from "react";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "C# / .NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Software Testing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  },
  {
    name: "Agile / Scrum",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "Project Management",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "RESTful APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Web Servers",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
];

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = sectionRef.current?.querySelectorAll(".fade-item");
          if (entry.isIntersecting) {
            elements?.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          } else {
            elements?.forEach((el) => el.classList.remove("visible"));
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-wrap fade-item">
        <div className="about-text">
          <div className="sec-heading">
            <span className="sec-num">01.</span>
            <h2>About Me</h2>
          </div>

          <p>
            I'm <span className="hl-pink">Tebatso</span> — an IT student and
            builder based in{" "}
            <span className="hl-purple">Johannesburg, South Africa</span>.
          </p>
          <p>
            I've always been someone who{" "}
            <span className="hl-pink">works on themselves</span>. Long before I
            had results to show, I was putting in the effort — studying harder,
            building outside of class, and picking up skills that weren't on the
            syllabus. That habit of continuous growth is simply part of my DNA.
          </p>
          <p>
            It's what led me to pursue{" "}
            <span className="hl-purple">two programmes at the same time</span> —
            my NQF Level 6 Diploma at Belgiumcampus ITversity and an AI Software
            Development Learnership at Synergy. Not because I had to. Because{" "}
            <span className="hl-pink">
              standing still has never felt like an option
            </span>
            .
          </p>
          <p>
            I'm exploring software development, QA testing, cloud, and AI. I
            believe the people who grow fastest are those who stay{" "}
            <span className="hl-purple">curious across disciplines</span> before
            they specialise.
          </p>

          <a href="/resume.pdf" download className="resume-btn">
            Download Resume ↓
          </a>
        </div>

        <div className="photo-side">
          <div className="photo-wrap">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="photo-box">
              <img src={myPhoto} alt="Tebatso" />
              <div className="photo-shine" />
            </div>
            <div className="badge badge-top">
              <span className="dot dot-pink"></span> Builder
            </div>
            <div className="badge badge-left">
              <span className="dot dot-purple"></span> Learner
            </div>
            <div className="badge badge-bottom">
              <span className="dot dot-blue"></span> Cloud
            </div>
          </div>
        </div>
      </div>

      <div className="skills-wrap fade-item">
        <div className="skills-top">
          <h3 className="skills-title">Tech I Work With</h3>
          <p className="skills-sub">
            Picked up through real projects, coursework, and self-study.
          </p>
        </div>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-chip"
              style={{ "--delay": `${i * 0.12}s` }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                width="20"
                height="20"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
