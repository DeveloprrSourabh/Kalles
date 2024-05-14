import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Singleproduct = () => {
  // Single Product Slider
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <>
      <section id="single-product-page ">
        <Layout>
          <div className="top-breadcrumb hover px-5 ">
            <Link className="current-product">Home ⨠ </Link>
            <span className="current-product text-secondary">
              Leather White Trainers
            </span>
          </div>
          <div className="singleproduct-row row  mx-5 py-3 my-5">
            <div className="col-lg-6">
              <div className="single-pro-slider">
                <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
                  <div>
                    <div className="pro-slider-start">
                      <div className="main-product-slide">
                        <div className="pro-slide-img">
                          <img src="/images/prod11.webp" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pro-slider-start">
                      <div className="main-product-slide">
                        <div className="pro-slide-img">
                          <img src="/images/prod11.webp" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pro-slider-start">
                      <div className="main-product-slide">
                        <div className="pro-slide-img">
                          <img src="/images/prod11.webp" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="py-3">
                  {" "}
                  <Slider
                    //   arrows={false}
                    asNavFor={nav1}
                    ref={(slider) => (sliderRef2 = slider)}
                    slidesToShow={6}
                    swipeToSlide={false}
                    focusOnSelect={true}
                  >
                    <div>
                      <div className="single-pro-multi-img">
                        <img src="/images/prod1.webp" alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="single-pro-multi-img">
                        <img src="/images/prod1.webp" alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="single-pro-multi-img">
                        <img src="/images/prod1.webp" alt="" />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-pro-details">
                <h2 className="single-pro-name">Leather White Trainers</h2>
                <div className="d-flex align-items-center justify-content-between pb-3">
                  <span className="single-pro-price">$200</span>{" "}
                  <span className="review-stars">
                    ⭐️⭐️⭐️⭐️( 1 review ){" "}
                  </span>
                </div>
                <div className="single-pro-desc pb-4">
                  Go kalles this summer with this vintage navy and white striped
                  v-neck t-shirt from the Nike. Perfect for pairing with denim
                  and white kicks for a stylish kalles vibe.
                </div>
                <div className="size pb-4">
                  <div className="selected-size pb-3">SIZE: S</div>
                  <div className="d-flex gap-3">
                    <span className="single-pro-size">S</span>
                    <span className="single-pro-size">M</span>
                    <span className="single-pro-size">L</span>
                    <span className="single-pro-size">XL</span>
                  </div>
                </div>
                <div className="size pb-4">
                  <div className="selected-size  pb-3">Color: BLACK</div>
                  <div className="d-flex  gap-3">
                    <span
                      className="single-pro-color"
                      style={{ background: "red" }}
                    ></span>
                    <span
                      className="single-pro-color"
                      style={{ background: "red" }}
                    ></span>
                    <span
                      className="single-pro-color"
                      style={{ background: "red" }}
                    ></span>
                    <span
                      className="single-pro-color"
                      style={{ background: "red" }}
                    ></span>
                  </div>
                </div>
                <div className="single-pro-cart d-flex align-items-center pb-4 gap-3">
                  <div className="quantity d-flex justify-content-between gap-4">
                    <span className="operator">—</span>
                    <span className="operator">1</span>
                    <span className="operator">+</span>
                  </div>
                  <div className="add-cart-btn effect">ADD TO CART</div>
                  <div className="wishlist-btn effect">
                    <img src="/images/wish.svg" width={20} alt="" />
                  </div>
                </div>
                <div className="pro-main-detail">
                  <div className="single-pro-detail">
                    <span className="que">SKU:</span>{" "}
                    <span className="ans">Sport Clothes-1</span>
                  </div>
                  <div className="single-pro-detail py-2">
                    <span className="que">Availability: </span>{" "}
                    <span className="ans">In Stock</span>
                  </div>
                  <div className="single-pro-detail py-2">
                    <span className="que">Categories: </span>{" "}
                    <span className="ans">
                      <Link> Men</Link>
                    </span>
                  </div>
                  <div className="single-pro-detail hover">
                    <span className="que">Tags: </span>{" "}
                    <span className="ans">
                      <Link> Sport</Link>
                      <Link> Sport</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-pro-all-details"></div>
        </Layout>
      </section>
    </>
  );
};

export default Singleproduct;
