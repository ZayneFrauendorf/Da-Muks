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
            <button
              class="snipcart-add-item"
              data-item-id="2"
              data-item-name="Raw Honey"
              data-item-price="45.00"
              data-item-weight="20"
              data-item-url="http://myapp.com/products/bacon"
              data-item-description="Raw honey"
            >
              Add to Cart
            </button>
            {/* <select name="" id="">
              <option value="">Weight 1</option>
              <option value="">Weight 3</option>
              <option value="">Weight 2</option>
            </select> */}
            {/* <button>Add to Cart</button> */}
          </div>
        </div>
        <span className="price">{price}</span>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
