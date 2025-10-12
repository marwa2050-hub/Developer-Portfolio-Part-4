import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import FeedbackCard from "../components/FeedbackCard";
import feedbacksData from "../utils/feedbacksData";

const Home = () => {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "The best error message is the one that never shows up.",
    "First, solve the problem. Then, write the code.",
    "Dream big, work hard, and code smart."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Hi, I’m Marwa</h1>
        <h2>Frontend Developer building modern and accessible web apps</h2>
        <p>Passionate about creating clean interfaces and learning continuously.</p>
        <a href="#projects" className="cta-button">
          View My Projects
        </a>
      </section>

      {/* About / Profile Section */}
      <section className="about-section">
        <Header message="Welcome to my Developer Portfolio!" quote={quote} />
        <Profile
          name="Marwa"
          title="Frontend Developer"
          bio="I build clean, accessible, and beautiful interfaces using React. 
          I am seeking an internship in frontend development and thrive in teamwork, problem-solving, and continuous learning."
        />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Testimonials</h2>
        {feedbacksData.length === 0 ? (
          <p>No testimonials yet — be the first to leave feedback!</p>
        ) : (
          <div className="testimonials-grid">
            {feedbacksData.map((fb) => (
              <FeedbackCard key={fb.id} fb={fb} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
