import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import profilePic from "../assets/profile2.jpg";

const statsData = [
  { id: 1, label: "Projects", value: 12 },
  { id: 2, label: "Clients", value: 7 },
  { id: 3, label: "Experience (yrs)", value: 3 },
];

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Tailwind", level: 80 },
  { name: "Framer Motion", level: 75 },
  { name: "Git", level: 85 },
  { name: "Vite", level: 70 },
];

const hobbies = [
  { name: "Reading", emoji: "📖" },
  { name: "Photography", emoji: "📸" },
  { name: "Traveling", emoji: "✈️" },
  { name: "Gaming", emoji: "🎮" },
  { name: "Music", emoji: "🎵" },
  { name: "Cooking", emoji: "🍳" },
];

const timeline = [
  { year: "2023", event: "Started Front-end Journey" },
  { year: "2024", event: "Completed 5 freelance projects" },
  { year: "2025", event: "Built personal portfolio & professional projects" },
];

const AboutPage = () => {
  const [animatedStats, setAnimatedStats] = useState(statsData.map(() => 0));
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(statsData.map(s => s.value)), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedSkills(skills.map(s => s.level)), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about-page">
      <div className="about-grid">
        {/* Left Column */}
        <div className="about-left">
          <h2 className="title">About Me</h2>
          <p className="intro">
            Hi! I'm Marwa, a front-end developer building responsive and elegant apps with React.
          </p>
          <p className="goals">
            <strong>Goals:</strong> Create accessible, production-ready projects; master React patterns; improve UI/UX design.
          </p>

          {/* Stats */}
          <div className="stats-grid">
            {statsData.map((stat, i) => (
              <div key={stat.id} className="stat-card">
                <span className="stat-value">{animatedStats[i]}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <h3 className="subtitle">Skills</h3>
          <div className="skills-circle-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-circle">
                <svg>
                  <circle className="circle-bg" cx="40" cy="40" r="36"></circle>
                  <circle
                    className="circle"
                    cx="40"
                    cy="40"
                    r="36"
                    strokeDasharray={`${(animatedSkills[i] / 100) * 226} 226`}
                  ></circle>
                  <text x="40" y="42">{skill.level}%</text>
                </svg>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Hobbies */}
          <h3 className="subtitle">Hobbies</h3>
          <div className="hobbies-grid">
            {hobbies.map((hobby, i) => (
              <div key={i} className="hobby-card">
                <span className="emoji">{hobby.emoji}</span>
                <span>{hobby.name}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h3 className="subtitle">Timeline</h3>
          <ul className="timeline">
            {timeline.map((t, i) => (
              <li key={i}>
                <span className="timeline-year">{t.year}</span>
                <span className="timeline-event">{t.event}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="about-right">
          <img src={profilePic} alt="Marwa" className="profile-pic"/>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
