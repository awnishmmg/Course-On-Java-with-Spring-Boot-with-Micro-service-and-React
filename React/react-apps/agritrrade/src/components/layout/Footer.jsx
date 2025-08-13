import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-light pt-4 pb-3" id="footer-container">
     
        <div className="row gy-4" id="footer-section">
    
          <div className="col-lg-3 col-md-6 " id="AgriConnect">
            <h4 className="fw-bold mb-2 text-primary">AgriTrade</h4>
            <p className="small mb-0">
              Connecting farmers and merchants for a better agricultural future.
              Quality, trust, and transparency in every deal.
            </p>
          </div>

      
          <div className="col-lg-2 col-md-6 " id="quick-links">
            <h5 className="fw-semibold mb-2">Quick Links</h5>
            <ul className="list-unstyled small mb-0">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/farmers", label: "For Farmers" },
                { path: "/marchants", label: "For Merchants" },
                { path: "/login", label: "Login / Register" },
              ].map((link, i) => (
                <li key={i} className="mb-1">
                  <NavLink
                    to={link.path}
                    className="text-light text-decoration-none"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="fw-semibold mb-2">Main Office</h5>
            <div className="small mb-2">
              <div>123 Agriculture Road</div>
              <div>New Delhi, India - 110001</div>
              <div>Email: contact@agriTrade.com</div>
              <div>Phone: +91 98765 43210</div>
            </div>

            <div
              className="ratio ratio-16x9 rounded overflow-hidden shadow-sm"
              style={{ maxHeight: "150px" }}
              id="google-map"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2937456608986!2d77.2167218150839!3d28.644800982414294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b5b4c4b71%3A0x8f6b4374a5e2b5ab!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1622455743229!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

    
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold mb-2">Follow Us</h5>
            <div className="d-flex gap-3 flex-wrap">
              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaTwitter,
                FaYoutube,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="d-inline-flex align-items-center justify-content-center rounded-circle text-white "
                  id="socialMedia"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-3 pt-2 border-top border-light small">
          &copy; {new Date().getFullYear()} AgriTrade. All rights reserved.
        </div>
 
    </footer>
  );
}

export default Footer;
