import React from "react";
import "./DonutCard.css";

const DonutCard = props => (
  <div className="card">
    <div className="img-container" key={props.id} onClick={() => props.clickPart(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default DonutCard;
