import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'; // import useNavigate
import './ExploreDesigner.css'; // Your styles
=======
import { useNavigate } from 'react-router-dom';
import './Alldesigner.css';
>>>>>>> 368a4f6379dadd148a51318932366a4359c4b01e

function AllDesigner() {
  const [tailors, setTailors] = useState([]);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const navigate = useNavigate(); // Initialize navigate
=======
  const navigate = useNavigate();

  // Inspirational fashion quotes
  const fashionQuotes = [
    "Fashion is the armor to survive the reality of everyday life.",
    "Style is a way to say who you are without having to speak.",
    "Fashion is about dreaming and making other people dream.",
    "What you wear is how you present yourself to the world.",
    "Elegance is the only beauty that never fades.",
    "Fashion is the most powerful art there is. It's movement, design and architecture all in one.",
  ];
>>>>>>> 368a4f6379dadd148a51318932366a4359c4b01e

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
<<<<<<< HEAD
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
=======
    navigate(`/tailor/${id}`);
  };

  // Function to get a random quote
  const getRandomQuote = () => {
    return fashionQuotes[Math.floor(Math.random() * fashionQuotes.length)];
  };

  return (
    
    <div className="tailors-container">
      <div className="page-header">
        <h1 className="page-title">Meet Our Master Designers</h1>
        <p className="page-subtitle">Where Thread Meets Vision</p>
      </div>

      <div className="quote-box">
        <p className="inspiration-quote">"{getRandomQuote()}"</p>
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Discovering talented designers...</p>
        </div>
      ) : (
        <div className="designers-grid">
          {tailors.map((tailor, index) => (
            <div 
              key={tailor._id} 
              className={`designer-card ${index % 2 === 0 ? 'left-layout' : 'right-layout'}`}
              style={{
                background: `linear-gradient(135deg, 
                  ${index % 3 === 0 ? '#f5f7fa, #c3cfe2' : 
                   index % 3 === 1 ? '#e0c3fc, #8ec5fc' : 
                   '#a1c4fd, #c2e9fb'})`
              }}
            >
              <div className="designer-signature">
                <div className="signature-name">{tailor.name}</div>
                <div className="signature-style">{tailor.specialty || 'Custom Couture'}</div>
              </div>
              
              <div className="designer-details">
                <h2 className="designer-shopname">{tailor.shopName || `${tailor.name}'s Atelier`}</h2>
                
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span className="detail-text">{tailor.city}, {tailor.location}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-icon">💰</span>
                  <span className="detail-text">{tailor.pricingModel || 'Custom pricing'}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-icon">✂️</span>
                  <span className="detail-text">{tailor.specialty || 'Bespoke tailoring'}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span className="detail-text">{tailor.experience || '5'}+ years mastering the craft</span>
                </div>
                
                <button 
                  className="explore-btn" 
                  onClick={() => handleExploreClick(tailor._id)}
                >
                  <span>Discover Collection</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
>>>>>>> 368a4f6379dadd148a51318932366a4359c4b01e
      )}
    </div>
  );
}

<<<<<<< HEAD
export default AllDesigner;
=======
export default AllDesigner;
>>>>>>> 368a4f6379dadd148a51318932366a4359c4b01e
