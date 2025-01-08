import React from "react";

function Card({ index, title, description, image }) {
  return (
    <div className="ourservices__card">
      <div className="ourservices__card-left">
        <div className="ourservices__card-text">
          <h2>{index}</h2>
          <p>{title}</p>
        </div>
        <p>{description}</p>
      </div>
      <div className="ourservices__card-right">
        <img src={image} alt="openplots" />
      </div>
    </div>
  );
}

export default Card;
