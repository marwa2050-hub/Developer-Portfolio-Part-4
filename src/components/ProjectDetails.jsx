import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../utils/projectsData";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="project-notfound container">
        <h2>Project not found</h2>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <article className="project-details container">
      <img src={project.image} alt={project.name} className="detail-img" />
      <h1>{project.title}</h1>
      <p className="detail-desc">{project.longDescription}</p>

      <div className="detail-meta">
        <div><strong>Tech:</strong> {project.techStack.join(", ")}</div>
        <div><strong>Date:</strong> {project.date}</div>
      </div>

      <div className="detail-links">
        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn">Live Demo</a>}
        {project.codeLink && <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn">View Code</a>}
      </div>

      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </article>
  );
};

export default ProjectDetails;
