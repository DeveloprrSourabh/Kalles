import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nodata from "./Nodata";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Slices/productSlice";
import toast from "react-hot-toast";
import { useCart, CartProvider } from "../context/cart";
import { addCart, getAllCarts } from "../Slices/cartSlice";

const Productcard = () => {
  const host = "http://localhost:8000";
  const dispatch = useDispatch();
  const [cart, setCart] = useCart();
  const [sets, setSets] = useState([]);

  const products = useSelector((state) => state.product.allProducts);
  const allcrt = useSelector((state) => state.cart.allCarts);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCarts());
  }, [dispatch]);

  useEffect(() => {
    setSets(allcrt);
  }, [allcrt]);

  // Cart Credentials
  const [credentials, setCredentials] = useState({
    count: 1,
  });

  // Product Add To Cart
  const addToCart = async (proId) => {
    await dispatch(addCart({ ...credentials, proId: proId }));
    dispatch(getAllCarts());
  };

  return (
    <>
      {products.length !== 0 ? (
        products?.map((item) => {
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
                          <div className="option-name">View Product</div>
                          <span className="option-icon">
                            <img src="../../images/eye.svg" alt="" />
                          </span>
                        </div>
                      </Link>
                      {sets && sets.length > 0 ? (
                        sets.some((crt) => crt?.proId?._id === item._id) ? (
                          <Link to={`../user/cart`}>
                            <div className="first-option position-relative my-3">
                              <div className="option-name">View Cart</div>
                              <span className="option-icon">
                                <img src="../../images/eye.svg" alt="" />
                              </span>
                            </div>
                          </Link>
                        ) : (
                          <div
                            className="first-option position-relative"
                            key={item._id}
                          >
                            <div className="option-name">Add To Cart</div>
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
                    <Link className="product-card-name">{item.name}</Link>
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
    </>
  );
};

export default Productcard;
