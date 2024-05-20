import React, { useState } from "react";
import Adminmenu from "../../components/Adminmenu";
import { addCategory } from "../../Slices/categorySlice";
import { useDispatch } from "react-redux";

const CreateCategory = () => {
  const dispatch = useDispatch();

  //   Input Values
  const [category, setCategory] = useState({
    name: "",
  });
  const [photo, setPhoto] = useState("");

  //   Input OnChange Value
  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  //   Login Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryData = new FormData();
    categoryData.append("name", category.name);
    photo && categoryData.append("photo", photo);
    await dispatch(addCategory(categoryData));
    setCategory({ name: "" });
    setPhoto("");
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
                  <div className="item-photo">
                    <label className="d-flex">
                      <div className="select-item-photo">
                        {photo && (
                          <img src={URL.createObjectURL(photo)} alt="" />
                        )}
                      </div>
                      <div className="item-img-name py-1 px-2">
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
                  <div className="row flex-column my-3">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={category.name}
                        placeholder="Enter Category Name..."
                      />
                    </div>

                    <div className="col-sm-12 my-3">
                      {" "}
                      <div class="add-cart-btn effect" onClick={handleSubmit}>
                        Add Category
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

export default CreateCategory;
