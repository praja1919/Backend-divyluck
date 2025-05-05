import React from 'react';
import face1 from './assests/face1.avif';
import face2 from './assests/face2.avif';
import face3 from './assests/face3.avif';
import face4 from './assests/face4.avif';
import face5 from './assests/face5.avif';
import face6 from './assests/face6.avif';
import face7 from './assests/face7.avif';
import face8 from './assests/face8.avif';
import './ExploreDesigner.css';

const tailors = [
  {
    id: 1,
    name: 'Meera Tailors',
    place: 'Mumbai, India',
    rate: '₹1200 / outfit',
    image: face1,
  },
  {
    id: 2,
    name: 'Sakhi Designs',
    place: 'Delhi, India',
    rate: '₹1500 / outfit',
    image: face2,
  },
  {
    id: 3,
    name: 'Nisha Tailoring House',
    place: 'Pune, India',
    rate: '₹1300 / outfit',
    image: face3,
  },
  {
    id: 4,
    name: 'Anaya Tailors',
    place: 'Bangalore, India',
    rate: '₹1100 / outfit',
    image: face4,
  },
  {
    id: 5,
    name: 'Divya Boutique',
    place: 'Chennai, India',
    rate: '₹1600 / outfit',
    image: face5,
  },
  {
    id: 6,
    name: 'Roshni Creations',
    place: 'Hyderabad, India',
    rate: '₹1700 / outfit',
    image: face6,
  },
  {
    id: 7,
    name: 'Vaidehi Stitch Studio',
    place: 'Ahmedabad, India',
    rate: '₹1400 / outfit',
    image: face7,
  },
  {
    id: 8,
    name: 'Priya Fashion Tailors',
    place: 'Kolkata, India',
    rate: '₹1250 / outfit',
    image: face8,
  },
];

function ExploreTailors() {
  return (
    <div className="tailors-container">
      <h2 className="tailors-title">Explore Lady Tailors</h2>
      {tailors.map((tailor, index) => (
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
            <p><strong>🧵 Specialty:</strong> Bridal, Party wear, Casuals</p>
            <p><strong>📅 Experience:</strong> 5+ years</p>
            <button className="explore-btn"><span>Explore</span></button>

          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreTailors;
