import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ✅ NEW
import "./EmailPopup.css";

const EmailPopup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // ✅ NEW

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/temp/save-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Email saved:", data);
        alert("Thanks for subscribing!");
        navigate("/Roll", { state: { email } });
      } else {
        console.error("❌ Failed to save email:", data);
        alert("Something went wrong. Try again.");
      }

      setShow(false);
    } catch (error) {
      console.error("❌ Error saving email:", error);
      alert("Network error. Try again.");
    }
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
