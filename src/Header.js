import React from "react";
import logo from "./g-dino.png"

export class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="g-dino logo" />
      </header>
    )
  }
} 