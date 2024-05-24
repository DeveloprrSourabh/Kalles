import React from "react";
import { Link } from "react-router-dom";

const Nodata = ({ message }) => {
  return (
    <div className="no-data d-flex align-items-center justify-content-center">
      <h2 className="text-center hover">
        There is no {message}.{" "}
        <Link to={"../admin/add-product"}>Please Enter a {message} </Link>
      </h2>
    </div>
  );
};

export default Nodata;
