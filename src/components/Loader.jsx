import React from "react";
import "../css/Loader.css"; // Bu dosyada yukarıdaki CSS varsa

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
}
