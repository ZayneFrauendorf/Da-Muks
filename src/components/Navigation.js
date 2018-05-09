import React, { Component } from "react";
import navLinks from "../content/navLinks";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavItemsVisible: false,
      barsIconvisible: false
    };
  }

  handleNavClick() {
    this.setState({ mobileNavItemsVisible: !this.state.mobileNavItemsVisible });
  }

  render() {
    return (
      <React.Fragment>
        <div className="navigation">
          {navLinks.map(({ text, path }) => {           
            return text !== "Cart" ? (
              <a href={path} key={text} className="nav-item">
                {text}
              </a>
      
            ) : (
              <a href="#" key={text} className="nav-item cart-btn snipcart-checkout">
              <i className="fa fa-shopping-cart cart-icon">
                <div className="snipcart-summary">
                  <span className="snipcart-total-items" />
                </div>
              </i>
            </a>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
