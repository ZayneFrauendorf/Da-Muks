import React from "react";
import products from "../content/products";
import ProductCard from "./ProductCard";

const StoreProductInfo = () => {
  return (
    <React.Fragment>
      {products.map(
        ({ title, img, description, benefits, productDetails }, index) => {
          return (
            <ProductCard
              title={title}
              img={img}
              description={description}
              benefits={benefits}
              productDetails={productDetails}
              key={index}
            />
          );
        }
      )}
    </React.Fragment>
  );
};

export default StoreProductInfo;
