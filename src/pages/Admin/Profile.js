import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Adminmenu from "../../components/Adminmenu";

const host = "http://localhost:8000";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <div className="row no-padding my-account-wrapper">
        <div className="col-lg-3">
          <Adminmenu />
        </div>

        <div className="col-sm-9 no-padding"></div>
      </div>
    </div>
  );
};

export default Profile;
