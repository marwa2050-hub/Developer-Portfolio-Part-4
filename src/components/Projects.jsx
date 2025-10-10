import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../utils/projectsData";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const allTechs = Array.from(new Set(projectsData.flatMap(p => p.techStack)));
  const filtered = filter === "All" ? projectsData : projectsData.filter(p => p.techStack.includes(filter));

  return (
    <section className="projects-section container">
      <h2>Projects</h2>
      <div className="projects-controls">
        <div className="filters">
          <button className={filter==="All" ? "active" : ""} onClick={() => setFilter("All")}>All</button>
          {allTechs.map((t) => (
            <button key={t} className={filter===t ? "active" : ""} onClick={() => setFilter(t)}>{t}</button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
};

export default Projects;
