import React, { useState } from "react";
import TechBadge from "./TechBadge";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="project-card">
      <img src={project.image} alt={project.name} className="project-img" />
      <div className="project-body">
        <div className="project-head">
          <h3>{project.name} {project.featured && <span className="star">🌟</span>}</h3>
        </div>
        <p className="project-short">{project.shortDescription}</p>
        <div className="stack">
          {project.techStack.map((t, i) => <TechBadge key={i} tech={t} />)}
        </div>

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
