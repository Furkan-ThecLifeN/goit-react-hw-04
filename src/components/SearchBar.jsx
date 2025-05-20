import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../css/SearchBar.css"

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Lütfen arama için bir kelime girin!");
      return;
    }
    onSubmit(query.trim());
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
}
