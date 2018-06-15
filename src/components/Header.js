import React, { Component } from "react";
import Navigation from "./Navigation";
import logo from "../images/DaMuksLogo.png";
import Image from "./Image";
import NotificationContainer from "./NotificationContainer";

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
            <a href="#" className="snipcart-user-profile user-profile">
              <span className="">
                <i className="fas fa-user" />
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

          <Navigation path={this.props.path} />
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default Header;
