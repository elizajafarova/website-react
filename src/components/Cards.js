import React from "react";
import "../css/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Redefining the enterprise</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/finance1.jpg"
              text="Is your business funded by Pearl?"
              label="Click for assistance"
              path="/contact"
            />
            <CardItem
              src="images/finance2.jpg"
              text="Funding the hardest deals has always been our “bread & butter” – making other deals a “piece of cake.”"
              label="No deal
              is too tough for us."
              path="/contact"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/finance3.jpg"
              text="Are you an ISO ?"
              label="What to close more deals?"
              path="/contact"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
