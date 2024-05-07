import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="mx-5 py-3 my-5">
        <div className="div-heading my-3">
          <div className="cate-deco mt-3 heading">
            <div className="main-heading mx-auto">LATES FROM BLOG</div>
          </div>
          <div className="sub-heading my-2 text-center">
            The freshest and most exciting news
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-card">
              <Link>
                <div className="blog-card-img">
                  <img src="./images/blog1.webp" alt="blog's image" />
                </div>
              </Link>

              <div className="blog-card-detail">
                <div className="blog-card-heading hover pt-2">
                  <Link>Spring – Summer Trending 2020</Link>
                </div>
                <div className="blog-card-date pb-2 pt-1">
                  Uploaded <span className="text-secondary">on</span> May 11,
                  2024
                </div>
                <div className="text-secondary blog-card-desc">
                  <p>
                    Typography is the work of typesetters, compositors,
                    typographers, graphic designers, art directors, manga
                    artists, ...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card">
              <Link>
                <div className="blog-card-img">
                  <img src="./images/blog1.webp" alt="blog's image" />
                </div>
              </Link>

              <div className="blog-card-detail">
                <div className="blog-card-heading hover pt-2">
                  <Link>Spring – Summer Trending 2020</Link>
                </div>
                <div className="blog-card-date pb-2 pt-1">
                  Uploaded <span className="text-secondary">on</span> May 11,
                  2024
                </div>
                <div className="text-secondary blog-card-desc">
                  <p>
                    Typography is the work of typesetters, compositors,
                    typographers, graphic designers, art directors, manga
                    artists, ...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card">
              <Link>
                <div className="blog-card-img">
                  <img src="./images/blog1.webp" alt="blog's image" />
                </div>
              </Link>

              <div className="blog-card-detail">
                <div className="blog-card-heading hover pt-2">
                  <Link>Spring – Summer Trending 2020</Link>
                </div>
                <div className="blog-card-date pb-2 pt-1">
                  Uploaded <span className="text-secondary">on</span> May 11,
                  2024
                </div>
                <div className="text-secondary blog-card-desc">
                  <p>
                    Typography is the work of typesetters, compositors,
                    typographers, graphic designers, art directors, manga
                    artists, ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
