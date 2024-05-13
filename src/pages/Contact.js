import React from "react";
import PageBanner from "../components/PageBanner";
import Layout from "../components/Layout";
import { Link, useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  return (
    <>
      <Layout>
        <section id="contact-page">
          <section id="page-banner">
            <PageBanner name={page} />
          </section>
          <div className="contact-page-start  mx-5 py-3 my-5 hover">
            <div className="row contact-row">
              <div className="col-lg-4 p-5 bg-body-secondary">
                <div class="footer-first-row ">
                  <div class="footer-logo pb-4 contact-logo">
                    <img width="100" src="./images/logo.avif" alt="" />
                  </div>
                  <div class="footer-contact d-flex py-3 gap-1">
                    <img
                      class="mt-1 "
                      src="./images/location.svg"
                      width="22px"
                      alt=""
                    />
                    <div class="footer-contact-desc ps-2 ">
                      <Link> 184 Main Rd E, St Albans VIC 3021, Australia</Link>
                    </div>
                  </div>
                  <div class="footer-contact d-flex py-3 gap-1">
                    <img
                      class="mt-1 "
                      src="./images/email.svg"
                      width="22px"
                      alt=""
                    />
                    <div class="footer-contact-desc ps-2 ">
                      <Link to={"mailto: contact@company.com"}>
                        {" "}
                        contact@company.com
                      </Link>
                    </div>
                  </div>
                  <div class="footer-contact d-flex py-3 gap-1">
                    <img
                      class="mt-1 "
                      src="./images/phone.svg"
                      width="22px"
                      alt=""
                    />
                    <div class="footer-contact-desc ps-2 ">
                      <Link>+001 2233 456</Link>
                    </div>
                  </div>
                  <div class="footer-contact-icon d-flex gap-4 py-3 hover">
                    <a href="/contact">
                      <img src="./images/fb.svg" width="15px" alt="" />
                    </a>
                    <a href="/contact">
                      <img src="./images/twitter.svg" width="15px" alt="" />
                    </a>
                    <a href="/contact">
                      <img src="./images/insta.svg" width="15px" alt="" />
                    </a>
                    <a href="/contact">
                      <img src="./images/linkedin.svg" width="15px" alt="" />
                    </a>
                    <a href="/contact">
                      <img src="./images/twitter.svg" width="15px" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pb-5 px-5">
                {" "}
                <form action="" className="contact-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-form-input py-2">
                        <input type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form-input py-2">
                        <input type="text" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form-input py-2">
                        <input type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form-input py-2">
                        <input type="text" placeholder="Address" />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="contact-form-input py-2">
                        <textarea name="" rows={7} id=""></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                      <div className="contact-form-btn">
                        <button className="form-btn">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
