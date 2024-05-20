import React, { useState } from "react";
import Adminmenu from "../../components/Adminmenu";
import { useDispatch } from "react-redux";
import { addTag } from "../../Slices/tagSlice";

const AddTag = () => {
  const dispatch = useDispatch();

  //   Input Values
  const [tag, setTag] = useState({
    name: "",
  });

  //   Input OnChange Value
  const onChange = (e) => {
    setTag({ ...tag, [e.target.name]: e.target.value });
  };

  //   Login Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addTag(tag));
    setTag({ name: "" });
  };
  return (
    <>
      <div id="admin-category-dashboard">
        <div className="admin-profile">
          <div className="admin-row row">
            <div className="col-lg-3">
              <Adminmenu />
            </div>
            <div className="col-lg-4">
              <div className="item-add-form py-5 pe-5">
                <form action="" method="POST">
                  <div className="row flex-column my-3">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={tag.name}
                        placeholder="Enter Tag Name..."
                      />
                    </div>

                    <div className="col-sm-12 my-3">
                      {" "}
                      <div class="add-cart-btn effect" onClick={handleSubmit}>
                        Add Tag
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTag;
