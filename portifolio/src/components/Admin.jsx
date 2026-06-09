import { useEffect, useState } from "react";
import "../Css/Admin.css";

const PASSWORD = "tebatso2026";

function Admin() {
  const [auth, setAuth] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    githubLink: "",
    liveLink: "",
    featured: false,
  });

  function handleLogin() {
    if (input === PASSWORD) {
      setAuth(true);
      setError("");
    } else {
      setError("Wrong password. Try again.");
    }
  }

  function fetchProjects() {
    setLoading(true);
    fetch("/api/projects")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setProjects(data);
        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
      });
  }

  useEffect(
    function () {
      if (auth) fetchProjects();
    },
    [auth],
  );

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(function (prev) {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function resetForm() {
    setForm({
      title: "",
      description: "",
      tech: "",
      githubLink: "",
      liveLink: "",
      featured: false,
    });
    setEditingId(null);
    setShowForm(false);
  }

  function handleSubmit() {
    if (!form.title || !form.description) {
      alert("Title and description are required");
      return;
    }

    const payload = {
      ...form,
      tech: form.tech
        .split(",")
        .map(function (t) {
          return t.trim();
        })
        .filter(Boolean),
    };

    const url = editingId ? `/api/projects/${editingId}` : "/api/projects";
    const method = editingId ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function () {
        fetchProjects();
        resetForm();
      })
      .catch(function () {
        alert("Something went wrong");
      });
  }

  function handleEdit(project) {
    setForm({
      title: project.title,
      description: project.description,
      tech: project.tech.join(", "),
      githubLink: project.githubLink || "",
      liveLink: project.liveLink || "",
      featured: project.featured || false,
    });
    setEditingId(project._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;
    fetch(`/api/projects/${id}`, { method: "DELETE" })
      .then(function () {
        fetchProjects();
      })
      .catch(function () {
        alert("Could not delete");
      });
  }

  if (!auth) {
    return (
      <div className="admin-login">
        <div className="login-box">
          <div className="login-logo">
            <svg width="32" height="32" viewBox="0 0 100 100">
              <polygon
                points="50 3,93 27,93 73,50 97,7 73,7 27"
                fill="none"
                stroke="#9b72cf"
                strokeWidth="6"
              />
              <text
                x="50"
                y="62"
                textAnchor="middle"
                fill="#9b72cf"
                fontSize="40"
                fontWeight="800"
                fontFamily="DM Sans"
              >
                T
              </text>
            </svg>
            <span>Admin Panel</span>
          </div>
          <p className="login-sub">Enter your password to continue</p>
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={input}
            onChange={function (e) {
              setInput(e.target.value);
            }}
            onKeyDown={function (e) {
              if (e.key === "Enter") handleLogin();
            }}
          />
          {error && <p className="login-error">{error}</p>}
          <button className="login-btn" onClick={handleLogin}>
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <div className="admin-header-left">
          <svg width="28" height="28" viewBox="0 0 100 100">
            <polygon
              points="50 3,93 27,93 73,50 97,7 73,7 27"
              fill="none"
              stroke="#9b72cf"
              strokeWidth="6"
            />
            <text
              x="50"
              y="62"
              textAnchor="middle"
              fill="#9b72cf"
              fontSize="40"
              fontWeight="800"
              fontFamily="DM Sans"
            >
              T
            </text>
          </svg>
          <h1>Projects Dashboard</h1>
        </div>
        <div className="admin-header-right">
          <a href="/" className="admin-back">
            ← Back to Portfolio
          </a>
          <button
            className="admin-add-btn"
            onClick={function () {
              resetForm();
              setShowForm(!showForm);
            }}
          >
            {showForm ? "Cancel" : "+ Add Project"}
          </button>
        </div>
      </div>

      {showForm && (
        <div className="admin-form">
          <h2>{editingId ? "Edit Project" : "Add New Project"}</h2>
          <div className="form-grid">
            <div className="form-field">
              <label>Title *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Project title"
              />
            </div>
            <div className="form-field">
              <label>Tech Stack</label>
              <input
                name="tech"
                value={form.tech}
                onChange={handleChange}
                placeholder="React, C#, SQL (comma separated)"
              />
            </div>
            <div className="form-field full">
              <label>Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="What does this project do?"
                rows={4}
              />
            </div>
            <div className="form-field">
              <label>GitHub Link</label>
              <input
                name="githubLink"
                value={form.githubLink}
                onChange={handleChange}
                placeholder="https://github.com/..."
              />
            </div>
            <div className="form-field">
              <label>Live Link</label>
              <input
                name="liveLink"
                value={form.liveLink}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>
            <div className="form-field">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="featured"
                  checked={form.featured}
                  onChange={handleChange}
                />
                Featured project
              </label>
            </div>
          </div>
          <div className="form-actions">
            <button className="btn-save" onClick={handleSubmit}>
              {editingId ? "Save Changes" : "Add Project"}
            </button>
            <button className="btn-cancel" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="admin-stats">
        <div className="stat-box">
          <span className="stat-num">{projects.length}</span>
          <span className="stat-label">Total Projects</span>
        </div>
        <div className="stat-box">
          <span className="stat-num">
            {
              projects.filter(function (p) {
                return p.featured;
              }).length
            }
          </span>
          <span className="stat-label">Featured</span>
        </div>
        <div className="stat-box">
          <span className="stat-num">
            {
              projects.filter(function (p) {
                return p.liveLink;
              }).length
            }
          </span>
          <span className="stat-label">Live</span>
        </div>
      </div>

      {loading ? (
        <div className="admin-loading">Loading projects...</div>
      ) : projects.length === 0 ? (
        <div className="admin-empty">
          No projects yet. Click Add Project to get started.
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Tech Stack</th>
                <th>Featured</th>
                <th>Links</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(function (project) {
                return (
                  <tr key={project._id}>
                    <td>
                      <span className="table-title">{project.title}</span>
                      <span className="table-desc">
                        {project.description.slice(0, 60)}...
                      </span>
                    </td>
                    <td>
                      <div className="table-tech">
                        {project.tech.map(function (t) {
                          return (
                            <span key={t} className="tech-tag">
                              {t}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td>
                      <span
                        className={project.featured ? "badge-yes" : "badge-no"}
                      >
                        {project.featured ? "Yes" : "No"}
                      </span>
                    </td>
                    <td>
                      <div className="table-links">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live
                          </a>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="table-actions">
                        <button
                          className="btn-edit"
                          onClick={function () {
                            handleEdit(project);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-delete"
                          onClick={function () {
                            handleDelete(project._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admin;
