
import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import "./Foot.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div>
          <h4>WHAT'S NEW</h4>
          <ul>
            <li>Sabyasachi Jewellery X Neiman Marcus</li>
            <li>25 Years Of Sabyasachi</li>
            <li>Sabyasachi X Printemps Doha</li>
            <li>The Sari Edit</li>
            <li>Bridal Couture 2024</li>
            <li>The High Jewellery Show</li>
          </ul>
        </div>

        <div>
          <h4>WORLD OF DIVYLUCK</h4>
          <ul>
            <li>History</li>
            <li>Collaborations</li>
            <li>Craft Preservation</li>
            <li>Art of Retail</li>
          </ul>
        </div>

        <div>
          <h4>CUSTOMER CARE</h4>
          <ul>
            <li>Contact</li>
            <li>Stores</li>
          </ul>
        </div>

        <div>
          <h4>SOCIAL</h4>
          <ul>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div>
          <h4>CORPORATE</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>

      <div className="footer-social-icons">
        <FaInstagram />
        <FaYoutube />
        <FaFacebookF />
      </div>
    </footer>
  );
};

export default Footer;

