import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Vas.css";

const fabrics = [
  { id: 1, name: "Cotton", image: "/images/fabric1.jpg" },
  { id: 2, name: "Silk", image: "/images/fabric2.jpg" },
  { id: 3, name: "Linen", image: "/images/fabric3.jpg" },
  { id: 4, name: "Rayon", image: "/images/fabric4.jpg" },
  { id: 5, name: "Wool", image: "/images/fabric5.jpg" },
  { id: 6, name: "Georgette", image: "/images/fabric6.jpg" },
  { id: 7, name: "Organza", image: "/images/fabric7.jpg" },
  { id: 8, name: "Net", image: "/images/fabric8.jpg" },
  { id: 9, name: "Satin", image: "/images/fabric9.jpg" },
  { id: 10, name: "Muslin", image: "/images/fabric10.jpg" },
  { id: 11, name: "Velvet", image: "/images/fabric11.jpg" },
  { id: 12, name: "Polyester", image: "/images/fabric12.jpg" },
  { id: 13, name: "Khadi", image: "/images/fabric13.jpg" },
  { id: 14, name: "Corduroy", image: "/images/fabric14.jpg" },
  { id: 15, name: "Lycra", image: "/images/fabric15.jpg" },
  { id: 16, name: "Denim", image: "/images/fabric16.jpg" },
  { id: 17, name: "Jute", image: "/images/fabric17.jpg" },
  { id: 18, name: "Embroidered", image: "/images/fabric18.jpg" },
  { id: 19, name: "Chanderi", image: "/images/fabric19.jpg" },
  { id: 20, name: "Ikat", image: "/images/fabric20.jpg" },
  { id: 21, name: "Kalamkari", image: "/images/fabric21.jpg" },
  { id: 22, name: "Chikankari", image: "/images/fabric22.jpg" },
  { id: 23, name: "Kantha", image: "/images/fabric23.jpg" },
  { id: 24, name: "Handblocked", image: "/images/fabric24.jpg" },
  { id: 25, name: "Tie and Dye", image: "/images/fabric25.jpg" },
  { id: 26, name: "Brocade", image: "/images/fabric26.jpg" },
  { id: 27, name: "Dabu", image: "/images/fabric27.jpg" },
  { id: 28, name: "Ajrakh", image: "/images/fabric28.jpg" },
  { id: 29, name: "Kota Doriya", image: "/images/fabric29.jpg" },
  { id: 30, name: "Floral", image: "/images/fabric30.jpg" },
  { id: 31, name: "Plain/Solids", image: "/images/fabric31.jpg" },
  { id: 32, name: "Geometric", image: "/images/fabric32.jpg" },
  { id: 33, name: "Checks", image: "/images/fabric33.jpg" },
  { id: 34, name: "Stripes", image: "/images/fabric34.jpg" },
  { id: 35, name: "Abstract", image: "/images/fabric35.jpg" },
  { id: 36, name: "Traditional", image: "/images/fabric36.jpg" },
  { id: 37, name: "Chevron", image: "/images/fabric37.jpg" },
  { id: 38, name: "Quirky", image: "/images/fabric38.jpg" },
  { id: 39, name: "Polka Dots", image: "/images/fabric39.jpg" },
  { id: 40, name: "Paisley", image: "/images/fabric40.jpg" },
  { id: 41, name: "Modal", image: "/images/fabric41.jpg" },
  { id: 42, name: "Taffeta", image: "/images/fabric42.jpg" },
  { id: 43, name: "Tweed", image: "/images/fabric43.jpg" },
  { id: 44, name: "Crepe", image: "/images/fabric44.jpg" },
  { id: 45, name: "Quirky", image: "/images/fabric45.jpg" },
  { id: 46, name: "Batiste", image: "/images/fabric46.jpg" },
];

const VastraKosh = () => {
  const firstSet = fabrics.slice(0, 23);
  const secondSet = fabrics.slice(23);

  return (
    <div className="vastrakosh-page">
      <Container className="mt-5">
        <h4 className="section-heading mb-10 text-center fs-3">
          Choose from 30,000+ Fabric Designs
        </h4>
        <Row>
          {firstSet.map((fabric) => (
            <Col key={fabric.id} xs={6} sm={4} md={3} lg={3} className="mb-4">
              {/* Update the Link path */}
              <Link to={`/fabric/${encodeURIComponent(fabric.name)}`} style={{ textDecoration: 'none' }}>
                <Card className="fabric-card shadow-sm" style={{ cursor: "pointer" }}>
                  <Card.Img
                    variant="top"
                    src={fabric.image}
                    alt={fabric.name}
                    className="fabric-img"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="fabric-name">{fabric.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        <h4 className="section-heading mt-5 mb-4 text-center fs-3">
          Shop Fabrics By Craft
        </h4>
        <Row>
          {secondSet.map((fabric) => (
            <Col key={fabric.id} xs={6} sm={4} md={3} lg={3} className="mb-4">
              {/* Update the Link path */}
              <Link to={`/fabric/${encodeURIComponent(fabric.name)}`} style={{ textDecoration: 'none' }}>
                <Card className="fabric-card shadow-sm" style={{ cursor: "pointer" }}>
                  <Card.Img
                    variant="top"
                    src={fabric.image}
                    alt={fabric.name}
                    className="fabric-img"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="fabric-name">{fabric.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default VastraKosh;
