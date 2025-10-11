import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import FeedbackCard from "./FeedbackCard";
import confetti from "canvas-confetti";
import "./ContactForm.css";

const ContactForm = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [savedHint, setSavedHint] = useState(false);
  const [feedbacks, setFeedbacks] = useState(() =>
    JSON.parse(localStorage.getItem("feedbacks") || "[]")
  );

  // Load saved draft
  useEffect(() => {
    const draft = JSON.parse(localStorage.getItem("contactDraft") || "null");
    if (draft) {
      setData(draft);
      setSavedHint(true);
    }
  }, []);

  // Autosave draft
  useEffect(() => {
    localStorage.setItem("contactDraft", JSON.stringify(data));
  }, [data]);

  // Debounce email validation
  const debouncedEmail = useDebounce(data.email, 400);
  useEffect(() => {
    if (debouncedEmail) {
      if (!/\S+@\S+\.\S+/.test(debouncedEmail)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      } else {
        setErrors((prev) => {
          const { email, ...rest } = prev;
          return rest;
        });
      }
    }
  }, [debouncedEmail]);

  const handleChange = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!data.name.trim()) e.name = "Name required";
    if (!data.message.trim()) e.message = "Message required";
    if (data.email && !/\S+@\S+\.\S+/.test(data.email)) e.email = "Invalid email";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      const newFb = {
        id: Date.now(),
        name: data.name || "Anonymous",
        rating: Math.floor(Math.random() * 5) + 1,
        comment: data.message || "—",
        date: new Date().toISOString(),
      };
      const next = [newFb, ...feedbacks];
      setFeedbacks(next);
      localStorage.setItem("feedbacks", JSON.stringify(next));

      // Clear form
      setData({ name: "", email: "", message: "" });
      localStorage.removeItem("contactDraft");
      setSavedHint(false);

      // Confetti + toast
      confetti({ particleCount: 90, spread: 90, origin: { y: 0.6 } });
      alert(`Thank you, ${newFb.name}! Your message was sent.`);
    }
  };

  // Handle feedback updates
  const handleFeedbackUpdate = (updatedFb) => {
    const next = feedbacks.map((fb) => (fb.id === updatedFb.id ? updatedFb : fb));
    setFeedbacks(next);
    localStorage.setItem("feedbacks", JSON.stringify(next));
  };

  return (
    <section className="contact container">
      <h2>Contact</h2>
      {savedHint && <p className="hint">You have unsent message data saved!</p>}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          <input
            name="name"
            placeholder="Your name"
            value={data.name}
            onChange={handleChange}
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </label>

        <label>
          <input
            name="email"
            placeholder="Email (optional)"
            value={data.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </label>

        <label>
          <textarea
            name="message"
            placeholder="Message"
            value={data.message}
            onChange={handleChange}
            rows="6"
          />
          {errors.message && <small className="error">{errors.message}</small>}
        </label>

        <div className="form-actions">
          <button type="submit">Send Message</button>
        </div>
      </form>

      <div className="preview">
        <h3>Live Preview</h3>
        <p>
          <strong>Name:</strong> {data.name || "—"}
        </p>
        <p>
          <strong>Email:</strong> {data.email || "—"}
        </p>
        <p>
          <strong>Message:</strong> {data.message || "—"}
        </p>
      </div>

      <div className="feedback-wall">
        <h3>Feedback Wall</h3>
        {feedbacks.length === 0 && <p>No feedback yet — be the first!</p>}
        {feedbacks.map((fb) => (
          <FeedbackCard key={fb.id} fb={fb} onUpdate={handleFeedbackUpdate} />
        ))}
      </div>
    </section>
  );
};

export default ContactForm;
