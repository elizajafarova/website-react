import React from "react";
import { Button } from "./Button";
import "../App.css";
import "../css/HeroSec.css";

function Overview() {
  return (
    <div className="hero-container">
      <img src="images/bg.jpg" />
      <h1>Reimagine</h1>
      <h2>We know opportunities don't wait.</h2>
      <h3>
        Because your time is valuable, our expert team of Underwriters and ISO
        Relationship Managers are geared towards approving your merchant deals –
        fast.
      </h3>
      <div className="hero-btns">
        <Button
          className="btn-1"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Become a strategic partner
        </Button>
      </div>
    </div>
  );
}

export default Overview;
