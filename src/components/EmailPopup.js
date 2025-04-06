// src/components/EmailPopup.js

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

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
    // You can send email to backend here if needed
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Stay Updated!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Enter your email to get updates:</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EmailPopup;
