import React, { useState } from "react";
import "./Donate.css";
import axios from "axios";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/donate", formData);
      alert("Thank you for your generous donation!");
      setFormData({ name: "", email: "", amount: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="donate-form-container">
      <h2>🌟 Make a Donation</h2>
      <p className="donation-subtext">Your contribution supports our mission.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Donation Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
};

export default Donate;
