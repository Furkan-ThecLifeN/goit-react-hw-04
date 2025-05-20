import React from "react";
import "../css/LoadMoreBtn.css"

export default function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <button onClick={onClick}>Daha Fazla Yükle</button>
    </div>
  );
}
