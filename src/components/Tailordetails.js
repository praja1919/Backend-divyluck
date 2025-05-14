import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Taiimag.css";

const ImageUploadForm = () => {
  const { id: tailorId } = useParams(); // Get tailorId from URL

  const [imagesData, setImagesData] = useState([
    { images: [], caption: "", category: "" },
  ]);
  const [message, setMessage] = useState("");

  // Handle input field changes (images, caption, category)
  const handleChange = (index, field, value) => {
    const updatedImages = [...imagesData];
    updatedImages[index][field] = field === "images" ? Array.from(value) : value; // Convert FileList to array
    setImagesData(updatedImages);
  };

  // Add more image upload fields
  const addImageField = () => {
    setImagesData([...imagesData, { images: [], caption: "", category: "" }]);
  };

  // Handle uploading all images
  const handleUploadAll = async (e) => {
    e.preventDefault();

    if (!tailorId) {
      setMessage("Tailor ID not found.");
      return;
    }

    // Create FormData object
    const formData = new FormData();

    // Loop through imagesData to append images, captions, and categories
    imagesData.forEach((data, index) => {
      if (data.images.length > 0) {
        data.images.forEach((image) => formData.append("images", image)); // Multiple images
        formData.append(`caption_${index}`, data.caption); // Append caption
        formData.append(`category_${index}`, data.category); // Append category
      }
    });

    try {
      // Send POST request with tailorId in URL
      await axios.post(`http://localhost:5000/api/images/upload/${tailorId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Images uploaded successfully!");
      setImagesData([{ images: [], caption: "", category: "" }]); // Reset the form data
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Failed to upload images.");
    }
  };

  return (
    <div className="form-container">
      <h2>Upload Portfolio Images</h2>
      <form onSubmit={handleUploadAll}>
        {imagesData.map((data, index) => (
          <div key={index} className="image-field">
            <h4>Image {index + 1}</h4>

            <input
              type="file"
              onChange={(e) => handleChange(index, "images", e.target.files)}
              multiple
              required
            />
            <br />

            <input
              type="text"
              placeholder="Caption"
              value={data.caption}
              onChange={(e) => handleChange(index, "caption", e.target.value)}
              required
            />
            <br />

            <select
              value={data.category}
              onChange={(e) => handleChange(index, "category", e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Casual Wear">Casual Wear</option>
              <option value="Formal Wear">Formal Wear</option>
              <option value="Evening Wear">Evening Wear</option>
            </select>
          </div>
        ))}

        <button type="button" onClick={addImageField} className="add-more-btn">
          + Add More Images
        </button>
        <br />

        <button type="submit" className="submit-btn">Upload Images</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ImageUploadForm;
