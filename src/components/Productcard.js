import React from "react";
import { Link } from "react-router-dom";

const Productcard = () => {
  return (
    <>
      <Link className="product-card-link">
        <div className="product-card position-relative">
          <div className="product-card-img ">
            <div className=" position-relative">
              <img className="first-img" src="./images/prod1.webp" alt="" />
              <img className="second-img" src="./images/prod11.webp" alt="" />
            </div>
          </div>
          <div className="product-option position-absolute">
            <div className="product-card-heart d-flex justify-content-center align-content-center">
              <img src="./images/wish.svg" alt="" />
            </div>
            <div className="product-card-view">
              <div className="first-option position-relative my-3">
                <div className="option-name">Quick View</div>
                <span className="option-icon">
                  <img src="./images/eye.svg" alt="" />
                </span>
              </div>
              <div className="first-option position-relative">
                <div className="option-name">Quick Shop</div>
                <span className="option-icon">
                  <img src="./images/cart.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Productcard;
