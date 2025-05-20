import React from 'react';
import "../css/ErrorMessage.css"

export default function ErrorMessage({ message }) {
  return (
    <p style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>
      {message}
    </p>
  );
}
