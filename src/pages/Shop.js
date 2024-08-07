import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { Link, useLocation } from "react-router-dom";
import Productcard from "../components/Productcard";
import { getAllCategories } from "../Slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags } from "../Slices/tagSlice";
import { getAllColors } from "../Slices/colorSlice";
import { getAllProducts, getFilterProduct } from "../Slices/productSlice";
import Nodata from "../components/Nodata";
import { addCart, getAllCarts } from "../Slices/cartSlice";
import { useAuth } from "../context/auth";

const Shop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const page = location.pathname.replace("/", "");
  const filterRef = useRef();
  const host = "http://localhost:8000";
  const [sets, setSets] = useState([]);
  const [auth] = useAuth();

  const products = useSelector((state) => state.product.allProducts);
  const allcrt = useSelector((state) => state.cart.allCarts);
  const allcate = useSelector((state) => state.category.allCategories);
  const allcolor = useSelector((state) => state.color.allColors);
  const filterProduct = useSelector((state) => state.product.filterProducts);

  const [filterproducts, setFilterProducts] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCarts(auth?.user?.id));
  }, [auth?.user?.id, dispatch]);

  useEffect(() => {
    setSets(allcrt);
  }, [allcrt]);

  useEffect(() => {
    if (checked.length > 0) {
      dispatch(getFilterProduct(checked));
    } else {
      setFilterProducts(products);
    }
  }, [checked, dispatch, products]);

  useEffect(() => {
    setFilterProducts(filterProduct);
  }, [filterProduct]);

  // Product Add To Cart
  const addToCart = async (proId) => {
    await dispatch(addCart({ count: 1, proId, userId: auth?.user?.id }));
    dispatch(getAllCarts(auth?.user?.id));
  };

  // Getting All Categories, Tags, Colors
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllTags());
    dispatch(getAllColors());
  }, [dispatch]);

  // Handle Category Filter
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
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
                          {allcate?.map((cat) => {
                            return (
                              <li key={cat._id} className="py-2">
                                <input
                                  type="checkbox"
                                  id=""
                                  name={cat.name}
                                  onChange={(e) => {
                                    handleFilter(e.target.checked, cat._id);
                                  }}
                                />
                                <label className="px-2" for="category">
                                  {cat.name} {"  "}
                                  <span className="filter-count"> (5)</span>
                                </label>
                                <br />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="avaiable">
                      <h2>Color</h2>
                      <div className="available-filter">
                        <ul className="p-0 m-0">
                          {allcolor?.map((clr) => {
                            return (
                              <li key={clr._id} className="py-2">
                                <span
                                  style={{ background: clr.name }}
                                  className="color-filter"
                                >
                                  <input
                                    type="checkbox"
                                    id={clr.name}
                                    name="vehicle1"
                                    value={clr.name}
                                    onChange={(e) => {
                                      handleFilter(e.target.checked, clr._id);
                                    }}
                                    className="opacity-0"
                                  />
                                </span>
                                <label className="px-2" for="vehicle1">
                                  {clr.name}
                                  {"  "}
                                  <span className="filter-count"> (230)</span>
                                </label>
                                <br />
                              </li>
                            );
                          })}
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
                        Price Low to High
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/shop">
                        Price High to Low
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product-row row-gap-lg-5 py-5 row">
              {filterproducts?.length !== 0 ? (
                filterproducts?.map((item) => {
                  return (
                    <div key={item._id} className="col-sm-4">
                      <div className="product-card-link">
                        <div className="product-card   p-4 position-relative">
                          <div className="product-card-img">
                            <div className=" position-relative product_img-card">
                              <img
                                className="first-img"
                                src={`${host}/api/v1/product/product-photo/${item?.slug}`}
                                alt=""
                              />
                              <img
                                className="second-img"
                                src={`${host}/api/v1/product/product-photo/${item?.slug}`}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="product-option position-absolute">
                            <div className="product-card-heart d-flex justify-content-center align-content-center">
                              <img src="./images/wish.svg" alt="" />
                            </div>
                            <div className="product-card-view">
                              <Link to={`../shop/${item.slug}`}>
                                <div className="first-option position-relative my-3">
                                  <div className="option-name">
                                    View Product
                                  </div>
                                  <span className="option-icon">
                                    <img src="../../images/eye.svg" alt="" />
                                  </span>
                                </div>
                              </Link>
                              {sets && sets.length > 0 ? (
                                sets.some(
                                  (crt) => crt?.proId?._id === item._id
                                ) ? (
                                  <Link to={`../dashboard/user/cart`}>
                                    <div className="first-option position-relative my-3">
                                      <div className="option-name">
                                        View Cart
                                      </div>
                                      <span className="option-icon">
                                        <img
                                          src="../../images/eye.svg"
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                  </Link>
                                ) : (
                                  <div
                                    className="first-option position-relative"
                                    key={item._id}
                                  >
                                    <div className="option-name">
                                      Add To Cart
                                    </div>
                                    <span
                                      onClick={() => addToCart(item._id)}
                                      className="all-dash-del option-icon text-light"
                                    >
                                      <h3>+</h3>
                                    </span>
                                  </div>
                                )
                              ) : (
                                <div className="first-option position-relative">
                                  <div className="option-name">Add To Cart</div>
                                  <span
                                    onClick={() => addToCart(item._id)}
                                    className="all-dash-del option-icon text-light"
                                  >
                                    <h3>+</h3>
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="product-detail  py-2 hover">
                            <Link className="product-card-name">
                              {item.name}
                            </Link>
                            <div className="pro-card-price d-flex gap-2">
                              <div className="product-card-price text-danger">
                                ${item.price}
                              </div>
                            </div>
                          </div>
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
                  );
                })
              ) : (
                <Nodata message="product" />
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Shop;
