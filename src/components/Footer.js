import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <section className="footer">
        <div className="footer-item-ctr">
          <span className="copyright">
            Copyright &copy; {new Date().getFullYear()} Da Muks
          </span>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
