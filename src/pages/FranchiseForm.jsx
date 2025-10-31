// FranchiseForm.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FranchiseForm.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const FranchiseForm = () => {


  
  const [isHovered, setIsHovered] = useState(false);

  const initialState = {
    name: '',
    contact: '',
    email: '',
    area: '',
    address: '',
    message: '',
    budget: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData(initialState);
      } else {
        alert(result.message || 'Failed to send email.');
      }
    } catch (error) {
      console.error('Email send error:', error);
      alert('Error occurred. Try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container-fluid py-5 padding-top-30 padding-bottom-30" id="franchise" style={{ backgroundColor: "#F4F9F4" }}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          position: 'relative',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'center',
            marginBottom: '0.5rem',
            marginTop: '1rem',
            color:"#5a1903",
          }}
          className="text-center"
          data-aos="zoom-in"
        >
          Franchise Opportunity
        </h1>

        <div
          style={{
            height: '4px',
            width: isHovered ? '400px' : '0px',
            backgroundColor: '#28a745',
            transition: 'width 0.4s ease-in-out',
            marginBottom: "20px"
          }}
        />
      </div>

      <div className="franchise-container">
        <div className="franchise-left" data-aos="fade-right">
          <img src="" alt="Franchise" className="outlet-img" />
        </div>

        <div className="franchise-right" data-aos="fade-left">
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 , color:'#106A39' }}>Get a Franchise</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required pattern="[0-9]{10}" />
          <input type="email" placeholder="Email" className="form-control" name="user_email" required />
            <input type="text" name="area" placeholder="Area for CSB outlet?" value={formData.area} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows="3" />
            <select name="budget" value={formData.budget} onChange={handleChange} required>
              <option value="" disabled>-- Select Budget --</option>
              <option value="15-20 Lacs">Budget Rs. 15-20 Lacs</option>
              <option value="20-22 Lacs">Budget Rs. 20-22 Lacs</option>
              <option value="22-25 Lacs">Budget Rs. 22-25 Lacs</option>
              <option value="25-30 Lacs">Budget Rs. 25-30 Lacs</option>
            </select>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'SEND'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;
