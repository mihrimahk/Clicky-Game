import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import starters from "./starters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';

class App extends Component {

  state = {
    starters: starters.map(starter => ({...starter})),
    yourScore: 0,
    highScore: 0,
    yourGuess: "",
  };



  handleClick = id => {

    const chosenPokemon = this.state.starters.find(name => name.id === id);
    console.log(chosenPokemon);

    if (chosenPokemon.clicked === false) { 
      chosenPokemon.clicked = true;
      console.log(chosenPokemon);
      const shuffledStarters = this.state.starters.sort((a,b) => 0.5 - Math.random());
      this.setState({ starters: shuffledStarters })
      this.handleIncrement();
      console.log(this.state.yourScore);
    }

    else {

      if (this.state.yourScore === 21) {
        alert("Congratulations! You won the game!");
        this.setState({highScore: this.state.yourScore, 
                      yourScore: 0, 
                      starters: starters.map(starter => ({...starter}))});
      }

      else if (this.state.yourScore > this.state.highScore) {
        alert("Game Over! Congrats on your new high score!")
        this.setState({highScore: this.state.yourScore,
                      yourScore: 0, 
                      starters: starters.map(starter => ({...starter}))});
      }

      else {
        alert("Oops, you already clicked that one! That's game over!");
        this.setState({yourScore: 0,
                      starters: starters.map(starter => ({...starter}))});
      }
    }

  };

  handleIncrement = () => {
    this.setState({ yourScore: this.state.yourScore + 1 });
    console.log(this.state.yourScore);
  };


  render() { 
    return (
    <div>
    <Nav
    yourScore={this.state.yourScore}
    highScore={this.state.highScore}
    yourGuess={this.state.yourGuess}
    />
    <Wrapper>
    <Title>Click each starter Pokemon once to earn points.
    <br></br>
    Click the same Pokemon twice and it's game over.
    </Title>
      {this.state.starters.map(starter => (
        <ImageCard
          id={starter.id}
          key={starter.id}
          name={starter.name}
          image={starter.image}
          clicked={starter.clicked} //
          handleClick={this.handleClick}
        />
      ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
