import React from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  return (
    <>
      <section id="shop-page">
        <Layout>
          <section id="page-banner">
            <PageBanner name={page} />
          </section>
          <div className="mx-5 py-3 my-5">
            <div className="about-us">
              <div className="row row-gap-lg-3 ">
                <div className="col-lg-6 px-4">
                  <div class="blog-card-detail">
                    <div class="blog-card-heading hover pt-2">
                      <div href="/">OUR MISSION</div>
                    </div>

                    <div class="text-secondary blog-card-desc">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo nemo
                        enim ipsam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 px-4">
                  <div class="blog-card-detail">
                    <div class="blog-card-heading hover pt-2">
                      <div href="/">OUR STORIES</div>
                    </div>

                    <div class="text-secondary blog-card-desc">
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 px-4">
                  <div class="blog-card-detail">
                    <div class="blog-card-heading hover pt-2">
                      <div href="/">OUR APPROACH</div>
                    </div>

                    <div class="text-secondary blog-card-desc">
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 px-4">
                  <div class="blog-card-detail">
                    <div class="blog-card-heading hover pt-2">
                      <div href="/">OUR PHILOSOPHY</div>
                    </div>

                    <div class="text-secondary blog-card-desc">
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur? Quis nostrum exercitationem ullam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <section id="card-section">
                <div class="home-card mx-3 py-3 my-5">
                  <div class="row">
                    <div class="col-sm-6 position-relative">
                      <div class="card-img">
                        <img src="./images/card1.webp" alt="" />
                      </div>
                      <div class=" text-center card-caption position-absolute">
                        <h2>Lookbook 2023</h2>
                        <div class="card-sub-caption">make Love this look</div>
                      </div>
                    </div>
                    <div class="col-sm-6 position-relative">
                      <div class="card-img position-relative">
                        <img src="./images/card2.webp" alt="" />
                      </div>
                      <div class=" text-center card-caption position-absolute">
                        <h2>Lookbook 2023</h2>
                        <div class="card-sub-caption">make Love this look</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
};

export default About;
