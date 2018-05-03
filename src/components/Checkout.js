import React, { Component } from "react";
import Header from "./Header.js";
import products from "../content/products";
// import img from '../images/HoneyJar.png';
import spimg from "../images/HoneyJar.png";

class Checkout extends Component {
  render() {
    // Do your best to remove console logs before you push up to repos.
    console.log(products);
    return <React.Fragment>
        <Header />
        <div className="checkout">
          <table id="rwd-table">
            <thead>
              <tr>
                <th>Details</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* 👇 Any time that you're mapping over something it's a good indicator that it should probably be returning a functional component instead of just JSX. You should also do anything in your power to avoid table tags. They're widely unused nowadays. */}
              {products.map(({ title, weight, img, price }) => {
                return <tr>
                    <td>
                      <div className="img-title-weight-ctr">
                        <img src={spimg} />
                        <div className="title-weight">
                          <span>{title}</span>
                          <span>{weight}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button className="quantity-btns">
                        -
                      </button>1<button className="quantity-btns">+</button>
                    </td>
                    <td>{price}</td>
                    <td>X</td>
                  </tr>;
              })}
            </tbody>
            <tfoot>
              <tr>
                {/* Not sure what all these 👇 extra <td> tags are doing, but let's clean it up. */}
                <td />
                <td />
                <td>Total: $90</td>
                <td>
                  <button>Purchase</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* You should run prettier on this file. This 👇 semicolon is not needed. It will also wrap your <React.Fragment> in parens which is expected for multi-line JSX */}
      </React.Fragment>;
  }
}

export default Checkout;
