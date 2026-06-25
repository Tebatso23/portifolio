import Logo from "./Logo";
import "../Css/Navigation.css";
import { useState, useEffect } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "Home", href: "#home", section: "home" },
    { id: 2, link: "About", href: "#about", section: "about" },
    { id: 3, link: "Education", href: "#education", section: "education" },
    { id: 4, link: "Projects", href: "#projects", section: "projects" },
    { id: 5, link: "Contact", href: "#contact", section: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header>
      <div className={`container ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Logo />
        </div>

        {/* desktop nav */}
        <nav>
          <ul>
            {links.map((nav) => (
              <li key={nav.id}>
                <a href={nav.href}>
                  <span className="numberColor">{nav.id}.</span>
                  {nav.link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* desktop actions */}
        <div className="nav-actions">
          <p>
            <a href="/resume.pdf" download>
              Resume
            </a>
          </p>
          <p>
            <a href="#contact">Hire Me</a>
          </p>
        </div>

        {/* hamburger button */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {links.map((nav) => (
            <li key={nav.id}>
              <a href={nav.href} onClick={closeMenu}>
                <span className="numberColor">{nav.id}.</span>
                {nav.link}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-actions">
          <a href="/resume.pdf" download onClick={closeMenu}>
            Resume
          </a>
          <a href="#contact" onClick={closeMenu} className="hire-btn">
            Hire Me
          </a>
        </div>
      </div>

      {/* overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu} />}
    </header>
  );
}

export default Navigation;
