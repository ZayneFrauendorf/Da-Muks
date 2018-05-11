import React from "react";
import Header from "./Header";
import spimg from "../images/HoneyJar.png";

const Confirm = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <div className="card">
          <div className="confirm-title">
            <span>Confirm Purchase</span>
            <span>X</span>
          </div>

          <div className="card-main-container">
            <div className="product-overview">
              <div className="row-one">
                <img src={spimg} alt="honey" />
              </div>
              <div className="row-two">
                <span className="brand">Da Muks, Mangamuka</span>
                <br />
                <span className="product-title">Raw Honey</span>
              </div>
              <div className="row-three">
                <span className="money">$30.00</span>
                <span>Qty: 1</span>
              </div>
            </div>
            <div className="payment-form">
              <div className="pf-first-row">
                <div className="name-ctr">
                  <label>Name on Card</label>
                  <input type="text" />
                </div>

                <div className="postal-code-ctr">
                  <label>Postal Code</label>
                  <input type="text" />
                </div>
              </div>

              <div className="pf-second-row">
                <div className="card-number-ctr">
                  <label>Card Number</label>
                  <input type="text" />
                </div>
              </div>

              <div className="pf-third-row">
                <div className="expiry-ctr">
                  <label>Expiry</label>
                  <div className="side-by-side">
                    <input type="text" />
                    <span className="divider">/</span>
                    <input type="text" />
                  </div>
                </div>

                <div className="cvv-ctr">
                  <label>CVV</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <div className="accepted-cards">
              <i class="fa">&#xf1f3;</i>
              <i class="fa">&#xf1f0;</i>
              <i class="fa">&#xf1f4;</i>
              <i class="fa">&#xf1f5;</i>
            </div>
            <div className="pay-now-btn">
              <button>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirm;
