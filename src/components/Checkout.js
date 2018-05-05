import React, { Component } from "react";
import Header from "./Header.js";
import CheckoutRow from "./CheckoutRow.js";

class Checkout extends Component {
  render() {
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
              <CheckoutRow />
            </tbody>
            <tfoot>
              <tr>
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
      </React.Fragment>
    );
  }
}

export default Checkout;
