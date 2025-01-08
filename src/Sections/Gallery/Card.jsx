import React from "react";

function Card({ image }) {
  return (
    <div className="gallery__card">
      <img src={image} alt={image} />
    </div>
  );
}

export default Card;
