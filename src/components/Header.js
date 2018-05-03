import React, { Component } from "react";
import Navigation from "./Navigation";
import logo from "../images/DaMuksLogo.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <Navigation />
      </div>
    );
  }
}

export default Header;
