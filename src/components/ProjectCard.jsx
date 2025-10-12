import React, { useState, useEffect } from "react";
import TechBadge from "./TechBadge";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import Confetti from "./Confetti";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (project.featured) {
      setShowConfetti(true);
      const t = setTimeout(() => setShowConfetti(false), 2500);
      return () => clearTimeout(t);
    }
  }, [project.featured]);

  return (
    <article className="project-card">
      {showConfetti && <Confetti />}
      
      <img
        src={project.image}
        alt={project.name}
        className="project-img"
        loading="lazy"
      />

      <div className="project-body">
        <div className="project-head">
          <h3>
            {project.name} {project.featured && <span className="star">🌟</span>}
          </h3>
          {project.role && <span className="project-role">{project.role}</span>}
        </div>

        <div className="stack">
          {project.techStack.map((t, i) => <TechBadge key={i} tech={t} />)}
        </div>

        {/* Problem → Solution → Outcome */}
        <div className="project-summary">
          {project.problem && <p><strong>Problem:</strong> {project.problem}</p>}
          {project.solution && <p><strong>Solution:</strong> {project.solution}</p>}
          {project.outcome && <p><strong>Outcome:</strong> {project.outcome}</p>}
        </div>

        {/* Progress bar */}
        {project.progress && (
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={project.progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width:`${project.progress}%` }}
          ></div>
        )}

        <div className="project-actions">
          <button onClick={() => setOpen(s => !s)} aria-expanded={open}>
            {open ? "Hide Details" : "View Details"}
          </button>
          <div className="project-links">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="live-btn">
                Live Demo
              </a>
            )}
            {project.codeLink && (
              <a href={project.codeLink} target="_blank" rel="noreferrer" className="code-btn">
                GitHub
              </a>
            )}
          </div>
        </div>

        {open && (
          <div className="project-extra" aria-hidden={!open}>
            {project.longDescription && <p>{project.longDescription}</p>}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
