import React, { useEffect, useState } from "react";
import { userApiService } from "../../../api/userApi";
import { toast } from "react-toastify";

function ShowImages({ imagesArr }) {
  const [imageList, setImageList] = useState(imagesArr);

  //delete Logic of the Image
  function deleteUploadImage(image_id, index, fk_product_id) {
    const st = window.confirm("Do you really want to Delete");
    if (st) {
      const updateImages = imagesArr.filter(function (item) {
        return image_id !== item.id;
      });
      setImageList(updateImages);
      userApiService.deleteUploadImage(image_id, function () {
        toast.success(Number(index + 1), "Image Deleted Successfully");
        userApiService.getUploadImages(
          fk_product_id,
          function (data) {
            setImageList(data);
          },
          function () {
            toast.error("Cannot Delete Image Try Again Later");
          }
        );
      });
    } else {
      toast.error("Image Not deleted");
    }
  }

  return (
    <React.Fragment>
      {imageList.map(function (item, index) {
        return (
          <div className="container row col-md border border-3">
            <img
              onClick={() => {
                const newWindow = window.open(
                  "",
                  "_blank",
                  "width=1000,height=800"
                );
                newWindow.document.write(`
      <html>
        <head>
          <title>Zoomed Image</title>
          <style>
            body { margin:0; display:flex; justify-content:center; align-items:center; background:#000; }
            img { max-width:90%; max-height:90%; object-fit:contain; cursor:zoom-in; }
          </style>
        </head>
        <body>
          <img src="${item.image}" />
        </body>
      </html>
    `);
              }}
              src={item.image}
              alt={"image-" + Number(index) + 1}
              style={{
                border: "2px solid transparent",
                cursor: "pointer",
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <div className="row border border-3">
              <button className="btn btn-primary">Update</button>
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  deleteUploadImage(item.id, index, item.fk_product_id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default ShowImages;
