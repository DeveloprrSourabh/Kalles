import React from "react";
import { Link } from "react-router-dom";
import Productcard from "./Productcard";

const Product = () => {
  return (
    <>
      <div id="trending-section">
        <div className="trendings mx-5 my-5">
          <div className="section-heading my-3">
            <div className="cate-deco mt-3 heading">
              <div className="main-heading mx-auto">
                <img className="leaf-img" src="./images/flower.png" alt="" />
                TRENDING
                <img className="leaf-img2" src="./images/flower.png" alt="" />
              </div>
            </div>
            <div className="sub-heading my-2 text-center">
              Top view in this week
            </div>
          </div>
          <div className="trending-row py-3 row">
            <div className="col-sm-3">
              <Productcard />
            </div>
            <div className="col-sm-3">
              <Productcard />
            </div>
            <div className="col-sm-3">
              <Productcard />
            </div>
            <div className="col-sm-3">
              <Productcard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
