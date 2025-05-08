import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Vas.css";

const fabrics = Array.from({ length: 46 }, (_, index) => ({
  id: index + 1,
  name: `Fabric ${index + 1}`,
  image: `/images/fabric${index + 1}.jpg`, // Pull from public/images/
}));

const VastraKosh = () => {
  const firstSet = fabrics.slice(0, 23);
  const secondSet = fabrics.slice(23);

  return (
    <div className="vastrakosh-page">
     

      <Container className="mt-5">
        {/* Section 1 Heading */}
        <h4 className="section-heading mb-10 text-center fs-3">
          Choose from 30,000+ Fabric Designs
        </h4>
        <Row>
          {firstSet.map((fabric) => (
            <Col key={fabric.id} xs={6} sm={4} md={3} lg={3} className="mb-4">
              <Card className="fabric-card shadow-sm">
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
            </Col>
          ))}
        </Row>

        {/* Section 2 Heading */}
        <h4 className="section-heading mt-5 mb-4 text-center fs-3">
          Shop Fabrics By Craft
        </h4>
        <Row>
          {secondSet.map((fabric) => (
            <Col key={fabric.id} xs={6} sm={4} md={3} lg={3} className="mb-4">
              <Card className="fabric-card shadow-sm">
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
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default VastraKosh;
