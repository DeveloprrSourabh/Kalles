import React from "react";
import { Link } from "react-router-dom";
import Productcard from "./Productcard";

const Bestseller = () => {
  return (
    <>
      <div id="">
        <div className="trendings mx-5 py-3 my-5">
          <div className="section-heading my-3">
            <div className="cate-deco mt-3 heading">
              <div className="main-heading mx-auto">Best Seller</div>
            </div>
            <div className="sub-heading my-2 text-center">
              Top sale in this week
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

export default Bestseller;
