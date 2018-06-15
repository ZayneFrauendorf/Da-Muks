import React, { Component } from "react";
import Header from "./Header.js";
import StoreProductInfo from "./StoreProductInfo.js";
import Footer from "./Footer";
import NotificationContainer from "./NotificationContainer";

class Store extends Component {
  render() {
    return (
      <React.Fragment>
        <Header path={this.props.location.pathname} />
        <div className="store">
          <NotificationContainer />
          <div className="product-container">
            <StoreProductInfo />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Store;
