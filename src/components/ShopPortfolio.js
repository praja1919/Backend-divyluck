import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ShopPortfolio.css'; // optional for styling

const ShopPortfolio = () => {
  const { shopId } = useParams();
  const [shopInfo, setShopInfo] = useState(null);      // for shop details
  const [categories, setCategories] = useState([]);    // for fabric categories
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch shop info (replace the URL with your actual shops API endpoint)
        const shopRes = await axios.get(`http://localhost:5000/api/shops/all`);
        const allShops = shopRes.data;
const currentShop = allShops.find(shop => shop._id === shopId);
setShopInfo(currentShop);

        // Fetch fabric categories for that shop
        const fabricRes = await axios.get(`http://localhost:5000/api/fabrics/shop/${shopId}`);
        setCategories(fabricRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load shop data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [shopId]);

  if (loading) return <div className="loading">Loading shop portfolio...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!shopInfo) return <div className="no-shop">Shop not found</div>;

  return (
    <div className="portfolio-container">
      <h1>{shopInfo.shopName} Portfolio</h1>
      <p><strong>Owner:</strong> {shopInfo.owner}</p>
      <p><strong>Email:</strong> {shopInfo.email}</p>
      <p><strong>Contact:</strong> {shopInfo.contact}</p>
      <p><strong>Location:</strong> {shopInfo.location}</p>

      {categories.length > 0 ? (
        <div className="categories-portfolio">
          <h3>Fabric Categories:</h3>
          {categories.map((cat, idx) => (
            <div key={idx} className="category-block">
              <h4>{cat.categoryName}</h4>
              <ul>
                {cat.subtypes.map((sub, subIdx) => (
                  <li key={subIdx}>
                    <strong>{sub.name}</strong> - ₹{sub.price}
                    <div className="image-gallery">
                      {sub.images && sub.images.map((img, i) => (
                        <img
                          key={i}
                          src={`http://localhost:5000/uploads/portfolio/${img}`} // ✅ correct
                          alt={`${sub.name}-${i}`}
                          className="portfolio-image"
                        />

                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No fabric categories uploaded yet.</p>
      )}
    </div>
  );
};

export default ShopPortfolio;
