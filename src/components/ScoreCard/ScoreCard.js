import React from "react";
import "./ScoreCard.css";

const ScoreCard = props => (
  <div className="score">
  	<h1 className="currentScore">Score: {props.currentScore}</h1>
  	<h2 className="highScore">High Score: {props.highScore}</h2>
  	<p className="message">{props.message}</p>
  </div>
);

export default ScoreCard;
