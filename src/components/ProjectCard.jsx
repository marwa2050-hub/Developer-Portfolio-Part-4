import React, { useState, useEffect } from "react";
import TechBadge from "./TechBadge";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import Confetti from "./Confetti";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Confetti برای پروژه featured
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
      <img src={project.image} alt={project.name} className="project-img" />
      <div className="project-body">
        <div className="project-head">
          <h3>{project.name} {project.featured && <span className="star">🌟</span>}</h3>
        </div>
        <p className="project-short">{project.shortDescription}</p>

        <div className="stack">
          {project.techStack.map((t, i) => <TechBadge key={i} tech={t} />)}
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
          <button onClick={() => setOpen(s => !s)}>{open ? "Hide Details" : "View Details"}</button>
          <Link to={`/projects/${project.id}`} className="link-btn">Project Page</Link>
        </div>

        {open && (
          <div className="project-extra" aria-expanded={open}>
            <p>{project.longDescription}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
              <a href={project.codeLink} target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
