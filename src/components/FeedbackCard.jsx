import React, { useState } from "react";
import "./FeedbackCard.css";

const FeedbackCard = ({ fb, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: fb.name,
    rating: fb.rating,
    comment: fb.comment,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate({ ...fb, ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ name: fb.name, rating: fb.rating, comment: fb.comment });
    setIsEditing(false);
  };

  return (
    <div className={`feedback-card ${fb.featured ? "featured" : ""}`}>
      {isEditing ? (
        <>
          <div className="fb-head">
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <div className="fb-stars">
              <select name="rating" value={editData.rating} onChange={handleChange}>
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>{n} ⭐</option>
                ))}
              </select>
            </div>
          </div>
          <div className="fb-comment">
            <textarea
              name="comment"
              value={editData.comment}
              onChange={handleChange}
            />
          </div>
          <div className="fb-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="fb-head">
            <span className="fb-name">{fb.name}</span>
            <span className="fb-stars">{fb.rating} ⭐</span>
          </div>
          <p className="fb-comment">{fb.comment}</p>
          <div className="fb-actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          </div>
          {fb.featured && <span className="fb-badge">Featured</span>}
        </>
      )}
    </div>
  );
};

export default FeedbackCard;
