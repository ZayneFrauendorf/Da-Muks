import React, { Component } from "react";
import Hero from "../components/Hero";
import jarHoney from "../images/HONEY.jpg";
import niceBees from "../images/niceBees.jpg";
import beeKeeperHolding from "../images/holdingBeesGrass.jpg";
import holdingBeesFrontEyeLine from "../images/holdingBeesFrontEyeLine.jpg";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableView = autoPlay(SwipeableViews);

export default class Slider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [],
      loading: false,
      defaultSlides: [jarHoney, niceBees, holdingBeesFrontEyeLine, beeKeeperHolding ]
    };
  }

  // componentDidMount() {
  //   let dataURL = "http://localhost:8080/wp-json/wp/v2/slides?_embed";
  //   this.setState({ loading: true }, () => {
  //     fetch(dataURL)
  //       .then(res => res.json())
  //       .then(res => {
  //         this.setState({
  //           slides: res,
  //           loading: false
  //         });
  //       });
  //   });
  // }

  render() {
    let slides = this.state.slides.map(slide => {
      return slide.acf.image;
    });

    return slides.length > 0 ? (
      <React.Fragment>
        <AutoPlaySwipeableView interval={5000}>
          {slides.map(slide => {
            return (
              <section
                key={slide}
                className="hero"
                style={{
                  verticalAlign: "middle",
                  fontSize: "2rem",
                  textAlign: "center",
                  fontWeight: "bold",
                  height: "100vh",
                  background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                   url(${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Hero />
              </section>
            );
          })}
        </AutoPlaySwipeableView>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <AutoPlaySwipeableView interval={5000}>
          {this.state.defaultSlides.map(slide => {
            return (
              <section
                key={slide}
                className="hero"
                style={{
                  verticalAlign: "middle",
                  fontSize: "2rem",
                  textAlign: "center",
                  fontWeight: "bold",
                  height: "100vh",
                  background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                   url(${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Hero />
              </section>
            );
          })}
        </AutoPlaySwipeableView>
      </React.Fragment>
    );
  }
}
