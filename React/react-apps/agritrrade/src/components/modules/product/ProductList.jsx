// ProductList.jsx

import React, { useEffect, useState } from "react";
import "./productlist.css";
import Header from "../dashboard/farmer/layout/Header";
import { useNavigate } from "react-router-dom";
import { userApiService } from "../../../api/userApi";
import { toast } from "react-toastify";
import ModalContainer from "../../modals/ModalContainer";
import ShowImages from "./ShowImages";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isEnable, setEnable] = useState(false);

  const [imagesArr, setImageArr] = useState([]);

  useEffect(function () {
    const farmer_id = JSON.parse(window.localStorage.getItem("session.data"))[
      "id"
    ];
    userApiService.getFarmerProducts(farmer_id, function (data) {
      setProducts(data);
    });
  }, []);

  console.log("data", products);

  function deleteProducts(product_id, index) {
    const status = window.confirm("Do you want Really want to Delete ?");
    if (status) {
      userApiService.deleteProducts(product_id, function (data) {
        products.splice(index, 1);
        toast.success("Product Deleted Successfully");
        const farmer_id = JSON.parse(
          window.localStorage.getItem("session.data")
        )["id"];
        userApiService.getFarmerProducts(farmer_id, function (data) {
          setProducts(data);
        });
      });
    } else {
      toast.error("Product Not Deleted");
    }
  }

  function getUploadedImages(product_id) {
    userApiService.getUploadImages(
      product_id,
      function (ImagesData) {
        setEnable(true);
        setImageArr(ImagesData);
      },
      function () {
        toast.error("No Images Found");
        setEnable(false);
        setImageArr([]);
      }
    );
  }

  return (
    <React.Fragment>
      <Header />
      <ModalContainer
        modalTitle={"Product Images"}
        modalBody={<ShowImages imagesArr={imagesArr} />}
        closeTitle={"close"}
        enableSuccessButton={false}
        successTitle={"exit"}
        checkEnable={isEnable}
        setBtnEnable={setEnable}
      />
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-3">
          <h4>Product List</h4>
          <button
            className="btn btn-agriculture"
            onClick={() => {
              navigate("/farmer/manage-products/add");
            }}
          >
            Add Product
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="bg-agriculture text-white">
              <tr>
                <th>SR No.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>In Stock </th>
                <th>Action</th>
                <th>Manage Images</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.id}</td>
                  <td>{product.product_name}</td>
                  <td>{product.product_description}</td>
                  <td>{product.product_category}</td>
                  <td>
                    {product.product_qty} {product.product_unit}
                  </td>
                  <td>{product.product_unit_price} INR</td>
                  <td>
                    {product.product_isAvailable ? (
                      <span className="badge bg-success">Available</span>
                    ) : (
                      <span className="badge bg-danger">Out of Stock</span>
                    )}
                  </td>
                  <td>
                    <button className="badge bg-info">Edit</button>
                    <button
                      className="badge bg-danger"
                      onClick={(e) => {
                        deleteProducts(product.id, index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="badge bg-success"
                      onClick={(e) => {
                        navigate(
                          "/farmer/manage-products/upload-image/" + product.id
                        );
                      }}
                    >
                      Upload Images
                    </button>
                    {product.is_image_uploaded ? (
                      <button
                        className="badge bg-success"
                        onClick={(e) => {
                          getUploadedImages(product.id);
                        }}
                      >
                        View Images
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductList;
