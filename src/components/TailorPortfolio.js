import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import './TailorPortfolio.css';

const TailorProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const [tailorData, setTailorData] = useState(location.state?.tailor || null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchTailor = async () => {
      if (!tailorData) {
        try {
          const res = await axios.get(`http://localhost:5000/api/tailors/${id}`);
          setTailorData(res.data);
        } catch (error) {
          console.error('Error fetching tailor:', error);
        }
      }
    };

    const fetchImages = async () => {
      try {
        const imagesRes = await axios.get(`http://localhost:5000/api/images/${id}`);
        setImages(imagesRes.data);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTailor();
    fetchImages();
  }, [id, tailorData]);

  const groupByCategory = (images) => {
    return images.reduce((grouped, img) => {
      const cat = img.category || 'Uncategorized';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(img);
      return grouped;
    }, {});
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (!tailorData) return <p className="loading">Tailor data not found.</p>;

  const categorizedImages = groupByCategory(images);
  const categories = ['All', ...Object.keys(categorizedImages)];
  const filteredImages = activeCategory === 'All' ? images : categorizedImages[activeCategory] || [];

  return (
    <div className="tailor-profile-container">
      <div className="tailor-header">
        <h2>{tailorData.name}'s Portfolio</h2>
        <p><strong>City:</strong> {tailorData.city}</p>
        <p><strong>Experience:</strong> {tailorData.experience}</p>
        <p><strong>Specialty:</strong> {tailorData.specialty}</p>
        <p><strong>Type:</strong> {tailorData.tailorType}</p>
        <p><strong>Pricing:</strong> {tailorData.pricingModel}</p>
      </div>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="image-gallery">
        {filteredImages.length > 0 ? (
          filteredImages.map((img) => (
            <div key={img._id} className="image-card">
              <img src={`http://localhost:5000${img.imagePath}`} alt={img.caption} />
              <p>{img.caption}</p>
            </div>
          ))
        ) : (
          <p className="no-images">No images available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default TailorProfile;
