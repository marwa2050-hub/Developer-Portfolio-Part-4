import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.message.trim()) err.message = "Message is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="contact-container">
      <h2>Contact</h2>
      <p className="contact-subtext">
        I’m open to internships, collaborations, and freelance work. Let’s connect!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your Name
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
          Email (optional)
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && <small className="error">{errors.message}</small>}
        </label>

        <button type="submit">Send Message</button>
      </form>

      {/* Live Preview Section */}
      <div className="live-preview">
        <h3>Live Preview</h3>
        <div className="preview-card">
          <p><strong>Name:</strong> {formData.name || "—"}</p>
          <p><strong>Email:</strong> {formData.email || "—"}</p>
          <p><strong>Message:</strong></p>
          <p className="preview-message">
            {formData.message || "Your message will appear here..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
