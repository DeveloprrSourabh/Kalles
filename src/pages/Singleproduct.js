import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import $ from "jquery";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
} from "react-image-magnifiers";

const Singleproduct = () => {
  const [imgurl, setImgurl] = useState("/images/prod11.webp");
  $(".tabs").click(function () {
    var contClass = $(this).data("div");

    $(".content")
      .hide()
      .filter("." + contClass)
      .show();
    $(".tabs").removeClass("active");
    $(this).addClass("active");
  });
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
              <div className="single-pro-slider d-flex gap-4">
                {/* small img */}
                <div className="single-pro-min">
                  <div
                    className="single-pro-multi-img mb-2"
                    onMouseOver={() => setImgurl("/images/prod1.webp")}
                  >
                    <img src="/images/prod1.webp" alt="" />
                  </div>
                  <div
                    className="single-pro-multi-img mb-2"
                    onMouseOver={() => setImgurl("/images/prod11.webp")}
                  >
                    <img src="/images/prod11.webp" alt="" />
                  </div>
                  <div
                    className="single-pro-multi-img mb-2"
                    onMouseOver={() => setImgurl("/images/prod2.webp")}
                  >
                    <img src="/images/prod2.webp" alt="" />
                  </div>
                  <div
                    className="single-pro-multi-img mb-2"
                    onMouseOver={() => setImgurl("/images/prod22.webp")}
                  >
                    <img src="/images/prod22.webp" alt="" />
                  </div>
                </div>
                {/* Single big img */}
                <div className="pro-slider-start">
                  <div className="main-product-slide">
                    <MagnifierContainer className="position-relative">
                      <div className="example-class">
                        <MagnifierPreview imageSrc={imgurl} />
                      </div>
                      <MagnifierZoom
                        className="xzoom position-absolute"
                        style={{ height: "200px", width: "200px" }}
                        imageSrc={imgurl}
                      />
                    </MagnifierContainer>
                  </div>
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
                  <div className="single-pro-detail py-1">
                    <span className="que">Availability: </span>{" "}
                    <span className="ans">In Stock</span>
                  </div>
                  <div className="single-pro-detail py-1">
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
          <div className="single-pro-tab">
            <div className="pro-details-tab">
              <div className="all-tabs d-flex gap-4 justify-content-center">
                <Link data-div="div-one" className="tabs active">
                  Description
                </Link>
                <Link data-div="div-two" className="tabs">
                  Additional Information
                </Link>
                <Link data-div="div-three" className="tabs">
                  Reviews
                </Link>
              </div>
              <div className="description-tab pt-4">
                <div class="div-one content">
                  <div class="single-pro-desc pb-4">
                    Go sporty this summer with this vintage navy and white
                    striped v-neck t-shirt from the Abercrombie & Fitch. Perfect
                    for pairing with denim and white kicks for a stylish sporty
                    vibe. Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!
                  </div>
                  <div class="single-pro-desc pb-4">
                    Typography is the work of typesetters, compositors,
                    typographers, graphic designers, art directors, manga
                    artists, comic book artists, graffiti artists, and
                    now—anyone who arranges words, letters, numbers, and symbols
                    for publication, display, or distribution—from clerical
                    workers and newsletter writers to anyone self-publishing
                    materials.
                  </div>
                  <div class="sub-heading my-2 text-black">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </div>
                  <div class="single-pro-desc pb-4">
                    Hit your next boxing workout with a combination it’s never
                    seen before in the Combat Drop Arm Tank, including a
                    freedom-instilling regular fit and dropped armhole to allow
                    you to throw jabs and hooks at the punching bag with ease. A
                    lightweight material keeps you fighting fit, and fresh.
                  </div>
                  <div class="single-pro-desc pb-4">
                    Design inspiration lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Morbi commodo, ipsum sed pharetra gravida,
                    orci magna rhoncus neque, id pulvinar odio lorem non turpis.
                    Nullam sit amet enim. Suspendisse id velit vitae ligula
                    volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
                    Nulla facilisi. Nulla libero. Vivamus pharetra posuere
                    sapien. Nam consectetuer. Sed aliquam, nunc eget euismod
                    ullamcorper, lectus nunc ullamcorper orci.
                  </div>
                </div>

                <div class="div-two  content">
                  <table className="single-pro-table">
                    <tbody>
                      <tr>
                        <th className="">Size</th>
                        <td>
                          <p className=" m-0">S, M, L, XL, 2XL</p>
                        </td>
                      </tr>
                      <tr>
                        <th className="">Color</th>
                        <td>
                          <p className=" m-0">Black, Blue, Violet</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="div-three content">Div #3</div>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
};

export default Singleproduct;