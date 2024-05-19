import React from "react";
import Adminmenu from "../../components/Adminmenu";

const UpdateProduct = () => {
  return (
    <>
      <div id="admin-dashboard">
        <div className="admin-profile">
          <div className="admin-row row">
            <div className="col-lg-3">
              <Adminmenu />
            </div>
            <div className="col-lg-9">Update Product</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
