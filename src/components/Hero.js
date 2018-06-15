import React, { Component } from "react";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      hero: []
    };
  }
  // componentDidMount() {
  //   let dataURL = "http://localhost:8080/wp-json/wp/v2/hero?_embed";
  //   fetch(dataURL)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         hero: res
  //       });
  //     });
  // }
  render() {
    let hero = this.state.hero.map(hero => {
      return <p key={hero.id}>{hero.acf["hero-text"]}</p>;
    });

    let buttonText = this.state.hero.map(hero => {
      return (
        <React.Fragment key={hero.id}>{hero.acf["button-text"]}</React.Fragment>
      );
    });

    return this.state.hero.length > 0 ? (
      <React.Fragment>
        <div className="hero-ctr-ctr">
          <div className="hero-container">
            {hero}
            <a href="/store">
              <button>{buttonText}</button>
            </a>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div className="hero-ctr-ctr">
          <div className="hero-container">
            A premium honey, delivered to your door!<br />
            <a href="/Store">
              <button>Buy Now</button>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
