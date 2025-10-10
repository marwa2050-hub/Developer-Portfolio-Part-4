import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ theme, onThemeChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Marwa</h2>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
        <li><NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
      </ul>

      <div className="theme-buttons">
        <button onClick={() => onThemeChange("light")} className={theme==="light" ? "selected" : ""}>☀️</button>
        <button onClick={() => onThemeChange("dark")} className={theme==="dark" ? "selected" : ""}>🌙</button>
        <button onClick={() => onThemeChange("ocean")} className={theme==="ocean" ? "selected" : ""}>🌊</button>
      </div>
    </nav>
  );
}

export default Navbar;
