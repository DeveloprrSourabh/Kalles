import { getByDisplayValue } from "@testing-library/react";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Header = () => {
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
            <img src="./images/arrow.svg" alt="" />
          </Link>
          <div className="announce-close text-light ">Close ✕</div>
        </div>
        {/* top bar */}
        <div className="top-bar hover">
          <div className="top_wrap d-flex justify-content-between align-content-center">
            <div className="contact-top">
              <Link to="tel:+01 23456789">
                <img src="./images/phone.svg" alt="" />
                +01 23456789
              </Link>
              <Link to="mailto:Kalles@domain.com">
                <img src="./images/email.svg" alt="" />
                Kalles@domain.com
              </Link>
            </div>
            <div className="discont-sec">
              Summer sale discount off <span className="disnum">50% </span>!
              <span className="top-btn">
                <Link className="top-wrap-btn">Shop Now</Link>
              </span>
            </div>
            <div className="top-wrap_option d-flex gap-4">
              <div className="location">
                <img src="./images/location.svg" alt="" />
                <Link>Location</Link>
              </div>
              <div className="language">
                <select name="" id="">
                  <option value="">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Main hard */}
        <div className="main-header">
          <div className="last-header d-flex">
            <div className="logo">
              <img src="./images/logo.avif" alt="main-logo" />
            </div>
            <div className="header-list">
              <ul className="main-menu d-flex hover">
                <li className="menu-list">
                  <Link to={""}>Home</Link>
                </li>
                <li className="menu-list">
                  <Link to={""}>Shop</Link>
                </li>
                <li className="menu-list">
                  <Link to={""}>About</Link>
                </li>
                <li className="menu-list">
                  <Link to={""}>Blog</Link>
                </li>
                <li className="menu-list">
                  <Link to={""}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="header-icons">
              <div className="icon-link">
                <Link>
                  <img src="./images/location.svg" alt="" />
                </Link>
              </div>
              <div className="icon-link">
                <Link>
                  <img src="./images/location.svg" alt="" />
                </Link>
              </div>
              <div className="icon-link">
                <Link>
                  <img src="./images/location.svg" alt="" />
                </Link>
              </div>
              <div className="icon-link">
                <Link>
                  <img src="./images/location.svg" alt="" />
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
