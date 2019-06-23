import React from "react";
import "./Nav.css";

const Nav = props => (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <h3 className="navbar-text">Clicky Game</h3>
    <span className="navbar-text your-guess">{props.yourGuess}</span>
    <span className="navbar-text your-score">Your Score: {props.yourScore}</span>
    <span className="navbar-text high-score">High Score: {props.highScore}</span>
</nav>

);

export default Nav;