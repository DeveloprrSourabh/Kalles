import React from "react";

const PageBanner = ({ name }) => {
  return (
    <div id="page-banner">
      <div className="page-banner-content position-relative">
        <img src="./images/bg-heading.jpg" alt="" />
        <div className="page-name position-absolute">Collection</div>
      </div>
    </div>
  );
};

export default PageBanner;
