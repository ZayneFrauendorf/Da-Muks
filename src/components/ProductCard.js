import React, { Component } from "react";
import { connect } from "react-redux";
import { addNotification } from "../actions/actions-da-muks";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false,
      selectedProduct: null
    };
  }

  changeStateAppropriately = () => {
    if (this.props.message === "" && this.state.added !== true) {
      this.props.dispatch(addNotification("Purchase added to Cart", "success"));

      setTimeout(
        function() {
          this.props.dispatch(addNotification("", "none"));
        }.bind(this),
        1700
      );
    } else {
      this.props.dispatch(addNotification("", "none"));
    }
  };

  toggleAdded = () => {
    this.setState({
      added: !this.state.added
    });
    this.changeStateAppropriately();
  };

  render() {
    const { name, description, image, price, weight, id } = this.props;
    const { added } = this.state;

    return (
      <React.Fragment>
        <div className="product">
          <div className="image-title">
            <img src={image} alt={name} />
            <span className="title">{name}</span>
          </div>
          <div className="wording-action-buttons-ctr">
            <div className="wording">
              <p>{description}</p>
            </div>
            {added === false ? (
              <div className="action-buttons-ctr">
                <center>{weight}</center>

                <button
                  className="snipcart-add-item"
                  data-item-name={name}
                  data-item-price={price}
                  data-item-weight={weight}
                  data-item-description={description}
                  data-item-id={id}
                  data-item-url="http://myapp.com/products/bacon"
                  onClick={() => this.toggleAdded()}
                >
                  Add to Cart
                </button>
              </div>
            ) : (
              <React.Fragment>
                <div className="action-buttons-ctr">
                  <button className="snipcart-checkout">Checkout</button>
                  <button onClick={() => this.toggleAdded()}>
                    Continue Shopping
                  </button>
                </div>
              </React.Fragment>
            )}
          </div>
          <span className="price">${price}</span>
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
