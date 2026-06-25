import "../Css/Education.css";
import { useEffect, useRef } from "react";

const timeline = [
  {
    id: 1,
    year: "2018",
    title: "National Senior Certificate",
    place: "Matric",
    description: [
      "Completed my secondary education.",
      "Laid the foundation for my IT journey.",
    ],
    type: "education",
  },
  {
    id: 2,
    year: "2023 – 2024",
    title: "Software Development Learnership",
    place: "DynamicDNA",
    description: [
      "Completed a software development learnership covering networking fundamentals and C# programming.",
      "Gained hands-on experience with core IT concepts and real-world development workflows.",
      "Worked alongside experienced developers on practical projects.",
    ],
    type: "experience",
  },
  {
    id: 3,
    year: "2024 – Present",
    title: "NQF Level 6 — Diploma in IT Software Development",
    place: "Belgium Campus iTversity",
    description: [
      "Achieved 13 distinctions at NQF Level 4.",
      "Studying full-stack development, databases, networking, AI, and cloud.",
      "Built real projects including BC CourseFinder, deployed live on Azure.",
      "Pursuing cum laude while running two programmes simultaneously.",
    ],
    type: "education",
  },
  {
    id: 4,
    year: "2026 – Present",
    title: "AI Software Development Learnership",
    place: "Synergy",
    description: [
      "Enrolled in an AI Software Development Learnership at NQF Level 5.",
      "Running alongside my diploma — two programmes at the same time.",
      "Focused on AI tools, software development practices, and real-world application.",
    ],
    type: "experience",
  },
];

function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((el) => observer.observe(el));

    return () => {
      items?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="education" ref={sectionRef}>
      <div className="sec-heading reveal">
        <span className="sec-num">02.</span>
        <h2>Education & Experience</h2>
      </div>

      <p className="section-sub reveal">The path that got me here.</p>

      <div className="edu-tabs reveal">
        {timeline.map((item, i) => (
          <input
            key={item.id}
            type="radio"
            name="edu-toggle"
            id={`edu-${item.id}`}
            className="edu-radio"
            defaultChecked={i === 0}
          />
        ))}

        <div className="edu-tab-labels">
          {timeline.map((item) => (
            <label
              key={item.id}
              htmlFor={`edu-${item.id}`}
              className={`edu-tab ${item.type}`}
            >
              <span className="tab-place">{item.place}</span>
              <span className="tab-year">{item.year}</span>
            </label>
          ))}
        </div>

        <div className="edu-card-wrap reveal">
          {timeline.map((item) => (
            <div key={item.id} className="edu-card" id={`card-${item.id}`}>
              <div className="edu-card-top">
                <div>
                  <h3 className="edu-role">
                    {item.title}
                    <span className="edu-at"> @ {item.place}</span>
                  </h3>
                  <p className="edu-period">{item.year}</p>
                </div>
                <span className={`edu-tag ${item.type}`}>
                  {item.type === "education" ? "🎓 Education" : "💼 Experience"}
                </span>
              </div>

              <ul className="edu-list">
                {item.description.map((point, i) => (
                  <li key={i}>
                    <span className="edu-arrow">▶</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
