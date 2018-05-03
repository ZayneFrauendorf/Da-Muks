import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Hero from "./components/Hero";

class LandingPage extends Component {
  // Is there any reason this isn't a Functional component?
  render() {
    return <div className="landing-page">
        <Header />
        <Hero />
        {/* 👇 What are these two sections doing?  */}
        <section />
        <section />
      </div>;
  }
}

export default LandingPage;
