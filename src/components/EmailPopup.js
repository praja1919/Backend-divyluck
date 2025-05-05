// src/components/EmailPopup.js

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./EmailPopup.css"; // Custom styles here

const EmailPopup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000); // Show after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Email:", email);
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      centered
      dialogClassName="custom-email-modal"
    >
      <Modal.Body className="email-popup-body text-center">
        <button onClick={handleClose} className="close-btn">×</button>
        <h3 className="popup-title">HEY YOU!</h3>
        <p className="popup-subtitle">We <span className="heart">♥</span> you</p>
        <p className="popup-desc">
          Sign up for daily launches, exclusive offers <br /> & much more.
        </p>
        <Form onSubmit={handleSubmit} className="email-form">
          <Form.Control
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-input"
          />
          <Button type="submit" className="subscribe-btn mt-3">
            SUBSCRIBE
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EmailPopup;
