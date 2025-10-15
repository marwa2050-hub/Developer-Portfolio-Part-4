import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = ({ title = "Marwa's Portfolio", message, quote }) => {
  return (
    <header className="site-header" aria-label="Portfolio Header">
      <motion.h1
        className="gradient-text"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h1>

      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="header-message"
        >
          {message}
        </motion.p>
      )}

      {quote && (
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="header-quote"
        >
          “{quote}”
        </motion.blockquote>
      )}
    </header>
  );
};

export default Header;
