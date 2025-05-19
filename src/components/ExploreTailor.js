import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploreDesigner.css';

function ExploreTailor() {
  const [menTailors, setMenTailors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tailors/gender/Male');
        const data = await response.json();
        setMenTailors(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load tailors');
        setLoading(false);
      }
    };

    fetchTailors();
  }, []);

  const handleExploreClick = (id) => {
    navigate(`/tailor/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="tailors-container">
      <h2 className="tailors-title">Explore Gents Tailors</h2>
      {menTailors.map((tailor, index) => (
        <div
          key={tailor._id}
          className={`tailor-card ${index % 2 === 0 ? 'left-img' : 'right-img'}`}
        >
          <div className="tailor-image">
            <img src={tailor.profilePicture || '/default.jpg'} alt={tailor.name} />
          </div>
          <div className="tailor-info">
            <h2>{tailor.shopName || tailor.name}</h2>
            <p><strong>📍 Location:</strong> {tailor.city}, {tailor.location}</p>
            <p><strong>💰 Rate:</strong> {tailor.pricingModel || 'N/A'}</p>
            <p><strong>🧥 Specialty:</strong> {tailor.specialty || 'Sherwanis, Suits, Ethnic Wear'}</p>
            <p><strong>📅 Experience:</strong> {tailor.experience}+ years</p>
            <button className="explore-btn" onClick={() => handleExploreClick(tailor._id)}>
              <span>Explore</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreTailor;