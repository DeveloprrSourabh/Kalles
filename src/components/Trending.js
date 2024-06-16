import React from "react";
import { Link } from "react-router-dom";
import Productcard from "./Productcard";

const Trending = () => {
  return (
    <>
      <div id="trending-section">
        <div className="trendings mx-5 py-3 my-5">
          <div className="section-heading my-3">
            <div className="cate-deco mt-3 heading">
              <div className="main-heading mx-auto">TRENDING</div>
            </div>
            <div className="sub-heading my-2 text-center">
              Top view in this week
            </div>
          </div>
          <div className="trending-row py-3 row">
            <Productcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
