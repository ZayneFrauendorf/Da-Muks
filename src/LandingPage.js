import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductInfo from "./components/ProductInfo";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="landing-page">
        <Hero />
        <ProductInfo />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
