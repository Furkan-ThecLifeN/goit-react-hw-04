import React from "react";

export default function ImageModal({ image, onClose }) {
  return (
    <>
      <img
        src={image.urls.regular}
        alt={image.alt_description || "Image"}
        className="modal-image"
      />
      <a
        href={image.links.html}
        target="_blank"
        rel="noopener noreferrer"
        className="modal-button"
      >
        Fotoğrafı Görüntüle
      </a>
      <button
        onClick={onClose}
        className="modal-button"
        style={{ marginTop: "10px", backgroundColor: "#dc3545" }}
      >
        Kapat
      </button>
    </>
  );
}
