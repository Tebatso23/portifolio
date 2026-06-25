import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import "../Css/SideSocial.css";

function SideSocial() {
  return (
    <div className="SideSocial-links">
      <ul>
        <li>
          <a
            href="https://github.com/Tebatso23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} color="#b388ff" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tebatso-moholoa-50b869235"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} color="#b388ff" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/makoma_tebatso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={25} color="#b388ff" />
          </a>
        </li>
        <li>
          <a href="/resume.pdf" download>
            <FaDownload size={25} color="#b388ff" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideSocial;
