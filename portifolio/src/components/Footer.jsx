import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "../Css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="24" height="24" viewBox="0 0 100 100">
              <polygon
                points="50 3,93 27,93 73,50 97,7 73,7 27"
                fill="none"
                stroke="#b388ff"
                strokeWidth="6"
              />
              <text
                x="50"
                y="62"
                textAnchor="middle"
                fill="#b388ff"
                fontSize="40"
                fontFamily="Fira Code"
              >
                T
              </text>
            </svg>
            <span>Tebatso</span>
          </div>
          <p className="footer-tagline">
            Final-year IT student and builder based in Johannesburg. Pursuing
            software dev, QA, cloud, DevOps, and AI simultaneously.
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/Tebatso23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/tebatso-moholoa-50b869235"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/makoma_tebatso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} />
            </a>
          </div>
          <div className="footer-status">
            <span className="footer-status-dot"></span>
            Open to Opportunities
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Currently</h4>
          <ul>
            <li>
              <a
                href="https://www.belgiumcampus.ac.za"
                target="_blank"
                rel="noopener noreferrer"
              >
                Belgiumcampus ITversity
              </a>
            </li>
            <li>
              <a href="#">Synergy AI Learnership</a>
            </li>
            <li>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:Makomatebatso375@gmail.com">
                Makomatebatso375@gmail.com
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/tebatso-moholoa-50b869235"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Tebatso23"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
          <p className="footer-location"> Johannesburg, South Africa</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Designed &amp; Built by <span>Tebatso</span> · 2026
        </p>
        <div className="footer-bottom-links">
          <a href="#home">Back to Top ↑</a>
          <a href="/resume.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
