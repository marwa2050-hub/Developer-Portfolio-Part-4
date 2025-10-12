import React from "react";
import "./TechBadge.css";

const TechBadge = ({ tech }) => {
  return (
    <span className="tech-badge" aria-label={tech}>
      {tech}
    </span>
  );
};

export default TechBadge;
