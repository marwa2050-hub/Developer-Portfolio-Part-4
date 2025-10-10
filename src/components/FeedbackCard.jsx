import React from "react";
import { motion } from "framer-motion";
import "./FeedbackCard.css";

const FeedbackCard = ({ name, rating, comment }) => {
  const isFeatured = rating === 5;
  return (
    <motion.div className={`feedback-card ${isFeatured ? "featured" : ""}`} initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.4}}>
      <div className="fb-head">
        <div className="fb-name">{name}</div>
        <div className="fb-stars" aria-label={`Rating ${rating} of 5`}>{'⭐'.repeat(rating)}{'☆'.repeat(5-rating)}</div>
      </div>
      <div className="fb-comment">{comment}</div>
      {isFeatured && <div className="fb-badge">🌟 Featured</div>}
    </motion.div>
  );
};

export default FeedbackCard;
