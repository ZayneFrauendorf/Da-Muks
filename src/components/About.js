import Header from "./Header";
import Footer from "./Footer";
import LawrenceHoldingBees from "../images/LawrenceHoldingBees.jpg";
import honeyCombBees from "../images/honeyCombBees.jpg";
import Farm from "../images/Farm.jpg";
import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutSections: []
    };
  }

  showInfo(e) {
    if (this.state.showImageText == "hidden") {
      this.setState({ showImageText: "show" });
    } else {
      this.setState({ showImageText: "hidden" });
    }
  }

  // componentDidMount() {
  //   let dataURL = "http://localhost:8080/wp-json/wp/v2/aboutsection?_embed";
  //   fetch(dataURL)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         aboutSections: res
  //       });
  //     });
  // }

  render() {
    let aboutSections = this.state.aboutSections.map(section => {
      return section;
    });

    return aboutSections.length > 0 ? (
      <React.Fragment>
        <Header path={this.props.location.pathname} />
        <div className="about">
          <div className="flex-container">
            {aboutSections.map((section, index) => {
              return (
                <div className="column">
                  <img src={section.acf.image} alt="" className={index % 2 === 0 ? "fl" : "fr"} />
                  <p>{section.acf.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Header path={this.props.location.pathname} />
        <div className="about">
          <div className="flex-container">
            <div className="column">
              <img src={Farm} alt="" className="fl" />
              <p>
                The hives are located on a farm in the Far North. The farm has
                over 100 acres of Manuka available to the bees.
              </p>
            </div>
            <div className="column">
              <img src={LawrenceHoldingBees} alt="" className="fr" />
              <p>
                The bees are owner maintained, where the bees take priority and
                not the honey. Extraction only takes place if there is excess
                honey. This is not detrimental to the bees.
              </p>
            </div>

            <div className="column">
              <img src={honeyCombBees} alt="" className="fl" />
              <p>
                The honey is tested before sold so all provided details are
                scientifcally correct. This information is only available once
                we extract and test the honey.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
