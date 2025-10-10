import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Confetti from "./components/Confetti";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // small confetti feedback when switching to 'ocean' (custom)
  useEffect(() => {
    if (theme === "ocean") {
      setShowConfetti(true);
      const t = setTimeout(() => setShowConfetti(false), 2500);
      return () => clearTimeout(t);
    }
  }, [theme]);

  return (
    <Router>
      {showConfetti && <Confetti />}
      <div className="app">
        <Navbar theme={theme} onThemeChange={setTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
