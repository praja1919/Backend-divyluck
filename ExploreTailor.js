import React from 'react';
import mface1 from './assests/mface1.avif';
import mface2 from './assests/mface2.avif';
import mface3 from './assests/mface3.avif';
import mface4 from './assests/mface4.avif';
import mface5 from './assests/mface5.avif';
import mface6 from './assests/mface6.avif';
import mface7 from './assests/mface7.avif';
import mface8 from './assests/mface8.avif';
import './ExploreDesigner.css'; // Reuse same CSS

const menTailors = [
  {
    id: 1,
    name: 'Raj Tailoring Co.',
    place: 'Mumbai, India',
    rate: '₹1800 / outfit',
    image: mface1,
  },
  {
    id: 2,
    name: 'The Suit Studio',
    place: 'Delhi, India',
    rate: '₹2200 / outfit',
    image: mface2,
  },
  {
    id: 3,
    name: 'Elegant Stitches',
    place: 'Pune, India',
    rate: '₹2000 / outfit',
    image: mface3,
  },
  {
    id: 4,
    name: 'The Sherwani Hub',
    place: 'Bangalore, India',
    rate: '₹2500 / outfit',
    image: mface4,
  },
  {
    id: 5,
    name: 'Man Couture',
    place: 'Chennai, India',
    rate: '₹2100 / outfit',
    image: mface5,
  },
  {
    id: 6,
    name: 'Royale Stitchers',
    place: 'Hyderabad, India',
    rate: '₹2300 / outfit',
    image: mface6,
  },
  {
    id: 7,
    name: 'Gent Tailors',
    place: 'Ahmedabad, India',
    rate: '₹1950 / outfit',
    image: mface7,
  },
  {
    id: 8,
    name: 'Elite Tailor Works',
    place: 'Kolkata, India',
    rate: '₹2400 / outfit',
    image: mface8,
  },
];

function ExploreTailor() {
  return (
    <div className="tailors-container">
      <h2 className="tailors-title">Explore Gents Tailors</h2>
      {menTailors.map((tailor, index) => (
        <div
          key={tailor.id}
          className={`tailor-card ${index % 2 === 0 ? 'left-img' : 'right-img'}`}
        >
          <div className="tailor-image">
            <img src={tailor.image} alt={tailor.name} />
          </div>
          <div className="tailor-info">
            <h2>{tailor.name}</h2>
            <p><strong>📍 Location:</strong> {tailor.place}</p>
            <p><strong>💰 Rate:</strong> {tailor.rate}</p>
            <p><strong>🧥 Specialty:</strong> Sherwanis, Formal Suits, Ethnic Wear</p>
            <p><strong>📅 Experience:</strong> 6+ years</p>
            <button className="explore-btn"><span>Explore</span></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreTailor;
