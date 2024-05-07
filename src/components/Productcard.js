import React from "react";
import { Link } from "react-router-dom";

const Productcard = () => {
  return (
    <>
      <div className="col-sm-3">
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
            <div className="product-detail py-2 hover">
              <Link className="product-card-name">Ridley High Waist</Link>
              <div className="pro-card-price d-flex gap-2">
                <del className="text-secondary">$30.00</del>
                <div className="product-card-price text-danger">$30.00</div>
              </div>
            </div>
          </div>
        </Link>
        <div className="pro-card-color">
          <div className="d-flex justify-content-start">
            <span
              className="card-color me-2"
              style={{ background: "red" }}
            ></span>
            <span
              className="card-color me-2"
              style={{ background: "orange" }}
            ></span>
            <span
              className="card-color me-2"
              style={{ background: "black" }}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcard;
