import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";

const Home = () => {
  const welcome = "Welcome to my Developer Portfolio!";
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "The best error message is the one that never shows up.",
    "First, solve the problem. Then, write the code.",
    "Dream big, work hard, and code smart."
  ];
  const quote = quotes[Math.floor(Math.random()*quotes.length)];
  return (
    <div className="container">
      <Header message={welcome} quote={quote} />
      <Profile name="Marwa" title="Frontend Developer" bio="I build clean, accessible, and beautiful interfaces using React." image="/profile.jpg" />
    </div>
  );
};

export default Home;
