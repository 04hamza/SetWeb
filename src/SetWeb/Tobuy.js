import React, { useState } from "react";
import "../ContactUs.css";

const ToBuy = () => {
  const [formData, setFormData] = useState({modepass: "",email: ""});

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
        <label>Email</label>
        <input type="email" id="email" name="email"  value={formData.email} onChange={change}/>
        <label>Password</label>
        <input type="password" id="name" name="password"  value={formData.password} onChange={change}/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ToBuy;