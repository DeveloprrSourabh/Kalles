import React from "react";
import PageBanner from "../../components/PageBanner";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";

const ForgetPasword = () => {
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  return (
    <>
      <section id="forget-page">
        <Layout>
          <div className="forget">
            <div class="container">
              {/* <!-- Outer Row --> */}
              <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                  <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                      {/* <!-- Nested Row within Card Body --> */}
                      <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div class="col-lg-6">
                          <div class="p-5">
                            <div class="text-center">
                              <h1 class="h4 text-gray-900 mb-4">
                                Welcome Back!
                              </h1>
                            </div>
                            <form class="user">
                              <div class="form-group">
                                <input
                                  type="email"
                                  class="form-control form-control-user"
                                  id="exampleInputEmail"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter Email Address..."
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="password"
                                  class="form-control form-control-user"
                                  id="exampleInputPassword"
                                  placeholder="Password"
                                />
                              </div>

                              <Link class="btn btn-primary btn-user btn-block">
                                Reset Password
                              </Link>
                              <hr />
                            </form>
                            <hr />
                            <div class="text-center">
                              <Link class="small" to={"/login"}>
                                Login!
                              </Link>
                            </div>
                            <div class="text-center">
                              <Link class="small" to={"/register"}>
                                Create an Account!
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ForgetPasword;
