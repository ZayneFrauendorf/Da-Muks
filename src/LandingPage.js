import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductInfo from "./components/ProductInfo";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <ProductInfo/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
