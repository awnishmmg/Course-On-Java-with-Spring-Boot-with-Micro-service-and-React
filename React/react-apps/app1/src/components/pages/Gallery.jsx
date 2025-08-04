import React from "react";
import "./css/gallery.css";
import facebook from "../../assets/icons/icons8-facebook-100.png";
import instagram from "../../assets/icons/icons8-instagram-100.png";
import youtube from "../../assets/icons/icons8-youtube-100.png";
import linkedIn from "../../assets/icons/icons8-linkedin-100.png";

function Gallery() {
  return (
    <React.Fragment>
      <h1> Gallery Page </h1>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../../assets/images/black-window.jpg")}
                className="d-block w-100"
                alt="Black widow"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../../assets/images/iron-man.jpg")}
                className="d-block w-100"
                alt="iron-man"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../../assets/images/groot.jpg")}
                className="d-block w-100"
                alt="groot"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p>This is Gallery Page</p>
      <div className="background-layer">
        <div className="background-overlay">
          Whats Sunsets always Rises up, - Its cycle Law of Nature.
        </div>
      </div>
      <img
        className="circle-batman"
        src="https://raw.githubusercontent.com/awnishmmg/my-cdn-assets/refs/heads/master/batman.jpg"
        height={200}
        width={200}
        alt="Batman"
      />
      <p>
        {" "}
        Get connected with us :
        <img src={facebook} alt="facebook" height={50} width={50} />
        <img src={youtube} alt="facebook" height={50} width={50} />
        <img src={instagram} alt="facebook" height={50} width={50} />
        <img src={linkedIn} alt="facebook" height={50} width={50} />
      </p>
      <p>
        Loading image from public
        <img
          src="/icons/icons8-pinterest-100.png"
          alt="pintrest"
          height={50}
          width={50}
        />
      </p>
      <p>image using require : Thanos</p>
      <button className="btn btn-danger">Cancel</button>
      <button className="btn btn-success">Success</button>
      <img src={require("../../assets/images/thanos.jpg")} alt="thanos" />
    </React.Fragment>
  );
}

export default Gallery;
