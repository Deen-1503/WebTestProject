import React from "react";
import { Link } from "react-router-dom";
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <li className="card-item">
        <Link className="card-item-link" to={props.path}>
          <figure className="card-item-pic-wrap" data-category={props.category}>
            <img
              src={props.src}
              alt="the view"
              className="card-item-image"
            />
          </figure>
          <div className="card-item-info">
            <h5 className="card-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
