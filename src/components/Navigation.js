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

  burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");

    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  }

  handleNavClick() {
    this.setState({ mobileNavItemsVisible: !this.state.mobileNavItemsVisible });
  }

  render() {
    return (
      <React.Fragment>
        <div className="navigation">
          <div className="navWide">
            <div className="wideDiv">
              {navLinks.map(({ text, path }) => {
                return text !== "Cart" ? (
                  <a href={path} key={text} className="nav-item">
                    {text}
                  </a>
                ) : (
                  <a
                    href="#"
                    key={text}
                    className="nav-item cart-btn snipcart-checkout"
                  >
                    <i className="fa fa-shopping-cart cart-icon">
                      <div className="snipcart-summary">
                        <span className="snipcart-total-items" />
                      </div>
                    </i>
                  </a>
                );
              })}
              |
              <a href="#" class="snipcart-user-profile nav-item">
                <span class="snipcart-user-email">Login</span>
              </a>
              <a href="#" class="snipcart-user-logout nav-item">
                Logout
              </a>
            </div>
          </div>

          <div className="navNarrow">
            <div className="navNarrow-ctr">
              <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} />
              <div className="narrowLinks">
                <div className="narrowLinks-ctr">
                  {navLinks.map(({ text, path }) => {
                    return text !== "Cart" ? (
                      <a href={path} key={text} className="nav-item">
                        {text}
                      </a>
                    ) : (
                      ""
                    );
                  })}

                  <a href="#" class="snipcart-user-profile nav-item">
                    {/* <i class="fas fa-user"></i> */}
                    <span class="">
                      <i class="fas fa-user" />
                    </span>
                  </a>
                  <a href="#" class="snipcart-user-logout nav-item">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
