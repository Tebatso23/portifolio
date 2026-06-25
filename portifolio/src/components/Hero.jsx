import { useEffect, useRef, useState } from "react";
import "../Css/Hero.css";

function Hero() {
  const sectionRef = useRef(null);
  const [displayed, setDisplayed] = useState("");
  const fullText = "I build. I learn. I grow.";

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayed(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 80);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          const elements = sectionRef.current?.querySelectorAll(".fade-item");
          if (entry.isIntersecting) {
            elements?.forEach(function (el, i) {
              setTimeout(function () {
                el.classList.add("visible");
              }, i * 120);
            });
          } else {
            elements?.forEach(function (el) {
              el.classList.remove("visible");
            });
          }
        });
      },
      { threshold: 0.15 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return function () {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-left">
        <span className="hero-overline fade-item">
          <span className="overline-line"></span>
          Hi, my name is
        </span>

        <h1 className="hero-name fade-item">
          Tebatso Moholoa<span className="hero-dot">.</span>
        </h1>

        <h2 className="hero-tagline fade-item">
          {displayed}
          <span className="cursor-blink">|</span>
        </h2>

        <p className="hero-bio fade-item">
          A final-year IT student who never stopped at good enough. I'm always
          pushing further — two programmes at once, projects outside of class,
          and new skills picked up by choice, not requirement.
        </p>

        <div className="hero-actions fade-item">
          <a href="#projects" className="btn-primary">
            View My Projects
          </a>
          <a href="#contact" className="btn-outline">
            Hire Me
          </a>
        </div>
      </div>

      <div className="hero-right fade-item">
        <div className="hero-illustration">
          <svg className="illustration-svg" viewBox="0 0 500 500">
            <circle
              cx="250"
              cy="250"
              r="200"
              fill="rgba(155,114,207,0.04)"
              stroke="rgba(155,114,207,0.15)"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="250"
              r="150"
              fill="rgba(232,121,160,0.03)"
              stroke="rgba(155,114,207,0.2)"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="250"
              r="100"
              fill="rgba(155,114,207,0.05)"
              stroke="rgba(232,121,160,0.15)"
              strokeWidth="1"
            />
            <circle
              cx="250"
              cy="250"
              r="180"
              fill="none"
              stroke="rgba(155,114,207,0.35)"
              strokeWidth="1.5"
              strokeDasharray="10 6"
              className="ring-rotate"
            />
            <circle
              cx="250"
              cy="250"
              r="130"
              fill="none"
              stroke="rgba(232,121,160,0.3)"
              strokeWidth="1.5"
              strokeDasharray="5 8"
              className="ring-rotate-reverse"
            />
            <polygon
              points="250,150 335,198 335,294 250,342 165,294 165,198"
              fill="rgba(155,114,207,0.08)"
              stroke="rgba(155,114,207,0.45)"
              strokeWidth="2"
              className="hex-pulse"
            />
            <polygon
              points="250,192 308,224 308,288 250,320 192,288 192,224"
              fill="rgba(232,121,160,0.06)"
              stroke="rgba(232,121,160,0.35)"
              strokeWidth="1.5"
            />
            <line
              x1="250"
              y1="250"
              x2="250"
              y2="70"
              stroke="rgba(155,114,207,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="250"
              y1="250"
              x2="430"
              y2="180"
              stroke="rgba(155,114,207,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="250"
              y1="250"
              x2="430"
              y2="320"
              stroke="rgba(232,121,160,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="250"
              y1="250"
              x2="250"
              y2="430"
              stroke="rgba(155,114,207,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="250"
              y1="250"
              x2="70"
              y2="320"
              stroke="rgba(232,121,160,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="250"
              y1="250"
              x2="70"
              y2="180"
              stroke="rgba(155,114,207,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle
              cx="250"
              cy="70"
              r="7"
              fill="rgba(155,114,207,1)"
              stroke="white"
              strokeWidth="2"
              className="dot-pulse"
            />
            <circle
              cx="430"
              cy="180"
              r="6"
              fill="rgba(232,121,160,1)"
              stroke="white"
              strokeWidth="2"
              className="dot-pulse-delay"
            />
            <circle
              cx="430"
              cy="320"
              r="5"
              fill="rgba(155,114,207,1)"
              stroke="white"
              strokeWidth="2"
              className="dot-pulse"
            />
            <circle
              cx="250"
              cy="430"
              r="7"
              fill="rgba(232,121,160,1)"
              stroke="white"
              strokeWidth="2"
              className="dot-pulse-delay"
            />
            <circle
              cx="70"
              cy="320"
              r="6"
              fill="rgba(155,114,207,1)"
              stroke="white"
              strokeWidth="2"
              className="dot-pulse"
            />
            <circle
              cx="70"
              cy="180"
              r="5"
              fill="rgba(232,121,160,1)"
              stroke="white"
              strokeWidth="2"
              className="dot-pulse-delay"
            />
            <polygon
              points="250,214 278,230 278,262 250,278 222,262 222,230"
              fill="rgba(155,114,207,0.2)"
              stroke="rgba(155,114,207,0.8)"
              strokeWidth="2.5"
            />
            <text
              x="250"
              y="262"
              textAnchor="middle"
              fill="rgba(155,114,207,1)"
              fontSize="30"
              fontWeight="800"
              fontFamily="DM Sans, sans-serif"
            >
              T
            </text>
            <polygon
              points="390,75 408,105 372,105"
              fill="rgba(155,114,207,0.3)"
              stroke="rgba(155,114,207,0.7)"
              strokeWidth="1.5"
              className="tri-float"
            />
            <polygon
              points="110,375 128,405 92,405"
              fill="rgba(232,121,160,0.3)"
              stroke="rgba(232,121,160,0.7)"
              strokeWidth="1.5"
              className="tri-float-delay"
            />
            <polygon
              points="410,355 425,378 395,378"
              fill="rgba(155,114,207,0.25)"
              stroke="rgba(155,114,207,0.6)"
              strokeWidth="1.5"
              className="tri-float"
            />
            <polygon
              points="90,115 105,138 75,138"
              fill="rgba(232,121,160,0.25)"
              stroke="rgba(232,121,160,0.6)"
              strokeWidth="1.5"
              className="tri-float-delay"
            />
            <rect
              x="305"
              y="92"
              width="90"
              height="26"
              rx="13"
              fill="rgba(155,114,207,0.15)"
              stroke="rgba(155,114,207,0.6)"
              strokeWidth="1.5"
            />
            <text
              x="350"
              y="110"
              textAnchor="middle"
              fill="rgba(155,114,207,1)"
              fontSize="11"
              fontWeight="600"
              fontFamily="Fira Code"
            >
              React.js
            </text>
            <rect
              x="96"
              y="255"
              width="78"
              height="26"
              rx="13"
              fill="rgba(232,121,160,0.15)"
              stroke="rgba(232,121,160,0.6)"
              strokeWidth="1.5"
            />
            <text
              x="135"
              y="273"
              textAnchor="middle"
              fill="rgba(232,121,160,1)"
              fontSize="11"
              fontWeight="600"
              fontFamily="Fira Code"
            >
              C# .NET
            </text>
            <rect
              x="318"
              y="362"
              width="68"
              height="26"
              rx="13"
              fill="rgba(155,114,207,0.15)"
              stroke="rgba(155,114,207,0.6)"
              strokeWidth="1.5"
            />
            <text
              x="352"
              y="380"
              textAnchor="middle"
              fill="rgba(155,114,207,1)"
              fontSize="11"
              fontWeight="600"
              fontFamily="Fira Code"
            >
              AWS
            </text>
            <rect
              x="102"
              y="130"
              width="68"
              height="26"
              rx="13"
              fill="rgba(232,121,160,0.15)"
              stroke="rgba(232,121,160,0.6)"
              strokeWidth="1.5"
            />
            <text
              x="136"
              y="148"
              textAnchor="middle"
              fill="rgba(232,121,160,1)"
              fontSize="11"
              fontWeight="600"
              fontFamily="Fira Code"
            >
              Figma
            </text>
            <rect
              x="180"
              y="42"
              width="68"
              height="26"
              rx="13"
              fill="rgba(155,114,207,0.15)"
              stroke="rgba(155,114,207,0.6)"
              strokeWidth="1.5"
            />
            <text
              x="214"
              y="60"
              textAnchor="middle"
              fill="rgba(155,114,207,1)"
              fontSize="11"
              fontWeight="600"
              fontFamily="Fira Code"
            >
              SQL
            </text>
            <rect
              x="320"
              y="208"
              width="80"
              height="26"
              rx="13"
              fill="rgba(232,121,160,0.15)"
              stroke="rgba(232,121,160,0.6)"
              strokeWidth="1.5"
            />
            <text
              x="360"
              y="226"
              textAnchor="middle"
              fill="rgba(232,121,160,1)"
              fontSize="11"
              fontWeight="600"
              fontFamily="Fira Code"
            >
              DevOps
            </text>
          </svg>
        </div>
      </div>

      <div
        className="scroll-arrow"
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <span>scroll</span>
        <div className="scroll-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
