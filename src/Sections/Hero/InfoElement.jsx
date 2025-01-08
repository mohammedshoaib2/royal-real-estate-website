import React from "react";

function InfoElement({ head, sub_head }) {
  return (
    <div className="hero__info">
      <h2 className="hero__info-head">{head}</h2>
      <div className="hero__info-sub-head">{sub_head}</div>
    </div>
  );
}

export default InfoElement;
