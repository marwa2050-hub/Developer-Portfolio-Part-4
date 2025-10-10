import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div className="notfound container">
    <h1>404</h1>
    <p>Page not found.</p>
    <Link to="/">Return home</Link>
  </div>
);

export default NotFound;
