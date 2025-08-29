import React, { useEffect, useRef, useState } from "react";

function ModalContainer({
  modalTitle,
  modalBody,
  closeTitle,
  successTitle,
  checkEnable,
  setBtnEnable,
  enableSuccessButton,
}) {
  const modelBtn = useRef(null);

  useEffect(
    function () {
      if (checkEnable) {
        modelBtn.current.click();
      }
    },
    [checkEnable]
  );

  return (
    <React.Fragment>
      <div>
        {/* Button trigger modal */}
        <button
          ref={modelBtn}
          style={{ display: "none" }}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {modalTitle}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    setBtnEnable(!checkEnable);
                  }}
                />
              </div>
              <div className="modal-body">{modalBody}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    setBtnEnable(!checkEnable);
                  }}
                >
                  {closeTitle}
                </button>
                {enableSuccessButton ? (
                  <button type="button" className="btn btn-primary">
                    {successTitle}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalContainer;
