import React, { Component } from "react";
import { connect } from "react-redux";
import { addNotification } from "../actions/actions-da-muks";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      selectedProduct: null,
    };
  }

  setWeight = ({ target: { value } }) => {
    const found = this.props.productDetails.find(obj => obj.weight === value);
    this.setState({
      weight: value,
      selectedProduct: found
    });
    console.log(found);
  };

  toggleAdded = () => {
    this.setState({
      added: !this.state.added,
      selectedProduct: null
    });

    this.props.dispatch(addNotification("heyo"));
  };
  render() {
    const { img, title, description, productDetails } = this.props;
    console.log(productDetails);
    const { added, selectedProduct } = this.state;
    const enabled = selectedProduct !== null;
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
            {added === false ? (
              <div className="action-buttons-ctr">
                <select onChange={this.setWeight}>
                  <option value="" selected disabled hidden>
                    Select Weight
                  </option>
                  {productDetails.map(productDetail => {
                    return (
                      <option value={productDetail.weight}>
                        {productDetail.weight}
                      </option>
                    );
                  })}
                </select>
                {enabled ? (
                  <button
                    className="snipcart-add-item"
                    data-item-id={
                      selectedProduct && selectedProduct.weight === "250G"
                        ? "1"
                        : "5"
                    }
                    data-item-name="Raw Honey"
                    data-item-price={selectedProduct && selectedProduct.price}
                    data-item-weight={selectedProduct && selectedProduct.weight}
                    data-item-url="http://myapp.com/products/bacon"
                    data-item-description="Raw honey"
                    disabled={!enabled}
                    onClick={() => this.toggleAdded()}
                  >
                    Add to Cart
                  </button>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <React.Fragment>
                <div className="action-buttons-ctr">
                  <span>Item Added!</span>
                  <button className="snipcart-checkout">Checkout</button>
                  <button onClick={() => this.toggleAdded()}>
                    Continue Shopping
                  </button>
                </div>
              </React.Fragment>
            )}
          </div>
          <span className="price">
            {!enabled && <i class="fas fa-thumbs-up" />}
            {selectedProduct && "$" + selectedProduct.price}
          </span>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.notification.message
  };
};

export default connect(mapStateToProps)(ProductCard);
