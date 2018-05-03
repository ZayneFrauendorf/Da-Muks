import React, { Component } from "react";
import Navigation from "./Navigation";
import logo from "../images/DaMuksLogo.png";

class Header extends Component {
  // Same thing here, should be a functional component
  render() {
    return (
      <div className="header">
      { /* 👇 One thing you could do here is make an "Image" component. It would take three props potentially. 1. a src to an image path, and 2. a prop that dictates whether or not to wrap the component in an <a> tag and 3. an href link if you include #2...You could reuse this across multiple spots  */ }
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <Navigation />
      </div>
    );
  }
}

export default Header;
