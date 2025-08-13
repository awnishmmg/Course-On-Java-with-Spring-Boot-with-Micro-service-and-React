
import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MerchantRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    mobile: '',
    email: '',
    gstNumber: '',
    companyName: '',
    businessType: 'wholesaler',
    businessAddress: '',
    businessState: '',
    businessDistrict: '',
    businessPostalCode: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <React.Fragment>
      <Header/>
      <div className="container-fluid py-4" style={{ 
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
      backgroundSize: 'cover',
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card shadow-lg" style={{ 
            border: 'none',
            borderRadius: '15px',
            backgroundColor: 'rgba(248,249,250,0.97)'
          }}>
            <div
              className="card-header py-3"
              style={{
                background: 'linear-gradient(90deg, #e6f3ea, #f4fff8)',
                color: '#2d572c',
                borderRadius: '15px 15px 0 0',
                borderBottom: '2px solid #d0e6d8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                padding: '15px'
              }}
            >
              <img
                src={require('../../assets/images/AgriTradeLogo.png')}
                alt="AgriTrade Logo"
                style={{
                  height: '55px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
                }}
              />
              <h2
                className="mb-0"
                style={{
                  fontSize: '26px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#2d572c'
                }}
              >
                <span style={{ fontSize: '1.5rem', color: '#3b7f3b' }}>📊</span>
                Merchant Registration Form
              </h2>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit} style={{ fontSize: '12px' }}>
                {/* Personal Details */}
                <div className="p-3 mb-4 shadow rounded bg-white">
                  <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                    <span className="me-2">👤</span>
                    Personal Details
                  </h5>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="form-label">First Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        style={{width: '250px', fontSize: '12px' }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Middle Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        style={{width: '250px', fontSize: '12px' }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Last Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        style={{width: '250px', fontSize: '12px' }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Father's Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                        style={{width: '250px', fontSize: '12px' }}
                      />
                    </div>
                    
                    <div className="col-md-4">
                      <label className="form-label">Date of Birth*</label>
                      <input
                        type="date"
                        className="form-control"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        style={{width: '250px', fontSize: '12px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="p-3 mb-4 shadow rounded bg-white">
                  <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                    <span className="me-2">📱</span>
                    Contact Details
                  </h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Mobile Number*</label>
                      <div className="input-group">
                        <span className="input-group-text" style={{ fontSize: '12px' }}>+91</span>
                        <input
                          type="tel"
                          className="form-control"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          pattern="[0-9]{10}"
                          required
                          style={{width: '250px', fontSize: '12px' }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address*</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{width: '250px', fontSize: '12px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Business Details */}
                <div className="p-3 mb-4 shadow rounded bg-white">
                  <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                    <span className="me-2">🏢</span>
                    Business Details
                  </h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Company/Firm Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        style={{ fontSize: '12px' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">GST Number*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="gstNumber"
                        value={formData.gstNumber}
                        onChange={handleChange}
                        placeholder="22AAAAA0000A1Z5"
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
                        required
                        style={{ fontSize: '12px' }}
                      />
                      <small className="text-muted">Format: 22AAAAA0000A1Z5</small>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Business Type*</label>
                      <select
                        className="form-select"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        style={{ fontSize: '12px' }}
                      >
                        <option value="wholesaler">Wholesaler</option>
                        <option value="retailer">Retailer</option>
                        <option value="exporter">Exporter</option>
                        <option value="processor">Processor</option>
                        <option value="distributor">Distributor</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Business Address */}
                <div className="p-3 mb-4 shadow rounded bg-white">
                  <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                    <span className="me-2">📍</span>
                    Business Address
                  </h5>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Full Address*</label>
                      <textarea
                        className="form-control"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleChange}
                        rows="3"
                        required
                        style={{ fontSize: '12px' }}
                      ></textarea>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">State*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="businessState"
                        value={formData.businessState}
                        onChange={handleChange}
                        required
                        style={{ fontSize: '12px' }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">District*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="businessDistrict"
                        value={formData.businessDistrict}
                        onChange={handleChange}
                        required
                        style={{ fontSize: '12px' }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Postal Code*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="businessPostalCode"
                        value={formData.businessPostalCode}
                        onChange={handleChange}
                        pattern="[0-9]{6}"
                        required
                        style={{ fontSize: '12px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Submit Button */}
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                    style={{ fontSize: '12px' }}
                  />
                  <label className="form-check-label">
                    I agree to the <a href="#terms" className="text-success">Terms and Conditions</a>*
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn w-25 py-2"
                    style={{
                      fontSize: '12px',
                      background: 'linear-gradient(135deg, #155C2B, #1F7136)',
                      color: 'white'
                    }}
                  >
                    <span className="me-2"></span>
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center py-3" style={{
              background: '#f8f9fa',
              borderRadius: '0 0 15px 15px',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              fontSize: '12px'
            }}>
              <p className="mb-0">
                <span className="me-1">📞</span>
                Need help? Contact us at <a href="mailto:support@agrimerchant.com" className="text-success">support@agrimerchant.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </React.Fragment>
  );
};

export default MerchantRegistration;