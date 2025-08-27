import React, { useState } from "react";
import "./imageadd.css";
import Header from "../dashboard/farmer/layout/Header";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { userApiService } from "./../../../api/userApi";
import { useNavigate } from "react-router-dom";

function ProductImageAdd() {
  const navigate = useNavigate();
  const { product_id } = useParams();

  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);

  console.log("products id", product_id);

  async function handleImageUpload(event) {
    const files = Array.from(event.target.files);

    //in order to store the Images we need the base64 of the Images
    const toBase64 = function (file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          return resolve(reader.result);
        };
        reader.onerror = function (error) {
          return reject(error);
        };
      });
    };

    //Promise : then then and catch
    const base64Images = await Promise.all(
      files.map(function (file) {
        return toBase64(file);
      })
    );

    const updatedImages = [...images, ...base64Images];
    setImages(updatedImages);

    //Logic for Main Image set
    // if no main is image is set then first upload that image and then set it
    if (!mainImage && base64Images.length > 0) {
      setMainImage(base64Images[0]);
    }
  }

  function handleThumbNailClick(img) {
    setMainImage(img);
  }

  function uploadImages() {
    if (images.length === 0) {
      toast.error("Images is Required");
    }

    if (images.length >= 1 && images.length <= 4) {
      userApiService.uploadImage(product_id, images, function (data, i) {
        toast.success(`${i} Image Uploaded`);

        userApiService.updateProductImageStatus(product_id, function (data) {
          setImages([]);
          setMainImage([]);
          setTimeout(function () {
            navigate("/farmer/manage-products/list");
          }, 2000);
        });
      });
    }
  }

  console.log("images", images);
  return (
    <React.Fragment>
      <Header />

      <div className="image-upload-container">
        {/* Button Handlers */}
        <div
          style={{
            height: "50px",
            width: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {images.length > 0 ? (
            <React.Fragment>
              <button
                className="btn btn-success"
                onClick={(e) => {
                  uploadImages();
                }}
              >
                Upload
              </button>
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  setImages([]);
                  setMainImage(null);
                }}
              >
                Reset
              </button>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
        {/* Button Handlers */}
        <br />
        {/* Big Upload Box */}
        <label className="big-box">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          {/* Handle the Logic of display Main Image */}
          {mainImage ? (
            <img src={mainImage} alt="Main Image" className="main-image" />
          ) : (
            <span className="plus">+</span>
          )}
        </label>
        {/* Thumbnails or small Images start*/}
        <div className="small-boxes-layout">
          {[...Array(4)].map(function (img, i) {
            return (
              <div
                className="small-box"
                key={i}
                onClick={(e) => {
                  images[i] && handleThumbNailClick(images[i]);
                }}
              >
                {images[i] && <img src={images[i]} alt={`thumb-${i}`} />}
              </div>
            );
          })}
        </div>
        {/* End of Thumbnails of small images */}
      </div>
    </React.Fragment>
  );
}

export default ProductImageAdd;
