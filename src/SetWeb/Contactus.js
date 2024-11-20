import React, { useState } from "react";
import "../ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({name: "",email: "",message: "",});

  const change = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={submit} className="forml">
        <label>Name</label>
        <input type="text" id="name" name="name"  value={formData.name} onChange={change}/>
        
        <label>Email</label>
        <input type="email" id="email" name="email"  value={formData.email} onChange={change}/>
        
        <label >Message</label>
        <textarea id="message" name="message"  value={formData.message} onChange={change} rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
