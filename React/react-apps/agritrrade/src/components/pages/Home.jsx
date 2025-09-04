import React, { useEffect, useState } from "react";
import "../css/style.css"; // custom styles
import { userApiService } from "../../api/userApi";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    userApiService.getAllProductsWithImages(function (products) {
      setProducts(products);
    });
  }, []);

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
        <h3>Top Products</h3>
        <div className="row mt-5">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
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

const ProductCard = ({ product }) => (
  <div className="col-md-6 mb-4">
    <div className="d-flex border rounded p-3">
      <img
        src={product.image}
        alt={product.product_name}
        className="me-3"
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <div>
        <NavLink to={`/products/more-info/${product.id}`}>
          <h5>{product.product_name}</h5>
        </NavLink>
        <p>{product.product_description}</p>
        <p>{product.product_category}</p>
        <p>
          <strong>Price:</strong> ₹{product.product_unit_price} /
          {product.product_unit} <br />
          <strong>minimum Order Qty </strong> :{product.product_qty} /{" "}
          {product.product_unit}
        </p>
        <div>
          <button className="btn btn-primary btn-sm me-2">Get Quotes</button>
          <button className="btn btn-danger btn-sm">Farmer Details</button>
        </div>
      </div>
    </div>
  </div>
);
