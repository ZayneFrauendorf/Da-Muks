import React, { Component } from "react";
import defaultProducts from "../content/products";
import ProductCard from "./ProductCard";

export default class StoreProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  // componentDidMount() {
  //   let dataURL = "http://localhost:8080/wp-json/wp/v2/products?_embed";
  //   fetch(dataURL)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         products: res.sort((a, b) => a.acf.price - b.acf.price)
  //       });
  //     });
  // }

  onChangeHandler(value) {
    this.setState({
      products: this.state.products.sort((a, b) => a.acf[value] - b.acf[value])
    });
  }

  render() {

    return this.state.products.length > 0 ? (
      <React.Fragment>
        {this.state.products.map((product, index) => {
          let idNum = index + 1;
          let id = idNum.toString();
          return (
            <ProductCard
              name={product.acf.name}
              image={product.acf.image.url}
              description={product.acf.description}
              weight={product.acf.weight}
              price={product.acf.price}
              key={index}
              id={id}
            />
          );
        })}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {defaultProducts.map((product, index) => {
          let idNum = index + 1;
          let id = idNum.toString();
          return (
            <ProductCard
              name={product.name}
              image={product.image}
              description={product.description}
              weight={product.weight}
              price={product.price}
              key={index}
              id={id}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
