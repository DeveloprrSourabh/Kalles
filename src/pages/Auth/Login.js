import React, { useState } from "react";
import PageBanner from "../../components/PageBanner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import { login } from "../../Slices/useSlice";
import Loader from "../../components/Loader";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Login = () => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname.replace("/", "");

  //   Input Values
  const [credentails, setCredentails] = useState({
    email: "",
    password: "",
  });
  const [display, setDisplay] = useState("none");

  //   Input OnChange Value
  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };

  //   Login Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(credentails));
    setDisplay("block");
    // setTimeout(() => {
    //   setDisplay("none");
    // }, 1000);
  };
  return (
    <>
      <section id="login-page">
        <Layout>
          <div className="loader-start">
            <Loader display={display} />
          </div>
          <div className="login">
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
                                  id="email"
                                  onChange={onChange}
                                  value={credentails.email}
                                  name="email"
                                  placeholder="Enter Email Address..."
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  value={credentails.password}
                                  onChange={onChange}
                                  type="password"
                                  class="form-control form-control-user"
                                  id="passwrod"
                                  name="password"
                                  placeholder="Enter Password..."
                                />
                              </div>

                              <button
                                onClick={handleSubmit}
                                class="btn btn-primary btn-user btn-block"
                              >
                                Login
                              </button>
                              <hr />
                              <Link
                                to={""}
                                class="btn btn-google btn-user btn-block"
                              >
                                <i class="fab fa-google fa-fw"></i> Login with
                                Google
                              </Link>
                              <Link
                                to={""}
                                class="btn btn-facebook btn-user btn-block"
                              >
                                <i class="fab fa-facebook-f fa-fw"></i> Login
                                with Facebook
                              </Link>
                            </form>
                            <hr />
                            <div class="text-center">
                              <Link class="small" to={"/forget"}>
                                Forgot Password?
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

export default Login;
