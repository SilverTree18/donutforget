import React, { Component } from "react";
import DonutCard from "./components/DonutCard";
import ScoreCard from "./components/ScoreCard";
import Wrapper from "./components/Wrapper";
import donuts from "./donuts.json";
import "./App.css";

class App extends Component {
  // Setting this.state.donuts to the donuts json array
  state = {
    donuts,
    currentScore: 0,
    highScore: 0,
    clicked: [],
    message: "Donut let me down"


  };

clickPart = id => {
  const clicked = this.state.clicked;
  if (clicked.indexOf(id) === -1) {
    clicked.push(id);
    this.setState({ clicked: clicked });
    this.setState({ currentScore: this.state.currentScore +1 });
    this.setState({ message: "Mmmmmm…donuts. Mmmmmm…donuts. Mmmmmm…donuts." });
    if (this.state.currentScore >= this.state.highScore) {
      this.setState({ highScore: this.state.currentScore +1 });
    }
  }  
  else {

    this.setState({ currentScore: 0 });
    this.setState ({ clicked: [] });
    this.setState({ message: "D'oh! The strong must protect the sweet. Play again."});
  }
    this.gameOverCheck();
}
 gameOverCheck = () => {
      if (this.state.currentScore === 11) {
      this.setState({ message: "You won! You donut beast!"})
       }
 else {
      const shuffled = donuts.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        this.setState({ donuts: shuffled });  
 }
}
  render() {
    return (
      <Wrapper>
        <div>
          <img src = {require("./donutlogo-01.png")} alt="titlelogo" height="350" />
            <div className = "row">
              <div className = "col-9">
                  {this.state.donuts.map(donuts => (
                    <DonutCard
                      id={donuts.id}
                      key={donuts.id}
                      image={donuts.image}
                      clickPart={this.clickPart}
                    />
                  ))}
                </div>
                <div className = "col-3">
                  <ScoreCard 
                    message = {this.state.message}
                    currentScore = {this.state.currentScore}
                    highScore = {this.state.highScore}
                  />
              </div>
            </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
