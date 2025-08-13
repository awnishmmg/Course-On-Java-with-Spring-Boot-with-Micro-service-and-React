import React from "react";
import { motion } from "framer-motion";
import "./css/AboutUs.css"; // Updated CSS file name
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="agri-container">
        {/* Hero Section */}
        <motion.section
          className="agri-hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            About <span>AgriTrade</span>
          </h1>
          <p>Empowering Farmers. Connecting Markets. Eliminating Middlemen.</p>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          className="agri-mission"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Mission</h2>
          <p>
            AgriTrade is dedicated to revolutionizing agricultural trade by
            creating a direct digital bridge between farmers and merchants,
            ensuring fair pricing, transparency, and efficiency.
          </p>
          <h2>Our Vision</h2>
          <p>
            A future where every farmer has direct access to buyers, maximizing
            their profits and building a sustainable agricultural economy.
          </p>
        </motion.section>

        {/* Problem & Solution */}
        <motion.section
          className="agri-problem-solution"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="agri-card">
            <h3>Problem We Solve</h3>
            <p>
              Farmers often lose a large share of profits due to intermediaries.
              This outdated system reduces transparency and efficiency.
            </p>
          </div>
          <div className="agri-card">
            <h3>Our Solution</h3>
            <p>
              AgriTrade connects farmers directly with merchants, enabling
              secure transactions, bulk orders, and fair prices through our
              user-friendly platform.
            </p>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          className="agri-features"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Key Features</h2>
          <ul>
            <li>✔ Direct Farmer-Merchant Contact</li>
            <li>✔ Secure Digital Payments</li>
            <li>✔ Bulk Order Management</li>
            <li>✔ Real-time Chat Module</li>
            <li>✔ Easy Produce Listing & Tracking</li>
          </ul>
        </motion.section>

        {/* Future Scope */}
        <motion.section
          className="agri-future"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Future Scope</h2>
          <p>
            We aim to integrate payment gateways, geo-location based matching,
            AI-based crop pricing, and government procurement opportunities to
            further empower our users.
          </p>
        </motion.section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
