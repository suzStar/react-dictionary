import React from "react";
import "./Photos.css";

function Photos(props) {
  return (
    <div className="Photos imageContainer">
      {props.photos.photos.map(function (photo, index) {
        return (
          <div key={index}>
            <a href={photo.url} target="_blank" rel="noreferrer">
              <img src={photo.src.landscape} alt={photo.alt}></img>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Photos;