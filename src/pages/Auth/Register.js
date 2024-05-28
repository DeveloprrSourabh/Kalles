import React, { useState } from "react";
import PageBanner from "../../components/PageBanner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register, updateUser } from "../../Slices/useSlice";
import Loader from "../../components/Loader";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  const dispatch = useDispatch();

  //   Input Values
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    answer: "",
  });
  const [photo, setPhoto] = useState("");
  const [display, setDisplay] = useState("none");

  //   Input onChange Value
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  //   Register Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(register(credentials));
    dispatch(getUser());
    setDisplay("block");
    setTimeout(() => {
      setDisplay("none");
    }, );
  };

  return (
    <>
      <section id="register-page">
        <Layout>
          <div className="loader-start">
            <Loader display={display} />
          </div>
          <div className="register">
            <div class="container">
              {/* <!-- Outer Row --> */}
              <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                  <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                      {/* <!-- Nested Row within Card Body --> */}
                      <div class="">
                        <div class="">
                          <div class="p-5">
                            <div class="text-center">
                              <h1 class="h4 text-gray-900 mb-4">
                                Welcome Back!
                              </h1>
                            </div>
                            <form class="user" method="POST">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div class="form-group">
                                    <input
                                      onChange={onChange}
                                      value={credentials.name}
                                      type="text"
                                      class="form-control form-control-user"
                                      name="name"
                                      aria-describedby="name"
                                      placeholder="Enter Name..."
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div class="form-group">
                                    <input
                                      type="text"
                                      class="form-control form-control-user"
                                      id="lastname"
                                      name="lastname"
                                      placeholder="Enter Last Name..."
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div class="form-group">
                                    <input
                                      onChange={onChange}
                                      value={credentials.email}
                                      type="email"
                                      class="form-control form-control-user"
                                      id="exampleInputEmail"
                                      name="email"
                                      placeholder="Enter Email Address..."
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  {" "}
                                  <div class="form-group">
                                    <input
                                      onChange={onChange}
                                      value={credentials.address}
                                      type="text"
                                      name="address"
                                      class="form-control form-control-user"
                                      placeholder="Enter Address..."
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div class="form-group">
                                    <input
                                      onChange={onChange}
                                      value={credentials.answer}
                                      type="text"
                                      name="answer"
                                      class="form-control form-control-user"
                                      placeholder="Enter Answer For Password Reseting..."
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div class="form-group">
                                    <input
                                      onChange={onChange}
                                      value={credentials.password}
                                      type="password"
                                      name="password"
                                      class="form-control form-control-user"
                                      placeholder="Enter Password..."
                                    />
                                  </div>
                                </div>
                              </div>

                              <button
                                onClick={handleSubmit}
                                class="btn btn-primary btn-user btn-block"
                              >
                                Register
                              </button>
                              <hr />
                            </form>
                            <hr />
                            <div class="text-center">
                              <Link class="small" to={"/login"}>
                                Login!
                              </Link>
                            </div>
                            <div class="text-center">
                              <Link class="small" to={"/forget"}>
                                Foget Password!
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

export default Register;
