// EthnicWearCard.jsx
import React from 'react';
import './Ethenicard.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Etheniccards = () => {
  return (
    <div className="fashion-card">
      <div className="left-section">
        <img 
          src="./assests/mainmodel.jpg" 
          alt="Main model" 
          className="main-image" 
        />
      </div>

      <div className="right-section">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          className="swiper-container"
        >
          <SwiperSlide>
            <img src="./assests/model1.jpg" alt="Slide 1" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assests/model2.jpg" alt="Slide 2" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assests/model3.jpg" alt="Slide 3" className="slide-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assests/model4.jpg" alt="Slide 4" className="slide-img" />
          </SwiperSlide>
        </Swiper>

        <div className="text-section">
          <h1>Royal Ethnic Wear</h1>
          <p>Redefining festive wear for the modern queen.</p>
          <button className="view-btn">VIEW STYLES</button>
        </div>

        {/* Your extra card pasted below here */}
        <div style={{
          width: '300px',
          height: '450px',
          backgroundColor: '#fff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginTop: '20px' // Added margin for gap
        }}>
          <img 
            src="your-image-path.jpg" 
            alt="ethnic dress" 
            style={{
              width: '100%',
              height: '80%',
              objectFit: 'cover',
            }} 
          />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '10px',
          }}>
            <button style={{
              padding: '10px 20px',
              borderRadius: '20px',
              backgroundColor: '#eee',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}>
              VIEW STYLES
            </button>
          </div>
        </div>
        {/* End of extra card */}
        
      </div>
    </div>
  );
};

export default Etheniccards;
