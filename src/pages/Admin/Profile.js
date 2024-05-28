import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Adminmenu from "../../components/Adminmenu";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Slices/useSlice";

const host = "http://localhost:8000";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    console.log(auth);
  }, []);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //   Input Values
  const [credentials, setCredentials] = useState({
    name: auth?.user?.name,
    email: auth?.user?.email,
    password: auth?.user?.password,
    address: auth?.user?.address,
    answer: auth?.user?.answer,
  });

  const [photo, setPhoto] = useState("");
  //   Input OnChange Value
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(auth);
  };

  //   Login Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = new FormData();
    userData.append("name", credentials.name);
    userData.append("email", credentials.email);
    userData.append("password", credentials.password);
    userData.append("answer", credentials.answer);
    userData.append("address", credentials.address);
    photo && userData.append("photo", photo);
    await dispatch(updateUser(userData));
    setPhoto("");
  };
  return (
    <div className="admin-dashboard">
      <div className="row no-padding my-account-wrapper">
        <div className="col-lg-3">
          <Adminmenu />
        </div>

        <div className="col-lg-9">
          <div className="item-add-form py-5 pe-5">
            <form action="" method="POST">
              <div className="item-photo">
                <label>
                  <div className="select-item-photo">
                    {photo ? (
                      <img src={URL.createObjectURL(photo)} alt="" />
                    ) : (
                      <img
                        src={`${host}/api/v1/auth/user-photo/${auth?.user?.id}`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="item-img-name">
                    {photo ? photo?.name.substring(0, 20) : "Upload Photo"}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setPhoto(e.target.files[0]);
                    }}
                    hidden
                    name="photo"
                  />
                </label>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={credentials.name}
                    placeholder="Enter Name..."
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                    placeholder="Enter Email..."
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    placeholder="Enter Password..."
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="answer"
                    value={credentials.answer}
                    onChange={onChange}
                    placeholder="Enter Answer..."
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    type="text"
                    name="address"
                    value={credentials.address}
                    onChange={onChange}
                    placeholder="Enter Address..."
                  />
                </div>

                <div className="col-sm-3 my-3">
                  {" "}
                  <div class="add-cart-btn effect" onClick={handleSubmit}>
                    Update Profile
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
