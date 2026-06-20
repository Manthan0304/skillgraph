import { useState } from "react";
import API from "../api/courseApi";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All Fields Required");
      return;
    }

    try {
      await API.post("/contact", formData);
      toast.success("Message Sent Successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed To Send Message");
    }
  }

  return (
    <div className="page-container surface-panel form-panel contact-panel">
      <div className="section-header">
        <div>
          <h1>Contact Us</h1>
          <p>Tell us what you need and we’ll respond with the right next step.</p>
        </div>
      </div>
      <div className="contact-grid">
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group full-width">
            <label>Name</label>
            <input type="text" placeholder="Enter name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="form-group full-width">
            <label>Email</label>
            <input type="email" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="form-group full-width">
            <label>Message</label>
            <textarea rows="6" placeholder="How can we help?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          </div>
          <div className="form-actions full-width">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
        <aside className="contact-card">
          <h3>What happens next?</h3>
          <p>We usually reply within one business day. For course edits, include the course title and desired update.</p>
          <div className="contact-note">
            <strong>Support hours</strong>
            <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
