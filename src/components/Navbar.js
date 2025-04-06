      import React, { useEffect, useState } from "react";
      import { Container, Nav, Navbar, Button } from "react-bootstrap";
      import { FaInstagram, FaFacebookF } from "react-icons/fa";
      import { Link } from "react-router-dom";
      import "bootstrap/dist/css/bootstrap.min.css";
      import "./Nav.css";

      const Header = () => {
        const [animate, setAnimate] = useState(false);

        useEffect(() => {
          const timer = setTimeout(() => {
            setAnimate(true);
          }, 2000);
          return () => clearTimeout(timer);
        }, []);

        return (
          <>
            {/* Top Hero Section */}
            <div
              className="hero-background"
              style={{
                backgroundImage: `url('/pho1.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh",
                position: "relative",
              }}
            >
              <div className="overlay"></div>

              <div className={`brand-name ${animate ? "move-top" : ""}`}>
                DIVYLUCK..
              </div>

              <Navbar
                expand="lg"
                className="py-3 px-4"
                style={{
                  borderRadius: "25px",
                  margin: "0 auto",
                  maxWidth: "95%",
                  position: "relative",
                  zIndex: 3,
                  marginTop: animate ? "100px" : "0px",
                  transition: "margin-top 1s ease",
                }}
              >
                <Container fluid>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-2 my-lg-0 gap-4 text-dark nav-frame" navbarScroll>
                      <Link to="/services" className="nav-link custom-link">Services</Link>
                      <Link to="/shringar" className="nav-link custom-link">Shringar Shilpi</Link>
                      <Link to="/vastrakosh" className="nav-link custom-link">Vastra Kosh</Link>
                      <Link to="/resources" className="nav-link custom-link">Resources</Link>
                      <Link to="/contact" className="nav-link custom-link">Contact</Link>
                    </Nav>

                    <div className="d-flex gap-3">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ fontSize: "20px", color: "black" }} />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF style={{ fontSize: "20px", color: "black" }} />
                      </a>
                    </div>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <h4
        style={{
          textAlign: 'center',
          fontFamily: '"Dancing Script"',
          fontSize: '28px',
          fontWeight: '500',
          color: '#333',
          marginTop: '10px',
          marginBottom: '20px',
        }}
      >
        “For culture to be relevant,<br />
        <hr style={{ width: '60%', margin: '10px auto', borderTop: '2px dashed #555' }} />
        it needs to be dynamic.”
      </h4>

            {/* Second Banner Section */}
            <div
              className="second-banner d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                backgroundImage: `url('/1.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh",
                position: "relative",
                padding: "0 20px",
                marginBottom: '80px'
                
              }}
            >
              <div
                className="overlay"
                style={{
                  background: "rgba(39, 1, 1, 0.5)",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  borderRadius: "0",
                }}
              ></div>

              <div style={{ zIndex: 2 }}>
                <h1 style={{ color: "white", fontWeight: "bold", fontSize: "36px" }}>
                  Explore the World of Elegance
                </h1>
                <Button
                  variant="light"
                  className="mt-4 px-4 py-2"
                  style={{
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "16px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  Explore Now
                </Button>
              </div>
            </div>

            <h4
        style={{
          textAlign: 'center',
          fontFamily: '"Dancing Script"',
          fontSize: '28px',
          fontWeight: '500',
          color: '#333',
          marginTop: '10px',
          marginBottom: '30px',
        }}
      >
        “For culture to be relevant,<br />
        <hr style={{ width: '60%', margin: '10px auto', borderTop: '2px dashed #555' }} />
        it needs to be dynamic.”
      </h4>

            <div
        className="3ban d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `url('/2.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          position: "relative",
          padding: "0 20px",
        }}
      >
        {/* Overlay */}
        <div
          className="overlay"
          style={{
            background: "rgba(19, 1, 23, 0.5)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 1,
            borderRadius: "0",
          }}
        ></div>

        {/* Content */}
        <div style={{ zIndex: 2 }}>     
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "36px",
              textShadow: "1px 1px 8px rgba(0,0,0,0.6)",
            }}
          >
            Celebrate Culture With Style
          </h1>
          <Button
            variant="light"
            className="mt-4 px-4 py-2"
            style={{
              borderRadius: "25px",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            Discover More
          </Button>
        </div>
      </div>

      <div className="shimmer-text-section">
  <div className="horizontal-line"></div>
  <p className="shimmer-text">Each Thread, Each Stroke — A Story Told</p>
  <div className="horizontal-line"></div>
</div>


<div className="sabyasachi-card-container">
  <div className="sabyasachi-card">
    <img src="/sew.jpg" alt="Craft Item 1" className="card-img" />
    <div className="card-overlay">
      <h2>Regal Drapes</h2>
      <p>Handwoven elegance with stories in every thread.</p>
      <button className="view-button">View</button>
    </div>
  </div>

  <div className="sabyasachi-card">
    <img src="/fab.jpg" alt="Craft Item 2" className="card-img" />
    <div className="card-overlay">
      <h2>Timeless Trinkets</h2>
      <p>Jewels that echo history, handcrafted with soul.</p>
      <button className="view-button">View</button>
    </div>
  </div>
</div>



          </>
        );
      };

      export default Header;
