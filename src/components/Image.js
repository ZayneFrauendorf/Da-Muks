import React from "react";

const Image = ({ src, wrapImg, href, alt }) => {
  return (
    <React.Fragment>
      {!wrapImg && <img src={src} alt={alt} />}
      {wrapImg === true && (
        <a href={href}>
          <img src={src} alt={alt} />
        </a>
      )}
    </React.Fragment>
  );
};

export default Image;
