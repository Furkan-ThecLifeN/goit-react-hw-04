import React from "react";
import "../css/ImageGallery.css"

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="image-gallery">
      {images.map((image, index) => (
        <li
          key={`${image.id}-${index}`} // Benzersiz key
          onClick={() => onImageClick(image)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={image.urls.thumb}
            alt={image.alt_description || "Image"}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}
