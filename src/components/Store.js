import React, { Component } from "react";
import Header from "./Header.js";
import StoreProductInfo from "./StoreProductInfo.js";
import Footer from "./Footer";
import NotificationContainer from "./NotificationContainer";

class Store extends Component {
  render() {
    return (
      <React.Fragment>
        <NotificationContainer />
        <Header />
        <div className="store">
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
