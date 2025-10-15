import React, { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";
import feedbacksData from "../utils/feedbacksData";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saved = localStorage.getItem("feedbacks");
    return saved ? JSON.parse(saved) : feedbacksData;
  });

  const [formData, setFormData] = useState({ name: "", rating: 5, comment: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.comment.trim()) err.comment = "Comment is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      const newFb = { id: Date.now(), ...formData };
      setFeedbacks([newFb, ...feedbacks]);
      setFormData({ name: "", rating: 5, comment: "" });
    }
  };

  const handleUpdate = (updatedFb) => {
    setFeedbacks(feedbacks.map((fb) => (fb.id === updatedFb.id ? updatedFb : fb)));
  };

  return (
    <section className="feedback-container">
      <h2>Feedback</h2>
      <p className="feedback-subtext">
        We value your thoughts and opinions. Please share your feedback below.
      </p>

      <div className="feedback-form-wrapper">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </label>

          <label>
            Rating
            <select name="rating" value={formData.rating} onChange={handleChange}>
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n} ⭐
                </option>
              ))}
            </select>
          </label>

          <label>
            Comment
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Your Feedback"
              rows="5"
            />
            {errors.comment && <small className="error">{errors.comment}</small>}
          </label>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      <div className="feedback-wall">
        <h3>All Feedbacks</h3>
        {feedbacks.length === 0 ? (
          <p>No feedback yet. Be the first to share!</p>
        ) : (
          feedbacks.map((fb) => (
            <FeedbackCard key={fb.id} fb={fb} onUpdate={handleUpdate} />
          ))
        )}
      </div>
    </section>
  );
};

export default FeedbackForm;
