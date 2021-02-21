import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <hr className="horizantal" />
      <h1>Connect with PC </h1>
      <div className="social-media">
        <div className="social-media-wrap">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/eliza-jafarova-658a33201/"
          >
            <i className="fab icon fa-linkedin"></i>
          </a>
          <a target="_blank">
            <i className="fab icon fa-facebook"></i>
          </a>
          <a target="_blank" href="https://github.com/elizajafarova">
            <i className="fab icon fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
