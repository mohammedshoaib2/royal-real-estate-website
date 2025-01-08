import React from "react";

function Card({ title, description, image, price, tenure }) {
  return (
    <div className="ventures__card">
      <img src={image} alt="" />

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="ventures__card-info">
        <div className="price">
          <h3>{price}</h3>
          <p>per sqyards</p>
        </div>
        <div className="tenure">
          <h3>{tenure}</h3>
          <p>Months EMI</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
