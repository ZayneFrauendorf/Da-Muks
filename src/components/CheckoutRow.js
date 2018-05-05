import React from "react";
import products from "../content/products";

const CheckoutRow = () => {
  return (
    <React.Fragment>
      {products.map(({ title, weight, img, price }) => {
        return (
          <tr>
            <td>
              <div className="img-title-weight-ctr">
                <img src={img} alt={title} />
                <div className="title-weight">
                  <span>{title}</span>
                  <span>{weight}</span>
                </div>
              </div>
            </td>
            <td>
              <button className="quantity-btns">-</button>1<button className="quantity-btns">
                +
              </button>
            </td>
            <td>{price}</td>
            <td>X</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default CheckoutRow;
