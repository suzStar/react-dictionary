import React from "react";
//import "./Images.css";

function Images(props) {
  console.log(props.photos);
  return (
    <div className="imageContainer">
      {props.photos.photos.map(function (photo, index) {
        return (
          <div className="grid-item" key={index}>
            <a href={photo.url} target="_blank" rel="noreferrer">
              <img
                className="img-fluid"
                src={photo.src.landscape}
                alt={photo.alt}
              ></img>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Images;
