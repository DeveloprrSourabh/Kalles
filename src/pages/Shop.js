import React, { useEffect } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { Link, useLocation } from "react-router-dom";
import Productcard from "../components/Productcard";
const Shop = () => {
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  return (
    <>
      <Layout>
        <section id="shop-page">
          <section id="page-banner">
            <PageBanner name={page} />
          </section>
          <div className="shop-page-start  mx-5 py-3 my-5">
            <div className="filter-row  d-flex hover justify-content-between">
              <div id="filter1" className="first-filter ">
                <Link className="d-flex gap-1 footer-contact-desc">
                  <img src="./images/filter.svg" width={"16px"} alt="" />
                  Filter
                </Link>
              </div>
              <div className="second-filter">
                <div class="dropdown">
                  <button
                    id="filter2"
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Link className="footer-contact-desc">
                      Alphabetically, A-Z
                    </Link>
                  </button>
                  <ul class="dropdown-menu py-2">
                    <li>
                      <a class="dropdown-item" href="/shop">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/shop">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/shop">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product-row row-gap-lg-5 py-5 row">
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Shop;
