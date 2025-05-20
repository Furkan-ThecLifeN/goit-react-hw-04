import React from "react";
import "../css/ImageCard.css"

function ImageCard({ image, onClick }) {
  return (
    <li>
      <div onClick={() => onClick(image)} style={{ cursor: "pointer" }}>
        <img
          src={image.urls.small}
          alt={image.alt_description || "Image"}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </li>
  );
}

export default ImageCard;
