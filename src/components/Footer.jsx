import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" aria-label="Footer with social links">
      <div className="social">
        <a href="https://github.com/marwa2050-hub" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/marwa-noorestani-b8573a2a8" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="mailto:marwa@example.com" aria-label="Email"><FaEnvelope /></a>
      </div>
      <p>© {year} Marwa | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
