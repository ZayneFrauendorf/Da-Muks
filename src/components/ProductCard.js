import React, { Component } from "react";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false
    };

    // this.toggleAdded = this.toggleAdded.bind(this);
  }
  toggleAdded = () => {
    this.setState({
      added: !this.state.added
    });
  };
  render() {
    const { img, title, description, price } = this.props;
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
            {this.state.added === false ? (
              <div className="action-buttons-ctr">
                <button
                  className="snipcart-add-item"
                  data-item-id="2"
                  data-item-name="Raw Honey"
                  data-item-price="45.00"
                  data-item-weight="20"
                  data-item-url="http://myapp.com/products/bacon"
                  data-item-description="Raw honey"
                  onClick={() => this.toggleAdded()}
                >
                  Add to Cart
                </button>
              </div>
            ) : (
              <React.Fragment>
              <div className="action-buttons-ctr">
              <span>Item Added!</span>
                <button className="snipcart-checkout">Checkout</button>
                <button  onClick={() => this.toggleAdded()}>Continue Shopping</button>
              </div>
              </React.Fragment>
            )}
          </div>
          <span className="price">{price}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductCard;
