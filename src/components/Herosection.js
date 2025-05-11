import React, { useState } from 'react';
import './Herosection.css';
import mendress from './assests/mendress.webp';
import womenTailor from './assests/womendress.webp'; // ✅ Import your image

const HeroSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            Crafting Emotions,<br />
            Tailoring Memories
          </h1>
        </div>
        <div className="hero-right">
          <video
            className="hero-video"
            src="https://richardgeorge.uk/wp-content/uploads/2024/05/RG-SS24-Home.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <div className="marquee-container">
        <p className="marquee-text">
          - Tailoring by Divyluck - Tailoring by Divyluck - Tailoring by Divyluck -
        </p>
      </div>

      <div className="quote-section">
        <p className="quote-text">
          Appreciation of exquisitely made attire. Here you’ll feel special, and receive a uniquely personal tailoring experience.
        </p>
        <p className="quote-signature">Divyluck</p>
      </div>


{/* Fullscreen Background Video Section */}
<div className="video-container">
  <video
    className="background-video"
    src="https://richardgeorge.uk/wp-content/uploads/2024/01/homepage1.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>
  <div className="video-overlay-text">
    <p>
      We are a tailoring company where<br />
      incredible tailoring is the by-product.<br />
      What we create is feeling and emotion…
    </p>
    <a href="/tailors" className="explore-button">Explore All Tailors</a>
  </div>
</div>


      {/* Men's Tailoring Section */}
      <div className="below-hero-container">
        <div className="video-left">
          <video
            className="below-hero-video"
            src="https://richardgeorge.uk/wp-content/uploads/2024/01/homepage2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="content-right">
          <p className="content-paragraph">
            When you commission a piece from us, we invite you to share the elation and the goosebumps created as a result of crafting a piece of beautiful tailoring that fits, that looks incredible and is, to put it simply, a work of art.
          </p>
          <p className="tailoring-label">MEN’S TAILORING</p>
          <div
            className={`zoomable-image ${isZoomed ? 'zoomed' : ''}`}
            onClick={handleImageClick}
          >
            <img
              src={mendress}
              alt="Men's Tailoring"
              className="tailoring-image"
            />
            <span className="zoom-label">Men's Tailoring</span>
          </div>
        </div>
      </div>

      {/* Women's Tailoring Section */}
      <div className="below-hero-container women-tailoring-section">
        <div className="image-left">
          <div className="tailoring-image-wrapper">
            <img
              src={womenTailor}
              alt="Women's Tailoring"
              className="tailoring-photo"
            />
            <span className="zoom-label">Women's Tailoring</span>
          </div>
        </div>
        <div className="content-right">
          <p className="content-paragraph">
            “To achieve an immaculate fit requires meticulousness in negotiating the subject's contours and silhouette.
            Sculpting made-to-measure tailoring for Women is in itself a skillful craft.”
          </p>
          <p className="quote-signature">- Esha Prajkta</p>
          <p className="tailoring-label">WOMEN’S TAILORING</p>
        </div>
      </div>
      

    </div>



  );
};

export default HeroSection;
