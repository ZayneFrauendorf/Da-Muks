import React, { Component } from "react";
import Navigation from "./Navigation";
import logo from "../images/DaMuksLogo.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt=""/>
        <Navigation />
      </div>
    );
  }
}

export default Header;
