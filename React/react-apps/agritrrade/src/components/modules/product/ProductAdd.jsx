import React, { useState } from "react";
import "./addproduct.css";
import Header from "../dashboard/farmer/layout/Header";
import { userApiService } from "../../../api/userApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState({
    productName: {
      hasError: false,
      errorMessage: "",
      value: "",
      style: "",
    },
    productDescription: {
      hasError: false,
      errorMessage: "",
      value: "",
      style: "",
    },
    productCategory: {
      hasError: false,
      errorMessage: "",
      value: "",
      style: "",
    },
    productQty: {
      hasError: false,
      errorMessage: "",
      value: 0,
      style: "",
    },
    productUnit: {
      hasError: false,
      errorMessage: "",
      value: "",
      style: "",
    },
    unitPrice: {
      hasError: false,
      errorMessage: "",
      value: 0,
      style: "",
    },
    isAvailable: {
      hasError: false,
      errorMessage: "",
      value: false,
      style: "",
    },
  });

  const ValidationsRules = {
    nameValidation: function (e) {
      if (e.target.value.trim() === "") {
        return true;
      }
      return false;
    },
    descriptionValidation: function (e) {
      if (e.target.value.trim() === "") {
        return true;
      }
      return false;
    },
    CatagoryValidation: function (e) {
      if (e.target.value.trim() === "") {
        return true;
      }
      return false;
    },
    qtyValidation: function (e) {
      if (e.target.value.trim() === "") {
        return true;
      } else if (e.target.value.trim() <= 0) {
        return true;
      }
      return false;
    },
    qtyUnitValidation: function (e) {
      if (e.target.value.trim() === "") {
        return true;
      }
      return false;
    },
    qtyPriceValidation: function (e) {
      if (e.target.value.trim() === "") {
        return true;
      } else if (e.target.value.trim() <= 0) {
        return true;
      }
      return false;
    },
    isAvailableValidation: function (e) {
      if (!e.target.checked) {
        window.alert(products.isAvailable.errorMessage);
        return true;
      }
      return false;
    },
  };

  function addProduct(e) {
    userApiService.AddProduct(
      {
        product_name: products.productName.value,
        product_description: products.productDescription.value,
        product_category: products.productCategory.value,
        product_qty: products.productQty.value,
        product_unit: products.productUnit.value,
        product_unit_price: products.unitPrice.value,
        product_isAvailable: products.isAvailable.value,
        fk_farmer_id: JSON.parse(window.localStorage.getItem("session.data"))[
          "id"
        ],
        created_at: new Date().toString(),
        updated_at: null,
        is_image_uploaded: false,
      },
      function (data) {
        if (data != null) {
          toast.success("Product Created Succesfully");
          setTimeout(() => {
            navigate("/farmer/manage-products/list");
          }, 3000);
        }
      }
    );
  }

  console.log("formdata========>", products);
  return (
    <React.Fragment>
      <Header />
      <div className="container mt-5 add-product-form">
        <div className="card shadow">
          <div className="card-header bg-agriculture text-white">
            <h4 className="mb-0">Add New Product</h4>
          </div>
          <div className="card-body">
            <form>
              {/* Product Name */}
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product name"
                  style={{
                    border: products.productName.hasError
                      ? products.productName.style
                      : "",
                  }}
                  value={products.productName.value}
                  onChange={(e) => {
                    setProducts((prevState) => {
                      return {
                        ...prevState,
                        productName: {
                          value: e.target.value,
                          hasError: ValidationsRules.descriptionValidation(e),
                          errorMessage: "Name is Required",
                          style: "2px solid red",
                        },
                      };
                    });
                  }}
                />
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {products.productName.hasError
                    ? products.productName.errorMessage
                    : ""}
                </span>
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter description"
                  style={{
                    border: products.productDescription.hasError
                      ? products.productDescription.style
                      : "",
                  }}
                  value={products.productDescription.value}
                  onChange={(e) => {
                    setProducts((prevState) => {
                      return {
                        ...prevState,
                        productDescription: {
                          value: e.target.value,
                          hasError: ValidationsRules.descriptionValidation(e),
                          errorMessage: "Description is Required",
                          style: "2px solid red",
                        },
                      };
                    });
                  }}
                ></textarea>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {products.productDescription.hasError
                    ? products.productDescription.errorMessage
                    : ""}
                </span>
              </div>

              {/* Category */}
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  style={{
                    border: products.productCategory.hasError
                      ? products.productCategory.style
                      : "",
                  }}
                  value={products.productCategory.value}
                  onChange={(e) => {
                    setProducts((prevState) => {
                      return {
                        ...prevState,
                        productCategory: {
                          value: e.target.value,
                          hasError: ValidationsRules.CatagoryValidation(e),
                          errorMessage: "Category is Required",
                          style: "2px solid red",
                        },
                      };
                    });
                  }}
                >
                  <option value={""}>-- Select Category --</option>
                  <option>beverages</option>
                  <option>crops</option>
                  <option>grains</option>
                  <option>cereals</option>
                  <option>fruits</option>
                  <option>vegetables</option>
                  <option>other</option>
                </select>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {products.productCategory.hasError
                    ? products.productCategory.errorMessage
                    : ""}
                </span>
              </div>

              {/* Quantity + Unit + Price */}
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="e.g. 10"
                    style={{
                      border: products.productQty.hasError
                        ? products.productQty.style
                        : "",
                    }}
                    value={products.productQty.value}
                    onChange={(e) => {
                      setProducts((prevState) => {
                        return {
                          ...prevState,
                          productQty: {
                            value: e.target.value,
                            hasError: ValidationsRules.qtyValidation(e),
                            errorMessage:
                              "Qty is Required or Invalid Value supplied",
                            style: "2px solid red",
                          },
                        };
                      });
                    }}
                  />
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {products.productQty.hasError
                      ? products.productQty.errorMessage
                      : ""}
                  </span>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Quantity Unit</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. kg"
                    style={{
                      border: products.productUnit.hasError
                        ? products.productUnit.style
                        : "",
                    }}
                    value={products.productUnit.value}
                    onChange={(e) => {
                      setProducts((prevState) => {
                        return {
                          ...prevState,
                          productUnit: {
                            value: e.target.value,
                            hasError: ValidationsRules.qtyUnitValidation(e),
                            errorMessage: "Unit is Required",
                            style: "2px solid red",
                          },
                        };
                      });
                    }}
                  />
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {products.productUnit.hasError
                      ? products.productUnit.errorMessage
                      : ""}
                  </span>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Unit Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="e.g. 50"
                    style={{
                      border: products.unitPrice.hasError
                        ? products.unitPrice.style
                        : "",
                    }}
                    value={products.unitPrice.value}
                    onChange={(e) => {
                      setProducts((prevState) => {
                        return {
                          ...prevState,
                          unitPrice: {
                            value: e.target.value,
                            hasError: ValidationsRules.qtyPriceValidation(e),
                            errorMessage:
                              "Unit Price is Required and should be valid",
                            style: "2px solid red",
                          },
                        };
                      });
                    }}
                  />
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {products.unitPrice.hasError
                      ? products.unitPrice.errorMessage
                      : ""}
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="isAvailableSwitch"
                  value={products.isAvailable.value}
                  checked={products.isAvailable.value}
                  onChange={(e) => {
                    setProducts((prevState) => {
                      return {
                        ...prevState,
                        isAvailable: {
                          value: e.target.checked,
                          hasError: ValidationsRules.isAvailableValidation(e),
                          errorMessage: "Stock Must be available",
                          style: "2px solid red",
                        },
                      };
                    });
                  }}
                />
                <label className="form-check-label" htmlFor="isAvailableSwitch">
                  Available for Sale
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="btn btn-agriculture"
                onClick={addProduct}
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductAdd;
