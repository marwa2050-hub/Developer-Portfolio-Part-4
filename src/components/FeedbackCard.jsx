import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FeedbackCard.css";

const FeedbackCard = ({ fb, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editComment, setEditComment] = useState(fb.comment);
  const [editRating, setEditRating] = useState(fb.rating);

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    onUpdate({ ...fb, comment: editComment, rating: editRating });
    setIsEditing(false);
  };

  const isFeatured = editRating === 5;

  return (
    <motion.div
      className={`feedback-card ${isFeatured ? "featured" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="fb-head">
        <div className="fb-name">{fb.name}</div>
        <div className="fb-stars" aria-label={`Rating ${editRating} of 5`}>
          {isEditing ? (
            <select
              value={editRating}
              onChange={(e) => setEditRating(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n} ⭐</option>
              ))}
            </select>
          ) : (
            '⭐'.repeat(editRating) + '☆'.repeat(5 - editRating)
          )}
        </div>
      </div>
      <div className="fb-comment">
        {isEditing ? (
          <textarea
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
          />
        ) : (
          editComment
        )}
      </div>
      <div className="fb-actions">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={toggleEdit}>Edit</button>
        )}
      </div>
      {isFeatured && <div className="fb-badge">🌟 Featured</div>}
    </motion.div>
  );
};

export default FeedbackCard;
