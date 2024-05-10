import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Trending from "../components/Trending";
import Bestseller from "../components/Bestseller";
import Blog from "../components/Blog";
import Social from "../components/Social";

const Home = () => {
  return (
    <section id="home-page">
      <Layout>
        <section id="banner">
          <Banner />
        </section>
        <section id="category-section">
          <Category />
        </section>
        <section id="trending-section">
          <Trending />
        </section>
        <section id="card-section">
          <div className="home-card mx-5 py-3 my-5">
            <div className="row">
              <div className="col-sm-6 position-relative">
                <div className="card-img">
                  <img src="./images/card1.webp" alt="" />
                </div>
                <div className=" text-center card-caption position-absolute">
                  <h2>Lookbook 2023</h2>
                  <div className="card-sub-caption">make Love this look</div>
                </div>
              </div>
              <div className="col-sm-6 position-relative">
                <div className="card-img position-relative">
                  <img src="./images/card2.webp" alt="" />
                </div>
                <div className=" text-center card-caption position-absolute">
                  <h2>Lookbook 2023</h2>
                  <div className="card-sub-caption">make Love this look</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="bestseller-section">
          <Bestseller />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="social-section">
          <Social />
        </section>
      </Layout>
    </section>
  );
};

export default Home;
