import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="card">
      <h1>Check this out!</h1>
      <div className="card-container">
        <div className="card-wrapper">
          <ul className="card-items">
            <CardItem
              src="images/img-2.jpg"
              text="Explore The Hidden WaterFall"
              category="Advantures"
              path="/services"
            />

            <CardItem
              src="images/img-9.jpg"
              text="Explore The Hidden WaterFall"
              category="Advantures"
              path="/services"
            />
          </ul>

          <ul className="card-items">
            <CardItem
              src="images/img-3.jpg"
              text="Explore The Hidden WaterFall"
              category="Advantures"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Explore The Hidden WaterFall"
              category="Advantures"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Explore The Hidden WaterFall"
              category="Advantures"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
