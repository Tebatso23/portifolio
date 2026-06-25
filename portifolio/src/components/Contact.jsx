import "../Css/Contact.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      { threshold: 0.1 },
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email and message.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_uytz4xb",
        "template_zkjamik",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "XsOO0VIh1Pj_4WezR",
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong. Please email me directly.");
      });
  };

  return (
    <section id="contact" ref={sectionRef}>
      {/* ── HEADING ── */}
      <div className="sec-heading fade-item">
        <span className="sec-num">04.</span>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-wrap">
        {/* ── LEFT ── */}
        <div className="contact-left fade-item">
          <span className="contact-overline">What's Next?</span>
          <h3 className="contact-heading">Let's Talk</h3>
          <p className="contact-text">
            I'm currently looking for my first role in software development, QA
            testing, cloud, or AI. If you have an opportunity, a question, or
            just want to connect — send me a message. I respond to every genuine
            message.
          </p>

          <div className="contact-details">
            <div className="cd-item">
              <span className="cd-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <span className="cd-label">Location</span>
                <span className="cd-val">Johannesburg, South Africa</span>
              </div>
            </div>

            <div className="cd-item">
              <span className="cd-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div>
                <span className="cd-label">Email</span>
                <a
                  className="cd-val cd-link"
                  href="mailto:Makomatebatso375@gmail.com"
                >
                  Makomatebatso375@gmail.com
                </a>
              </div>
            </div>

            <div className="cd-item">
              <span className="cd-icon green-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div>
                <span className="cd-label">Status</span>
                <span className="cd-val cd-open">Open to Opportunities</span>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/Tebatso23"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tebatso-moholoa-50b869235"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* ── RIGHT — FORM ── */}
        <div className="contact-right fade-item">
          <div className="form-header">
            <span className="form-dot" />
            <span className="form-dot" />
            <span className="form-dot" />
            <span className="form-title">Send a Message</span>
          </div>

          <div className="form-body">
            <div className="cf-row">
              <div className="cf-field">
                <label className="cf-label">Your Name</label>
                <input
                  className="cf-input"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="cf-field">
                <label className="cf-label">Email Address</label>
                <input
                  className="cf-input"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="cf-field">
              <label className="cf-label">Subject</label>
              <input
                className="cf-input"
                name="subject"
                type="text"
                placeholder="Internship enquiry, project collaboration, etc."
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="cf-field">
              <label className="cf-label">Message</label>
              <textarea
                className="cf-input cf-textarea"
                name="message"
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {error && <p className="cf-error">{error}</p>}
            {sent && (
              <p className="cf-success">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}

            <button
              className="cf-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="16"
                  height="16"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
