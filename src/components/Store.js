import React, { Component } from "react";
import Header from "./Header.js";
import StoreProductInfo from "./StoreProductInfo.js";
import Footer from "./Footer";

class Store extends Component {
  render() {
    return (
      <React.Fragment>
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
