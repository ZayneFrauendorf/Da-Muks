import React, { Component } from "react";
import Navigation from "./Navigation";
import logo from "../images/DaMuksLogo.png";
import Image from "./Image";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-and-details">
          <Image src={logo} wrapImg href="/" alt="Da Muks" />
          <div className="profile-options" />
        </div>

        <div className="header-right">
          <div className="mob-profile">
            <a href="#" class="snipcart-user-profile user-profile">
              {/* <i class="fas fa-user"></i> */}
              <span class="">
                <i class="fas fa-user" />
              </span>
            </a>
          </div>

          <div className="mob-cart">
            <a href="#" className="nav-item cart-btn snipcart-checkout">
              <i className="fa fa-shopping-cart cart-icon">
                <div className="snipcart-summary">
                  <span className="snipcart-total-items" />
                </div>
              </i>
            </a>
          </div>

          <Navigation />
        </div>
      </div>
    );
  }
}

export default Header;
