import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ReactModal from "react-modal";
import { Toaster } from "react-hot-toast";
import "./App.css";

ReactModal.setAppElement("#root");

const ACCESS_KEY = "X1TfFvCJmEDfGg3ppW7DvUVJbC4n-sj192VyQyD8Lpo";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchImages = async (searchQuery, pageNumber) => {
    if (!searchQuery) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${pageNumber}&per_page=12&client_id=${ACCESS_KEY}`
      );
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();

      setImages((prevImages) =>
        pageNumber === 1 ? data.results : [...prevImages, ...data.results]
      );
      setTotalPages(data.total_pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === query) return;
    setQuery(searchTerm);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (!query) return;
    fetchImages(query, page);
  }, [query, page]);

  const handleLoadMore = () => setPage((prev) => prev + 1);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Toaster position="top-center" />
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}

      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={closeModal} />
        )}
      </ReactModal>
    </>
  );
}
