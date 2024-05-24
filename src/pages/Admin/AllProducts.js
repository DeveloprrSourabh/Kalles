import React, { useEffect } from "react";
import Adminmenu from "../../components/Adminmenu";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Slices/productSlice";
import { Link } from "react-router-dom";
import Nodata from "../../components/Nodata";

const AllProducts = () => {
  const host = "http://localhost:8000";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.product.allProducts);
  console.log(products);
  return (
    <>
      <div id="all-products-dashboard">
        <div className="admin-profile">
          <div className="admin-row row">
            <div className="col-lg-3">
              <Adminmenu />
            </div>
            <div className="col-lg-9">
              {" "}
              <div className="product-row row-gap-lg-5 pe-5 row">
                {!products.length === 0 ? (
                  products?.map((item) => {
                    return (
                      <div className="col-sm-4">
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
                              </div>{" "}
                              <div className="product-card-view">
                                <Link
                                  to={`../admin/update-product/${item.slug}`}
                                >
                                  {" "}
                                  <div className="first-option position-relative my-3">
                                    <div className="option-name">
                                      Edit Product
                                    </div>
                                    <span className="option-icon">
                                      <img src="./images/eye.svg" alt="" />
                                    </span>
                                  </div>
                                </Link>
                                <div className="first-option position-relative">
                                  <div className="option-name">
                                    Delete Product
                                  </div>
                                  <span className="option-icon">
                                    <img src="./images/cart.svg" alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="product-detail  py-2 hover">
                              <Link className="product-card-name">
                                Ridley High Waist
                              </Link>
                              <div className="pro-card-price d-flex gap-2">
                                <div className="product-card-price text-danger">
                                  ${item.price}
                                </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
