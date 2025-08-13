import React from "react";

function Register() {
  return (
    <React.Fragment>
      <div className="container for-section m-5">
        <div className="row mt-5 m-auto">
          <div className="col-sm-1"></div>
          <div className="col-sm-4 h-100">
            <a href="/farmerreg">
              <button>Farmer Registration</button>
            </a>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <a href="/merchantreg">
              <button>Merchant Registration</button>
            </a>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
