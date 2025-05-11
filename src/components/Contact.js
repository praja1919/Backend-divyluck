import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaShoppingBag, FaTruck, FaExchangeAlt, FaQuestionCircle } from "react-icons/fa";
import "./ContactUs.css";

const Contact = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I check the current status of my order?",
      answer: "'My Orders' page provides complete information about your order, including order status, payment status, and tracking details."
    },
    {
      question: "Do you take orders over phone calls?",
      answer: "No, we don't take orders over the phone to avoid confusion. For assistance, you can request a callback via email."
    },
    {
      question: "Do you deliver to my location?",
      answer: "You can check delivery availability by entering your pincode on the order page. We are expanding our delivery to cover more locations."
    },
    {
      question: "Can I add more items to my shopping list after placing an order?",
      answer: "Once an order is placed, you cannot add items. You can place a new order for the additional items."
    }
  ];

  return (
    <>
      <div className="contact-wrapper py-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12} md={6} className="left-box">
              <div className="arched-card">
                <div className="sparkle">✦</div>
                <div className="contact-logo">LICERIA & CO</div>
                <h2 className="contact-title">Contact Us</h2>

                <div className="contact-form">
                  <div className="form-group" style={{ marginBottom: "25px" }}>
                    <input 
                      type="text" 
                      className="form-input" 
                      // placeholder="Your Name"
                      required
                    />
                    <span className="form-label">Name</span>
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                       className="form-input" 
                      // placeholder="Your Email"
                      required
                    />
                    <span className="form-label">Email</span>
                  </div>
                </div>

                <div className="contact-info">
                  <div><FaPhoneAlt className="icon" /><span>+123-456-7890</span></div>
                  <div><FaGlobe className="icon" /><span>www.reallygreatsite.com</span></div>
                  <div><FaEnvelope className="icon" /><span>hello@reallygreatsite.com</span></div>
                  <div><FaMapMarkerAlt className="icon" /><span>123 Anywhere St., Any City</span></div>
                </div>

                <div className="footer-text">CONNECT WITH US!</div>
              </div>
            </Col>
            <Col xs={12} md={6} className="right-box">
              <h3><b>DivyLuck.......</b></h3>
              <img src="/col.png" alt="Contact Visual" className="contact-image" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="query-help-section py-4 px-3">
        <h4 className="text-center mb-3"><b>What can we help you with today?</b></h4>
        <div className="d-flex justify-content-center">
          <select className="form-select w-100" style={{ maxWidth: "500px" }}>
            <option disabled selected>Please select any query</option>
            <option>Amount deducted but order not placed</option>
            <option>My payment is shown as pending</option>
            <option>I want to know the status of my order</option>
            <option>Delivery Person did not try to deliver my order</option>
            <option>My order is delayed</option>
            <option>Order not delivered but marked as delivered</option>
            <option>My order was cancelled</option>
            <option>I want to modify/cancel my order</option>
            <option>I want to return my product</option>
            <option>My return hasn't been picked up</option>
            <option>I haven't received my refunds</option>
            <option>I received damaged/incorrect product</option>
            <option>I want to exchange my product</option>
          </select>
        </div>
      </div>

      <Container>
        <Row className="mt-4">
          <Col md={4} sm={12}>
            <div className="left-section">
              <h4 className="quick-support-heading">QUICK SUPPORT</h4>
              <div className="support-categories">
                <div className="category">
                  <div className="category-title">
                    <FaShoppingBag className="category-icon" /> ORDER AND PAYMENT
                  </div>
                </div>
                <div className="category">
                  <div className="category-title">
                    <FaTruck className="category-icon" /> ORDER TRACKING
                  </div>
                </div>
                <div className="category">
                  <div className="category-title">
                    <FaExchangeAlt className="category-icon" /> REFUNDS, RETURNS & EXCHANGE
                  </div>
                </div>
                <div className="category">
                  <div className="category-title">
                    <FaQuestionCircle className="category-icon" /> MISCELLANEOUS
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={8} sm={12}>
            <div className="right-section">
              <h4>Information Section</h4>
              <div className="faq-container">
                {faqItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
                  >
                    <button 
                      className="faq-question" 
                      onClick={() => toggleQuestion(index)}
                    >
                      {item.question}
                      {activeQuestion === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {activeQuestion === index && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;