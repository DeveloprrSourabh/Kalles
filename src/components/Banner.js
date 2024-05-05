import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Banner = () => {
  // Banner Slider
  var settings = {
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="main-banner position-relative">
          <div className="banner-img">
            <img src="./images/slider1.webp" alt="" />
          </div>
          <div className="banner-content">
            <div className="banner-season">Summer Arrival</div>
            <div className="banner-heading">New Arrival Collection</div>
            <div className="banner-btn">Explore Now</div>
          </div>
        </div>
        <div className="main-banner">
          <div className="banner-img">
            <img src="./images/slide2.webp" alt="" />
          </div>
          <div className="banner-content">
            <div className="banner-season">Season Arrival</div>
            <div className="banner-heading">New Arrival Collection</div>
            <div className="banner-btn">
              <Link className="text-light">Explore Now</Link>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;
