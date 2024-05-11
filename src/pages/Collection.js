import React from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { useLocation } from "react-router-dom";

const Collection = () => {
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  return (
    <>
      <Layout>
        <section id="collection-page">
          <section className="page-banner">
            <PageBanner name={page} />
          </section>
          <div className="mx-5 py-3 my-5">
            <div className="row row-gap-4">
              <div className="col-lg-4">
                <div className="">
                  <a href="/">
                    <div class=" cate-img d-flex justify-content-center">
                      <img src="./images/cate1.webp" alt="" />
                      <div class="cate-name">Women</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="">
                  <a href="/">
                    <div class=" cate-img d-flex justify-content-center">
                      <img src="./images/cate1.webp" alt="" />
                      <div class="cate-name">Women</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="">
                  <a href="/">
                    <div class=" cate-img d-flex justify-content-center">
                      <img src="./images/cate1.webp" alt="" />
                      <div class="cate-name">Women</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="">
                  <a href="/">
                    <div class=" cate-img d-flex justify-content-center">
                      <img src="./images/cate1.webp" alt="" />
                      <div class="cate-name">Women</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="">
                  <a href="/">
                    <div class=" cate-img d-flex justify-content-center">
                      <img src="./images/cate1.webp" alt="" />
                      <div class="cate-name">Women</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="">
                  <a href="/">
                    <div class=" cate-img d-flex justify-content-center">
                      <img src="./images/cate1.webp" alt="" />
                      <div class="cate-name">Women</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Collection;
