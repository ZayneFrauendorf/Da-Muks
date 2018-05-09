import React, { Component } from "react";
import Navigation from "./Navigation";
import logo from "../images/DaMuksLogo.png";
import Image from "./Image";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <Image src={logo} wrapImg href="/" alt="Da Muks" />
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Header;
