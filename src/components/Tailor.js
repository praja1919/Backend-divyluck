import React from 'react';
import './FashionCards.css';

const FashionCards = () => {
  const handleCardClick = (category) => {
    // Implement navigation or state update based on the category
    console.log(`Navigating to ${category} section`);
  };

  return (
    <div className="fashion-cards-container">
      <h1 className="fashion-heading">Explore Our Fashion Designers</h1>
      <div className="cards-wrapper">
        <div
          className="fashion-card"
          onClick={() => handleCardClick('men')}
        >
          <div className="card-content">
            <img
              src="https://via.placeholder.com/300x400?text=Men's+Fashion"
              alt="Men's Fashion"
              className="card-image"
            />
            <div className="card-overlay">
              <h2>Men's Fashion</h2>
              <p>Elegance Redefined</p>
            </div>
          </div>
        </div>
        <div
          className="fashion-card"
          onClick={() => handleCardClick('women')}
        >
          <div className="card-content">
            <img
              src="https://via.placeholder.com/300x400?text=Women's+Fashion"
              alt="Women's Fashion"
              className="card-image"
            />
            <div className="card-overlay">
              <h2>Women's Fashion</h2>
              <p>Grace in Every Thread</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionCards;
