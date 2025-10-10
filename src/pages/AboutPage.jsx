import React, { useState } from "react";
import "./AboutPage.css";

const AboutPage = () => {
  const intro = "Hi! I'm Marwa, a front-end developer learning and building with React.";
  const goals = "Create accessible, responsive apps; master React patterns; ship production-ready projects.";
  const hobbies = ["Reading tech articles", "Photography", "Traveling", "Gaming", "Music"];

  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-page container">
      <h2>About Me</h2>
      <p>{intro}</p>
      <p><strong>Goals:</strong> {goals}</p>
      <h3>Hobbies & Fun Facts</h3>
      <ul>
        {hobbies.slice(0, showMore ? hobbies.length : 3).map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <button onClick={() => setShowMore(s => !s)}>{showMore ? "Show Less" : "Show More"}</button>
    </section>
  );
};

export default AboutPage;
