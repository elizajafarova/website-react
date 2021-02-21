import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <strong>Pearl</strong> Capital <i className="fab fa-gg"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                Overview
              </Link>
              <Link
                className="nav-links"
                to="/finance"
                onClick={closeMobileMenu}
              >
                Finance
              </Link>
              <Link
                className="nav-links-mobile"
                to="/contact"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn---outline">Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
