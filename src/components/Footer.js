import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer ">
        <div className="first-footer p-5 ">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-card d-flex align-items-start mx-3">
                <div className="footer-card-img">
                  <img className="car-img" src="./images/car.svg" alt="" />
                </div>
                <div className="footer-card-detail ps-3">
                  <h2 className="mb-1">FREE SHIPPING</h2>
                  <div className=" text-secondary footer-card-caption">
                    Free shipping on all US order or order above $100
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-card d-flex align-items-start mx-3">
                <div className="footer-card-img">
                  <img src="./images/support.svg" alt="" />
                </div>
                <div className="footer-card-detail ps-3">
                  <h2 className="mb-1">SUPPORT 24/7</h2>
                  <div className=" text-secondary footer-card-caption">
                    Contact us 24 hours a day, 7 days a week
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-card d-flex align-items-start mx-3">
                <div className="footer-card-img">
                  <img src="./images/return.svg" alt="" />
                </div>
                <div className="footer-card-detail ps-3">
                  <h2 className="mb-1">30 DAYS RETURN</h2>
                  <div className=" text-secondary footer-card-caption">
                    Simply return it within 30 days for an exchange.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-card d-flex align-items-start mx-3">
                <div className="footer-card-img">
                  <img src="./images/secure.svg" alt="" />
                </div>
                <div className="footer-card-detail ps-3">
                  <h2 className="mb-1">100% PAYMENT SECURE</h2>
                  <div className=" text-secondary footer-card-caption">
                    We ensure secure payment with PEV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer px-5 py-5">
          <div className="my-footer">
            <div className="footer-row row">
              <div className="col-lg-3">
                <div className="footer-first-row ">
                  <div className="footer-logo pb-4">
                    <img width={100} src="./images/logo.avif" alt="" />
                  </div>
                  <div className="footer-contact d-flex py-2 gap-1">
                    <img
                      className="mt-1 "
                      src="./images/location.svg"
                      width={"22px"}
                      alt=""
                    />
                    <div className="footer-contact-desc ps-2 ">
                      184 Main Rd E, St Albans VIC 3021, Australia
                    </div>
                  </div>
                  <div className="footer-contact d-flex py-2 gap-1">
                    <img
                      className="mt-1 "
                      src="./images/email.svg"
                      width={"22px"}
                      alt=""
                    />
                    <div className="footer-contact-desc ps-2 ">
                      contact@company.com
                    </div>
                  </div>
                  <div className="footer-contact d-flex py-2 gap-1">
                    <img
                      className="mt-1 "
                      src="./images/phone.svg"
                      width={"22px"}
                      alt=""
                    />
                    <div className="footer-contact-desc ps-2 ">
                      +001 2233 456
                    </div>
                  </div>
                  <div className="footer-contact-icon d-flex gap-4 py-3 hover">
                    <Link>
                      <img src="./images/fb.svg" width={"15px"} alt="" />
                    </Link>
                    <Link>
                      <img src="./images/twitter.svg" width={"15px"} alt="" />
                    </Link>
                    <Link>
                      <img src="./images/insta.svg" width={"15px"} alt="" />
                    </Link>
                    <Link>
                      <img src="./images/linkedin.svg" width={"15px"} alt="" />
                    </Link>
                    <Link>
                      <img src="./images/twitter.svg" width={"15px"} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-menu-bar">
                  <h2 className="mb-3 pb-3">Categories</h2>
                  <ul className="footer-menu-list hover m-0 p-0">
                    <li className="py-1">
                      <Link className="footer-contact-desc">Men</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">Women</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">Accessories</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">Shoes</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">Watch</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">Dress</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-menu-bar">
                  <h2 className="mb-3 pb-3">Infomation</h2>
                  <ul className="footer-menu-list hover m-0 p-0">
                    <li className="py-1">
                      <Link className="footer-contact-desc">About us</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">Women</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">Contact us</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">
                        Returns & Exchanges
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-menu-bar">
                  <h2 className="mb-3 pb-3">Useful links</h2>
                  <ul className="footer-menu-list hover m-0 p-0">
                    <li className="py-1">
                      <Link className="footer-contact-desc">Latest News</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">My Account</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">FAQs</Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">
                        Shipping & Delivery
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link className="footer-contact-desc">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-menu-bar">
                  <h2 className="mb-3 pb-3">Useful links</h2>
                  <div className="footer-contact-desc">
                    Subscribe to our newsletter and get 10% off your first
                    purchase
                  </div>
                  <div className="footer-form py-3">
                    <form action="">
                      <div className="footer-input justify-content-start d-flex">
                        <input type="email" placeholder="Your email address" />
                        <button className="form-btn">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="last-footer mx-5 py-4">
          <div className="d-flex justify-content-between">
            <div className="site-detail">
              <span className="footer-contact-desc hover">
                All Rights Reserved © 2024{" "}
                <Link className="footer-site-name">Kalles</Link> - Developed by{" "}
                <Link>Sourabh</Link>
              </span>
            </div>
            <div className="last-footer-menu">
              <ul class="main-menu d-flex hover">
                <li class="menu-list">
                  <Link className="footer-contact-desc" to="/">
                    Shop
                  </Link>
                </li>
                <li class="menu-list">
                  <Link className="footer-contact-desc" to="/">
                    About
                  </Link>
                </li>
                <li class="menu-list">
                  <Link className="footer-contact-desc" to="/">
                    Blog
                  </Link>
                </li>
                <li class="menu-list">
                  <Link className="footer-contact-desc" to="/">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
