import React from "react";

function ShowImages({ imagesArr }) {
  return (
    <React.Fragment>
      {imagesArr.map(function (item, index) {
        return (
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
        );
      })}
    </React.Fragment>
  );
}

export default ShowImages;
