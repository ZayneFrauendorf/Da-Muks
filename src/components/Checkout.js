import React, { Component } from "react";
import Header from "./Header.js";
import products from "../content/products";
// import img from '../images/HoneyJar.png';
import spimg from "../images/HoneyJar.png";

class Checkout extends Component {
  render() {
    console.log(products);
    return (
      <React.Fragment>
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
              {products.map(({ title, weight, img, price }) => {
                return (
                  <tr>
                    <td>
                      <div className="img-title-weight-ctr">
                        <img src={spimg} />
                        <div className="title-weight">
                          <span>{title}</span>
                          <span>{weight}</span>
                        </div>
                      </div>
                    </td>
                    <td>1</td>
                    <td>{price}</td>
                    <td>X</td>
                  </tr>
                );
              })}
               
            </tbody>
            <tfoot>
            <tr>
                      <td></td>
                      <td></td>
                      <td>$90</td>
                      <td><button>Purchase</button></td>
                    </tr>
            </tfoot>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
