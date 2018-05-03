import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Hero from "./components/Hero";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Header />
        <Hero />
        <section />
        <section />
      </div>
    );
  }
}

export default LandingPage;
