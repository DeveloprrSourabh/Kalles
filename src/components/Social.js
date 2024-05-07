import React from "react";
import Slider from "react-slick";

const Social = () => {
  // Social Slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="social py-3 mt-5">
      <div className="section-heading my-3">
        <div className="cate-deco mt-3 heading">
          <div className="main-heading mx-auto">@ FOLLOW US ON INSTAGRAM</div>
        </div>
      </div>
      <Slider {...settings}>
        <div className="social-slider">
          <img src="./images/insta1.jpg" alt="" />
        </div>
        <div className="social-slider">
          <img src="./images/insta2.webp" alt="" />
        </div>
        <div className="social-slider">
          <img src="./images/insta3.jpg" alt="" />
        </div>
        <div className="social-slider">
          <img src="./images/insta1.jpg" alt="" />
        </div>
        <div className="social-slider">
          <img src="./images/insta3.jpg" alt="" />
        </div>
        <div className="social-slider">
          <img src="./images/insta4.webp" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Social;
