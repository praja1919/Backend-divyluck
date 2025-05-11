import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Accordion, Form } from "react-bootstrap";
import "./Vas.css";

const FabricCategoryPage = () => {
  const { name } = useParams();
  const [activeKey, setActiveKey] = useState("0");

  const similarFabrics = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `${name} Variant ${i + 1}`,
    image: `/images/${name.toLowerCase().replace(/\s/g, "")}${i + 1}.jpg`,
  }));

  const filters = [
    {
      title: "PRICE",
      options: ["Under Rs. 500", "Rs. 500 - Rs. 1000", "Rs. 1000 - Rs. 1500", "Rs. 1500 & Above"]
    },
    {
      title: "COLOUR",
      options: ["Red", "Blue", "Green", "Yellow", "Black", "White", "Multicolor"]
    },
    {
      title: "MATERIAL",
      options: ["Cotton", "Silk", "Linen", "Wool", "Polyester"]
    },
    {
      title: "WIDTH",
      options: ["36 inches", "44 inches", "54 inches", "58 inches"]
    },
    {
      title: "PRECUT FABRIC LENGTH",
      options: ["1 meter", "2 meters", "3 meters", "5 meters"]
    },
    {
      title: "GSM",
      options: ["Light (Under 150)", "Medium (150-300)", "Heavy (300+)"]
    },
    {
      title: "PRODUCT TYPE",
      options: ["Printed", "Plain", "Embroidered", "Dyed"]
    },
    {
      title: "TYPE",
      options: ["Handloom", "Powerloom", "Khadi"]
    },
    {
      title: "CRAFT",
      options: ["Bandhani", "Block Print", "Kalamkari", "Ajrakh"]
    },
    {
      title: "PRINT",
      options: ["Floral", "Geometric", "Abstract", "Traditional"]
    }
  ];


  return (
    <div className="fabric-category-page">
      <Container fluid className="mt-5 px-4">
        {/* 👇 Changed this Row */}
        <Row className="align-items-stretch gx-4">  
          {/* 👇 Sidebar Column - Added h-100 */}
          <Col md={4} lg={3} className="mb-4 ps-0">
          <div className="sidebar-filter shadow-sm" style={{ minHeight: "600px" }}> 
          <h5 className="sidebar-title">Filters</h5>
          <Accordion activeKey={activeKey} onSelect={(e) => setActiveKey(e)}>
                {filters.map((filter, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{filter.title}</Accordion.Header>
                    <Accordion.Body>
                      <div className="filter-options">
                        {filter.options.map((option, i) => (
                          <Form.Check
                            key={i}
                            type="checkbox"
                            id={`filter-${index}-${i}`}
                            label={option}
                            className="filter-item"
                          />
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
  
          {/* 👇 Products Column - No changes */}
          <Col md={8} lg={9} className="pe-0">
            <h3 className="text-center mb-4">{name} Variants</h3>
            <Row>
              {similarFabrics.map((fabric) => (
                <Col key={fabric.id} xs={6} sm={4} md={3} className="mb-4">
                  <Card className="fabric-card shadow-sm h-100"> {/* 👈 Added h-100 here too */}
                    <div className="image-container">
                      <Card.Img
                        variant="top"
                        src={fabric.image}
                        alt={fabric.name}
                        className="fabric-img"
                      />
                    </div>
                    <Card.Body className="text-center">
                      <Card.Title className="fabric-name">{fabric.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FabricCategoryPage;