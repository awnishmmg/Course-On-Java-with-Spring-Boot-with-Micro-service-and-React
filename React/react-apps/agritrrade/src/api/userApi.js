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
};

export { userApiService };
