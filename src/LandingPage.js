import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

const LandingPage = props => {
  return (
    <React.Fragment>
      <Header path={props.location.pathname} />
      <div className="landing-page">
        <Slider />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
