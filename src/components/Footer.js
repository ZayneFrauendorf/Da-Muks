import React from "react";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <React.Fragment>
      <section className="footer">
        <div className="footer-item-ctr">
          <span className="copyright">
            Copyright &copy; {new Date().getFullYear()} Da Muks
          </span>
          {/* <Navigation /> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
