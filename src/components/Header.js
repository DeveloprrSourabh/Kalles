import { getByDisplayValue } from "@testing-library/react";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const Header = () => {
  const [auth, setAuth] = useAuth();

  let announceRef = useRef(true);
  return (
    <>
      <header id="main-header">
        {/* Announcement bar */}
        <div
          ref={announceRef}
          className=" d-flex announce justify-content-between"
        >
          <Link className="mx-auto text-light text-text-decoration-none" to="#">
            Today deal sale off <b>70%</b>. End in . Hurry Up
            <img src="../images/arrow.svg" alt="" />
          </Link>
          <div
            onClick={() => {
              announceRef.current.classList.add("d-none");
            }}
            className="announce-close text-light "
          >
            Close ✕
          </div>
        </div>
        {/* top bar */}
        <div className="top-bar hover">
          <div className="top_wrap d-flex justify-content-between align-content-center flex-column  flex-sm-row">
            <div className="contact-top d-none d-sm-block">
              <Link to="tel:+01 23456789">
                <img className="mx-2" src="../images/phone.svg" alt="" />
                +01 23456789
              </Link>
              <Link to="mailto:Kalles@domain.com">
                <img className="mx-2" src="../images/email.svg" alt="" />
                Kalles@domain.com
              </Link>
            </div>
            <div className="discont-sec p-0 pe-sm-5">
              Summer sale discount off <span className="disnum">50% </span>!
              <span className="top-btn">
                <Link className="top-wrap-btn">Shop Now</Link>
              </span>
            </div>
            <div className="top-wrap_option d-flex gap-4">
              <div className="location">
                <img src="../images/location.svg" alt="" />
                <Link>Location</Link>
              </div>
              <div className="language">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </button>
                  <ul class="dropdown-menu py-2">
                    <li>
                      <Link class="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main hard */}
        <div className="main-header">
          <div className="last-header d-flex justify-content-between">
            <div className="logo">
              <img src="../images/logo.avif" alt="main-logo" />
            </div>
            <div className="header-list">
              <ul className="main-menu d-flex flex-sm-row flex-column align-items-sm-center  align-items-start hover">
                <li className="menu-list">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="menu-list">
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li className="menu-list">
                  <Link to={"/collection"}>Collections</Link>
                </li>
                <li className="menu-list">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="menu-list">
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li className="menu-list">
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="header-icons">
              <div className="icon-link">
                <Link>
                  <img src="../images/search.svg" alt="" />
                </Link>
              </div>
              <div className="icon-link">
                {auth?.user ? (
                  <div class="language">
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {auth.user.name}
                      </button>
                      <ul class="dropdown-menu py-2">
                        <li>
                          <Link class="dropdown-item" to="/dashboard/admin">
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" href="/shop">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" href="/shop">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link>
                    <img src="../images/profile.svg" alt="" />
                  </Link>
                )}
              </div>
              <div className="icon-link">
                <Link>
                  <img src="../images/wish.svg" alt="" />
                </Link>
              </div>
              <div className="icon-link">
                <Link>
                  <img src="../images/cart.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
