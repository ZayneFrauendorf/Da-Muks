import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="hero-ctr-ctr">
          <div className="hero-container">
            {/* <div className="text-container"> */}
            A <u>premium</u> honey, delivered to your door!<br />
            <a href="/store">
              <button>Buy Now</button>
            </a>
            {/* </div> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
