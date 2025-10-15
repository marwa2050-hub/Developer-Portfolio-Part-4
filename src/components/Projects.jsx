import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../utils/projectsData.js";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const allTechs = Array.from(new Set(projectsData.flatMap(p => p.techStack)));

  const filtered = projectsData
    .filter(p => filter === "All" || p.techStack.includes(filter))
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="projects-section container" id="projects">
      <h2>Projects</h2>

      <div className="projects-controls">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search projects"
        />

        <div className="filters" role="group" aria-label="Filter projects by tech">
          <button className={filter==="All" ? "active" : ""} onClick={() => setFilter("All")}>
            All
          </button>
          {allTechs.map(t => (
            <button key={t} className={filter===t ? "active" : ""} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
