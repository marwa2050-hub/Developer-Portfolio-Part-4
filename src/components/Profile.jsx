import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ProfileImg from "../assets/profile.jpg";
import ResumePDF from "../assets/Marwa_Resume.pdf";
import "./Profile.css";

const Profile = ({
  name = "Marwa",
  title = "Frontend Developer",
  bio = "I build clean, accessible, and beautiful interfaces using React."
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.section
      className="profile-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-label="Profile section"
    >
      <div
        className="profile-inner"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={ProfileImg}
          alt={`${name} profile`}
          className={`profile-img ${hovered ? "hovered" : ""}`}
        />

        <div className="profile-text">
          <h2>{name}</h2>
          <h4>{title}</h4>
          <p className="bio">{bio}</p>

          {/* Career Goals */}
          <p className="career-goals">
            Seeking a frontend internship to contribute to building accessible and performant web applications.
          </p>

          {/* Work Philosophy */}
          <ul className="work-philosophy">
            <li>Teamwork & collaboration</li>
            <li>Problem-solving</li>
            <li>Continuous learning</li>
          </ul>

          {/* CTA with icon */}
          <a href={ResumePDF} target="_blank" rel="noreferrer" className="cta-button">
            <FaDownload style={{ marginRight: "8px" }} />
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
