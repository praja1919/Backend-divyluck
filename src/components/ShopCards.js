import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Shopcards.css';

const ShopCards = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShopsWithCategories = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/shops/all');
        setShops(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching shops:', err);
        setLoading(false);
      }
    };
    fetchShopsWithCategories();
  }, []);

  if (loading) return <div className="loading">Loading shops...</div>;
  if (shops.length === 0) return <div className="no-shops">No shops found</div>;

  return (
    <div className="shop-cards-container">
      <h1 className="title">Fabric Shops</h1>
      <div className="cards-grid">
        {shops.map((shop) => (
          <div key={shop._id} className="shop-card">
            <div className="shop-info">
              <h2>{shop.shopName}</h2>
              <p><strong>Owner:</strong> {shop.owner}</p>
              <p><strong>Email:</strong> {shop.email}</p>
              <p><strong>Contact:</strong> {shop.contact}</p>
              <p><strong>Location:</strong> {shop.location}</p>
              
              {shop.categories && shop.categories.length > 0 ? (
                <div className="categories-section">
                  <h4>Fabric Categories:</h4>
                  <ul>
                    {shop.categories.map((cat, index) => (
                      <li key={index}>
                        <strong>{cat.categoryName}</strong>
                        <ul>
                          {cat.subtypes.map((sub, subIndex) => (
                            <li key={subIndex}>
                              {sub.name} - ₹{sub.price}
                              {sub.images && sub.images.length > 0 && (
                                <span> ({sub.images.length} images)</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No categories added yet</p>
              )}
            </div>
            <button 
              className="explore-btn"
              onClick={() => navigate(`/shop-images/${shop._id}`)}
            >
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCards;