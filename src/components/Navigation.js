import React, { Component } from "react";
import navLinks from "../content/navLinks";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  handleNavClick() {
    this.setState({ mobileNavVisible: !this.state.mobileNavVisible });
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
    if (this.state.windowWidth <= 550) {
      this.setState({ mobileNavVisible: true });
    } else {
      this.setState({ mobileNavVisible: false });
    }
  }

  componentDidMount() {
    this.state.windowWidth <= 550
      ? this.setState({ mobileNavVisible: true })
      : this.setState({ mobileNavVisible: false });
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }
  render() {
    return (
      <div className="navigation">
        {this.state.windowWidth <= 500 ? (
          <i class="fas fa-bars" onClick={this.handleNavClick.bind(this)} />
        ) : (
          ""
        )}
        {this.state.mobileNavVisible === false
          ? navLinks.map(({ text, path }) => {
              return text !== "Cart" ? (
                <a href={path} className="nav-item">
                  {text}
                </a>
              ) : (
                <a href={path} className="nav-item cart-btn snipcart-checkout">
                  <i className="fa fa-shopping-cart cart-icon">
                    <div class="snipcart-summary">
                      <span class="snipcart-total-items" />
                    </div>
                  </i>
                </a>
              );
            })
          : ""}
      </div>
    );
  }
}

export default Navigation;
