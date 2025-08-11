import React, { useState } from 'react';
import './DonateForm.css';
import axios from 'axios';

const DonateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(formData.amount) <= 0) {
      alert("Donation amount must be greater than zero.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/donate', formData);
      if (response.status === 200) {
        alert('🎉 Thank you for your donation!');
        setFormData({ name: '', email: '', amount: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Donation error:", error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="donate-form-container">
      <h2>🌟 Make a Donation</h2>
      <p className="donation-subtext">Every rupee you donate supports our mission to serve others.</p>
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
          placeholder="Amount (INR)"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
};

export default DonateForm;
