import React, { Component } from "react";
import Header from "./Header.js";
import products from "../content/products";
// import img from '../images/HoneyJar.png';
import spimg from "../images/HoneyJar.png";

class Store extends Component {
  render() {
    //remove the console log
    console.log(products);
    return (
      <React.Fragment>
        <Header />
        <div className="store">
          <div className="product-container">
          {/* Same thing here, you should be returning a component from this map that accepts a bunch of props that will put your data where you need it to go. */}
            {products.map(({ title, img, description, benefits, price }) => {
              return (
                <div className="product">
                  <div className="image-title">
                    <img src={spimg} />
                    <span className="title">{title}</span>
                  </div>
                  <div className="wording-action-buttons-ctr">
                    <div className="wording">
                      <p>{description}</p>
                    </div>
                    <div className="action-buttons-ctr">
                      <button>Buy & Checkout</button>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                  <span className="price">{price}</span>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Store;
