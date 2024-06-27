import React, { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import Layout from "../components/Layout";
import { Link, useLocation, useParams } from "react-router-dom";
import Slider from "react-slick";
import Blog from "../components/Blog";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../Slices/blogSlice";

const Blogpage = () => {
  const host = "http://localhost:8000";
  const dispatch = useDispatch();
  const params = useParams();
  // Fetch Blogs
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch, params.slug]);
  const allBlog = useSelector((state) => state.blog.allBlogs);
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

  return (
    <>
      <section id="blog-page">
        <Layout>
          <div className="">
            <Slider {...settings}>
              {allBlog?.length > 2
                ? allBlog?.map((blg) => {
                    return (
                      <div className="blog-slider">
                        <div class="blog-card">
                          <Link to={`/blog/${blg.slug}`}>
                            <div class="blog-card-img">
                              <img
                                src={`${host}/api/v1/blog/blog-photo/${blg?.slug}`}
                                alt="blog's image"
                              />
                            </div>
                          </Link>
                          <div class="blog-card-detail blog-page-desc">
                            <div class="blog-card-date ">
                              Uploaded <span class="text-secondary">on </span>
                              {new Date(blg?.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </div>
                            <div class="blog-card-heading hover pt-2">
                              <Link to={`/blog/${blg.slug}`}>{blg?.name}</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </Slider>
          </div>{" "}
          <div className="all-blog">
            <Blog />
          </div>
        </Layout>
      </section>
    </>
  );
};

export default Blogpage;
