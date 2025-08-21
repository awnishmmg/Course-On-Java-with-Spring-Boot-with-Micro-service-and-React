import config from "../config/config.json";

const userApiService = {
  RegisterFarmer: function (farmerFormData) {
    let api = fetch(config.API_HOST_URL + "/users", {
      headers: {
        "content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(farmerFormData),
      mode: "cors",
      method: "POST",
    });
    api
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (data) {
        console.log(data);
        if (data?.id) {
          window.alert("Farmer Register Success");
        }
      })
      .catch(function (error) {
        console.log(error);
        window.alert("Oops Error Try Later");
      });
  },
  loginFarmer: function (crendentials, gotoDashboard) {
    let api = fetch(
      config.API_HOST_URL +
        `/users?email=${crendentials.email}&password=${crendentials.password}`,
      {
        headers: {
          "content-type": "application/json;charset=utf-8",
        },
        mode: "cors",
        method: "GET",
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          gotoDashboard(data);
        } else {
          window.alert("Invalid User Name or Password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  AddProduct: function (productData, productListing) {
    let api = fetch(config.API_HOST_URL + "/products", {
      headers: {
        "content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(productData),
      mode: "cors",
      method: "POST",
    });
    api
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (data) {
        console.log(data);
        if (data?.id) {
          // window.alert("Product Added Successfully");
          productListing(data);
        }
      })
      .catch(function (error) {
        console.log(error);
        window.alert("Oops Error Try Later");
      });
  },
  getFarmerProducts: function (farmer_id, showProducts) {
    let api = fetch(
      config.API_HOST_URL + "/products/?fk_farmer_id=" + farmer_id,
      {
        headers: {
          "content-type": "application/json;charset=utf-8",
        },
      }
    );
    api
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (data) {
        console.log(data);
        if (Array.isArray(data) && data.length > 0) {
          showProducts(data);
        }
      })
      .catch(function (error) {
        console.log(error);
        window.alert("Oops Error Try Later");
      });
  },
  deleteProducts: function (product_id, refreshProductList) {
    let api = fetch(config.API_HOST_URL + "/products/" + product_id, {
      headers: {
        "content-type": "application/json;charset=utf-8",
      },
      method: "DELETE",
      mode: "cors",
    });
    api
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (data) {
        refreshProductList(data);
      })
      .catch(function (error) {
        console.log(error);
        window.alert("Oops Error Try Later");
      });
  },
};

export { userApiService };
