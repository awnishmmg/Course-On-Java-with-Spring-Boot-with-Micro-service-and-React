import React, { useState } from 'react';
import './css/ContactPage.css';
import agritradeLogo from '../../assets/images/AgriTradeLogo.png';
import Header from '../layout/Header';
import Footer from '../layout/Footer';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form logic here
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will contact you soon.');
    }
  };

  return (
    <React.Fragment>
      <Header/>
      <div className="contact-container">
      <div className="contact-header">
        <img src={agritradeLogo} alt="AgriTrade Logo" className="logo" />
        <h1>Contact AgriTrade</h1>
        <p>Connect with us directly - farmers and merchants together</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-container">
          <h2>Send Us A Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 800 000000"
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write us a message"
                rows="5"
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-section">
            <h3>Address</h3>
            <p>Agricultural Trade Center<br />
            370 Hudson St<br />
            New York, NY 10018 US</p>
          </div>

          <div className="info-section">
            <h3>Let's Talk</h3>
            <p>+1 800 12356779</p>
          </div>

          <div className="info-section">
            <h3>General Support</h3>
            <p>support@agritrade.com</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </React.Fragment>
  );
};

export default ContactPage;