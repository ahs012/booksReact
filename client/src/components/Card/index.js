import React from "react";
import "./style.css";
const Card = props => {
  return (
    <div className="card text-center" id = "card">
      <div className="card-body text-left">{props.children}</div>
    </div>
  );
}

export default Card;