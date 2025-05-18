import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Taiimag.css";

const categories = ["Wedding Wear", "Party Wear", "Casual Wear"];

const ImageUploadForm = () => {
  const { id: tailorId } = useParams();
  const [formData, setFormData] = useState(
    categories.map(() => [{ image: null, caption: "" }])
  );
  const [message, setMessage] = useState("");

  // Handle image and caption changes
  const handleChange = (categoryIndex, imageIndex, field, value) => {
    const updatedData = [...formData];
    updatedData[categoryIndex][imageIndex][field] =
      field === "image" ? value[0] : value;
    setFormData(updatedData);
  };

  // Add image field under a specific category
  const addImageField = (categoryIndex) => {
    const updatedData = [...formData];
    updatedData[categoryIndex].push({ image: null, caption: "" });
    setFormData(updatedData);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tailorId) {
      setMessage("Tailor ID not found.");
      return;
    }

    const form = new FormData();

    let index = 0;
    formData.forEach((categoryImages, categoryIndex) => {
      const category = categories[categoryIndex];

      categoryImages.forEach((item) => {
        if (item.image) {
          form.append("images", item.image);
          form.append(`caption_${index}`, item.caption);
          form.append(`category_${index}`, category);
          index++;
        }
      });
    });

    try {
      await axios.post(
        `http://localhost:5000/api/images/upload/${tailorId}`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage("Images uploaded successfully!");
      // Reset form
      setFormData(categories.map(() => [{ image: null, caption: "" }]));
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Failed to upload images.");
    }
  };

  return (
    <div className="form-container">
      <h2>Upload Portfolio Images</h2>
      <form onSubmit={handleSubmit}>
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-section">
            <h3>{category}</h3>
            {formData[categoryIndex].map((item, imageIndex) => (
              <div key={imageIndex} className="image-field">
                <label>Image {imageIndex + 1}</label>
                <input
                  type="file"
                  onChange={(e) =>
                    handleChange(categoryIndex, imageIndex, "image", e.target.files)
                  }
                  accept="image/*"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter caption"
                  value={item.caption}
                  onChange={(e) =>
                    handleChange(categoryIndex, imageIndex, "caption", e.target.value)
                  }
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addImageField(categoryIndex)}
              className="add-more-btn"
            >
              + Add More to {category}
            </button>
            <hr />
          </div>
        ))}

        <button type="submit" className="submit-btn">Upload All Images</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ImageUploadForm;
