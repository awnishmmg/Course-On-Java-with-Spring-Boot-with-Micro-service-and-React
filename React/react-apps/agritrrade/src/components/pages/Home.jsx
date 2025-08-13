import React from "react";
import "../css/style.css"; // custom styles

export default function Home() {
  return (
    <div className="container-fluid index-section mt-4">
      {/* revolution section */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm ">
            <h1>Revolutionizing Agriculture Trading</h1>
            <p>
              Connect Farmers directly with Merchants. No Middlemen. Maximum
              Profit to Farmers.
            </p>
            <button className="btn-primary-custom">Get Started</button>
          </div>
          <div className="col-sm hero-img">
            <div className="img-placeholder"></div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container features">
        <h3>Features</h3>
        <div className="row mt-5">
          <div className="col-sm">
            <div className="col-sm feature-box">
              <div className="icon-placeholder"></div>
              <h5>Lorem, ipsum.</h5>
              <p>Direct connection</p>
            </div>
          </div>
          <div className="col-sm">
            <div className="col-sm feature-box">
              <div className="icon-placeholder"></div>
              <h5>Lorem, ipsum.</h5>
              <p>Direct connection</p>
            </div>
          </div>
          <div className="col-sm">
            <div className="col-sm feature-box">
              <div className="icon-placeholder"></div>
              <h5>Lorem, ipsum.</h5>
              <p>Direct connection</p>
            </div>
          </div>
          <div className="col-sm">
            <div className="col-sm feature-box">
              <div className="icon-placeholder"></div>
              <h5>Lorem, ipsum.</h5>
              <p>Direct connection</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container how-it-works">
        <h3>How It Works</h3>
        <div className="row  mt-5 steps-row">
          <div className="col-sm step-box">
            <div className="icon-placeholder"></div>
            <p>1 Farmer Posts Product</p>
          </div>
          <div className="col-sm-auto ">→</div>
          <div className="col-sm step-box">
            <div className="icon-placeholder"></div>
            <p>2 Merchant Places Order</p>
          </div>
          <div className="col-sm-auto ">→</div>
          <div className="col-sm step-box">
            <div className="icon-placeholder"></div>
            <p>3 Delivery & Payment via Platform</p>
          </div>
        </div>
      </div>

      {/* For Farmers / Merchants */}
      <div className="container for-section m-5">
        <div className="row mt-5 m-auto">
          <div className="col-sm-1"></div>
          <div className="col-sm-4">
            <div className="col-sm for-farmers">
              <h4 className="text-center">
                <u>For Farmers</u>
              </h4>
              <ul>
                <li>Easy product listing</li>
                <li>Direct chat with buyers</li>
                <li>No hidden charges</li>
              </ul>
              <button className="btn-primary-custom w-100">
                Farmer Registration
              </button>
            </div>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <div className="col-sm for-farmers">
              <h4 className="text-center">
                <u>For Farmers</u>
              </h4>
              <ul>
                <li>Easy product listing</li>
                <li>Direct chat with buyers</li>
                <li>No hidden charges</li>
              </ul>
              <button className="btn-primary-custom  w-100">
                Farmer Registration
              </button>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
}
