import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = ({ title = "Marwa's Portfolio", message, quote }) => {
  return (
    <header className="site-header">
      <motion.h1 initial={{ y:-10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.5 }}>
        {title}
      </motion.h1>
      {message && <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="header-message">{message}</motion.p>}
      {quote && <motion.blockquote initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}} className="header-quote">“{quote}”</motion.blockquote>}
    </header>
  );
};

export default Header;
