import React from "react";
import PageBanner from "../components/PageBanner";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";

const Blog = () => {
  // Blog Slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    arrow: true,
    slidesToScroll: 1,
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
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  return (
    <>
      <section id="blog-page">
        <Layout>
          {" "}
          <section className="page-banner">
            <PageBanner name={page} />
          </section>
          <div className="">
            <Slider {...settings}>
              <div className="blog-slider">
                <div class="blog-card">
                  <a href="/">
                    <div class="blog-card-img">
                      <img src="./images/blog1.webp" alt="blog's image" />
                    </div>
                  </a>
                  <div class="blog-card-detail blog-page-desc">
                    <div class="blog-card-heading hover pt-2">
                      <a href="/">Spring – Summer Trending 2020</a>
                    </div>

                    <div class="text-black blog-card-desc">
                      <p>
                        Typography is the work of typesetters, compositors,
                        typographers, graphic designers, art directors...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-slider">
                <div class="blog-card">
                  <a href="/">
                    <div class="blog-card-img">
                      <img src="./images/blog1.webp" alt="blog's image" />
                    </div>
                  </a>
                  <div class="blog-card-detail blog-page-desc">
                    <div class="blog-card-heading hover pt-2">
                      <a href="/">Spring – Summer Trending 2020</a>
                    </div>

                    <div class="text-black blog-card-desc">
                      <p>
                        Typography is the work of typesetters, compositors,
                        typographers, graphic designers, art directors...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-slider">
                <div class="blog-card">
                  <a href="/">
                    <div class="blog-card-img">
                      <img src="./images/blog1.webp" alt="blog's image" />
                    </div>
                  </a>
                  <div class="blog-card-detail blog-page-desc">
                    <div class="blog-card-heading hover pt-2">
                      <a href="/">Spring – Summer Trending 2020</a>
                    </div>

                    <div class="text-black blog-card-desc">
                      <p>
                        Typography is the work of typesetters, compositors,
                        typographers, graphic designers, art directors...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-slider">
                <div class="blog-card">
                  <a href="/">
                    <div class="blog-card-img">
                      <img src="./images/blog1.webp" alt="blog's image" />
                    </div>
                  </a>
                  <div class="blog-card-detail blog-page-desc">
                    <div class="blog-card-heading hover pt-2">
                      <a href="/">Spring – Summer Trending 2020</a>
                    </div>

                    <div class="text-black blog-card-desc">
                      <p>
                        Typography is the work of typesetters, compositors,
                        typographers, graphic designers, art directors...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-slider">
                <div class="blog-card">
                  <a href="/">
                    <div class="blog-card-img">
                      <img src="./images/blog1.webp" alt="blog's image" />
                    </div>
                  </a>
                  <div class="blog-card-detail blog-page-desc">
                    <div class="blog-card-heading hover pt-2">
                      <a href="/">Spring – Summer Trending 2020</a>
                    </div>

                    <div class="text-black blog-card-desc">
                      <p>
                        Typography is the work of typesetters, compositors,
                        typographers, graphic designers, art directors...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Layout>
      </section>
    </>
  );
};

export default Blog;
