import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExploreDesigner.css'; // Ensure your styles are in this file

function AllDesigner() {
  const [tailors, setTailors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching all tailors (male & female) from the API
    axios
      .get('http://localhost:5000/api/tailors') // Your backend API route here
      .then((response) => {
        setTailors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching tailors:', error);
        setLoading(false);
      });
  }, []);

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
              <button className="explore-btn"><span>Explore</span></button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AllDesigner;
