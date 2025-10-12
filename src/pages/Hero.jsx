// src/pages/Hero.jsx
import React from "react";
import "./Hero.css"; // می‌توان CSS جداگانه برای Hero داشته باشیم

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I’m Marwa</h1>
        <h2>Frontend Developer building modern and accessible web apps</h2>
        <p>
          Passionate about creating clean interfaces, continuous learning, and 
          building responsive, user-friendly web applications.
        </p>
        <a href="#projects" className="cta-button">
          View My Projects
        </a>
      </div>
      <div className="hero-image">
        <img src="/profile.jpg" alt="Marwa Profile" loading="lazy" />
      </div>
    </section>
  );
};

export default Hero;
