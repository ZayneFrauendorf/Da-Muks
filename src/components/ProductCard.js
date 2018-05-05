import React from "react";

const ProductCard = ({ img, title, description, price }) => {
  return (
    <React.Fragment>
      <div className="product">
        <div className="image-title">
          <img src={img} alt={title} />
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
    </React.Fragment>
  );
};

export default ProductCard;
