import React, { useEffect, useState } from 'react';
import './ExploreDesigner.css';

function ExploreTailors() {
  const [tailors, setTailors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tailors?gender=female'); // Your API endpoint
        const data = await response.json();
        setTailors(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load tailors');
        setLoading(false);
      }
    };

    fetchTailors();
  }, []); // Empty dependency array means this runs once when the component is mounted

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tailors-container">
      <h2 className="tailors-title">Explore Lady Tailors</h2>
      {tailors.map((tailor, index) => (
        <div
          key={tailor._id} // Assuming your tailor has a unique _id field
          className={`tailor-card ${index % 2 === 0 ? 'left-img' : 'right-img'}`}
        >
          <div className="tailor-image">
            <img src={tailor.image} alt={tailor.name} />
          </div>
          <div className="tailor-info">
            <h2>{tailor.name}</h2>
            <p><strong>📍 Location:</strong> {tailor.place}</p>
            <p><strong>💰 Rate:</strong> {tailor.rate}</p>
            <p><strong>🧵 Specialty:</strong> Bridal, Party wear, Casuals</p>
            <p><strong>📅 Experience:</strong> {tailor.experience} years</p>
            <button className="explore-btn"><span>Explore</span></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreTailors;
