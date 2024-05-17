import React, { useRef } from "react";
import PageBanner from "../components/PageBanner";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const Singleblog = () => {
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  const ref = useRef();
  return (
    <>
      <section id="single-blog-page">
        <Layout>
          {" "}
          <section id="page-banner">
            <PageBanner name={page} />
          </section>
          <div className="single-blog">
            <div className="single-blog-row row   mx-5 py-3 my-5">
              <div className="col-lg-8">
                <div className="single-blog-heading mb-4">
                  <h2>The Easiest Way to Break Out on Top</h2>
                </div>
                <div className="single-blog-img mb-4">
                  <img src="/images/blog1.webp" width={"100%"} alt="" />
                </div>
                <div class="single-pro-desc pb-4">
                  Go kalles this summer with this vintage navy and white striped
                  v-neck t-shirt from the Nike. Perfect for pairing with denim
                  and white kicks for a stylish kalles vibe.
                </div>
                <div class="single-pro-desc pb-4">
                  Go kalles this summer with this vintage navy and white striped
                  v-neck t-shirt from the Nike. Perfect for pairing with denim
                  and white kicks for a stylish kalles vibe.
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="blog-cat">
                    <h2 className="py-2 ">Categories</h2>
                    <ul className="px-0 py-3 m-0  d-flex  gap-3 flex-wrap">
                      <li className="">
                        <Link to="" className="">
                          Suit
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-cat">
                    <h2 className="py-2 ">Categories</h2>
                    <ul className="px-0 py-3 m-0  d-flex  gap-3 flex-wrap">
                      <li className="">
                        <Link to="" className="">
                          Suit
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-cat">
                    <h2 className="py-2 ">Categories</h2>
                    <ul className="px-0 py-3 m-0  d-flex  gap-3 flex-wrap">
                      <li className="">
                        <Link to="" className="">
                          Suit
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-cat">
                    <h2 className="py-2 ">Categories</h2>
                    <ul className="px-0 py-3 m-0  d-flex  gap-3 flex-wrap">
                      <li className="">
                        <Link to="" className="">
                          Suit
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          T-Shirt
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                      <li className="">
                        <Link to="" className="">
                          Shoes
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
};

export default Singleblog;
