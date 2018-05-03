import React, { Component } from "react";
// import '../styles/navigation.css';
import navLinks from "../content/navLinks";

class Navigation extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  handleNavClick() {
    // So you're not doing anything wrong here, but you could easily write this without duplicating the setState call. Try this: 
    // this.setState({mobileNavVisible: !this.state.mobileNavVisible}) now you only have to write this. No matter what you're just toggling the state

    if (!this.state.mobileNavVisible) {
      this.setState({ mobileNavVisible: true });
    } else {
      this.setState({ mobileNavVisible: false });
    }
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
    // 👇 I would be careful about doing the eventlistener here. This is probably better controlled in CSS
    window.addEventListener("resize", this.handleResize.bind(this));
  }
  
  componentWillUnmount() {
    // 👇 I would be careful about doing the eventlistener here. This is probably better controlled in CSS
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
                <a href={path} className="nav-item cart-btn">
                { /* 👇 I've mentioned this before, but we should make this a component. */ }
                  <i className="fa fa-shopping-cart cart-icon">
                    {" "}
                    <span className="badge navbadge">0</span>
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
