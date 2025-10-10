import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Profile.css";

const Profile = ({ name="Marwa", title="Frontend Developer", bio="", image="/profile.jpg" }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.section className="profile-card" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
      <div className="profile-inner" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
        <img src={image} alt={`${name} profile`} className={`profile-img ${hovered ? "hovered" : ""}`} />
        <div className="profile-text">
          <h2>{name}</h2>
          <h4>{title}</h4>
          <p>{bio}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
