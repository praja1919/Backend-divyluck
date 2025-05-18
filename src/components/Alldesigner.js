import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import './ExploreDesigner.css'; // Your styles

function AllDesigner() {
  const [tailors, setTailors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/tailors/')
      .then((response) => {
        setTailors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching tailors:', error);
        setLoading(false);
      });
  }, []);

  const handleExploreClick = (id) => {
    navigate(`/tailor/${id}`);  // Navigate to TailorPortfolio with tailor id
  };

  return (
    <div className="tailors-container">
      <h2 className="tailors-title">Explore All Designers</h2>
      {loading ? (
        <p>Loading tailors...</p>
      ) : (
        tailors.map((tailor, index) => (
          <div
            key={tailor._id}
            className={`tailor-card ${index % 2 === 0 ? 'left-img' : 'right-img'}`}
          >
            <div className="tailor-image">
              <img
                src={tailor.profilePicture || '/default.jpg'}
                alt={tailor.name}
              />
            </div>
            <div className="tailor-info">
              <h2>{tailor.shopName || tailor.name}</h2>
              <p><strong>📍 Location:</strong> {tailor.city}, {tailor.location}</p>
              <p><strong>💰 Rate:</strong> {tailor.pricingModel || 'N/A'}</p>
              <p><strong>🧥 Specialty:</strong> {tailor.specialty || 'Custom stitching'}</p>
              <p><strong>📅 Experience:</strong> {tailor.experience}+ years</p>
              <button className="explore-btn" onClick={() => handleExploreClick(tailor._id)}>
                <span>Explore</span>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AllDesigner;
