import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { Link, useLocation } from "react-router-dom";
import Productcard from "../components/Productcard";
const Shop = () => {
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  const ref = useRef();
  const filterRef = useRef();
  return (
    <>
      <Layout>
        <section id="shop-page">
          <section id="page-banner">
            <PageBanner name={page} />
          </section>
          <div className="shop-page-start  mx-5 py-3 my-5">
            <div className="filter-row  d-flex hover justify-content-between">
              <div id="filter1" className="first-filter ">
                <div
                  onClick={() => {
                    filterRef.current.classList.add("active");
                    document
                      .getElementById("main-body")
                      .classList.add("active");
                  }}
                  className="d-flex gap-1 footer-contact-desc"
                >
                  <img src="./images/filter.svg" width={"16px"} alt="" />
                  Filter
                </div>
                <div ref={filterRef} className="filter-drawer hover">
                  <div className="main-filter-heading d-flex justify-content-between ">
                    <h2>FILTER</h2>
                    <span
                      onClick={() => {
                        filterRef.current.classList.remove("active");
                        document
                          .getElementById("main-body")
                          .classList.remove("active");
                      }}
                    >
                      ✕
                    </span>
                  </div>
                  <div className="main-filters">
                    <div className="avaiable">
                      <h2>Availability</h2>
                      <div className="available-filter">
                        <ul className="p-0 m-0">
                          <li className="py-2">
                            <input
                              type="checkbox"
                              id="vehicle1"
                              name="vehicle1"
                              value="Bike"
                            />
                            <label className="px-2" for="vehicle1">
                              In Stock{"  "}
                              <span className="filter-count"> (230)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <input
                              type="checkbox"
                              id="vehicle1"
                              name="vehicle1"
                              value="Bike"
                            />
                            <label className="px-2" for="vehicle1">
                              Out Of Stock{"  "}
                              <span className="filter-count">(117)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <input
                              type="checkbox"
                              id="vehicle1"
                              name="vehicle1"
                              value="Bike"
                            />
                            <label className="px-2" for="vehicle1">
                              I have a bike{"  "}
                              <span className="filter-count">(230)</span>
                            </label>
                            <br />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="avaiable">
                      <h2>Product type</h2>
                      <div className="available-filter">
                        <ul className="p-0 m-0">
                          <li className="py-2">
                            <input
                              type="checkbox"
                              id="vehicle1"
                              name="vehicle1"
                              value="Bike"
                            />
                            <label className="px-2" for="vehicle1">
                              Acessories {"  "}
                              <span className="filter-count"> (5)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <input
                              type="checkbox"
                              id="vehicle1"
                              name="vehicle1"
                              value="Bike"
                            />
                            <label className="px-2" for="vehicle1">
                              Bag{"  "}
                              <span className="filter-count">(2)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <input
                              type="checkbox"
                              id="vehicle1"
                              name="vehicle1"
                              value="Bike"
                            />
                            <label className="px-2" for="vehicle1">
                              Camera{"  "}
                              <span className="filter-count">(2)</span>
                            </label>
                            <br />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="avaiable">
                      <h2>Color</h2>
                      <div className="available-filter">
                        <ul className="p-0 m-0">
                          <li className="py-2">
                            <span
                              style={{ background: "Black" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Black{"  "}
                              <span className="filter-count"> (230)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "Red" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Red{"  "}
                              <span className="filter-count">(10)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "Red" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Red{"  "}
                              <span className="filter-count">(10)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "Red" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Red{"  "}
                              <span className="filter-count">(10)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "Red" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Red{"  "}
                              <span className="filter-count">(10)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "Red" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Red{"  "}
                              <span className="filter-count">(10)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "Red" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Red{"  "}
                              <span className="filter-count">(10)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "Red" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Red{"  "}
                              <span className="filter-count">(10)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "Red" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Red{"  "}
                              <span className="filter-count">(10)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "Red" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Red{"  "}
                              <span className="filter-count">(10)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "yellow" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Yellow{"  "}
                              <span className="filter-count">(230)</span>
                            </label>
                            <br />
                          </li>
                          <li className="py-2">
                            <span
                              style={{ background: "green" }}
                              className="color-filter "
                            >
                              <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                                className="opacity-0"
                              />
                            </span>
                            <label className="px-2" for="vehicle1">
                              Green{"  "}
                              <span className="filter-count">(230)</span>
                            </label>
                            <br />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-filter">
                <div class="dropdown">
                  <button
                    id="filter2"
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Link className="footer-contact-desc">
                      Alphabetically, A-Z
                    </Link>
                  </button>
                  <ul class="dropdown-menu py-2">
                    <li>
                      <a class="dropdown-item" href="/shop">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/shop">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/shop">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product-row row-gap-lg-5 py-5 row">
              <div className="col-sm-3">
                <Link to={"../shop/main"} className="product-card-link">
                  <div className="product-card position-relative">
                    <div className="product-card-img ">
                      <div className=" position-relative">
                        <img
                          className="first-img"
                          src="./images/prod1.webp"
                          alt=""
                        />
                        <img
                          className="second-img"
                          src="./images/prod11.webp"
                          alt=""
                        />
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
                      <Link className="product-card-name">
                        Ridley High Waist
                      </Link>
                      <div className="pro-card-price d-flex gap-2">
                        <del className="text-secondary">$30.00</del>
                        <div className="product-card-price text-danger">
                          $30.00
                        </div>
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Shop;
