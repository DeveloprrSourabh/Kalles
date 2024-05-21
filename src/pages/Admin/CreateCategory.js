import React, { useEffect, useState } from "react";
import Adminmenu from "../../components/Adminmenu";
import { addCategory, getAllCategories } from "../../Slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CreateCategory = () => {
  const host = "http://localhost:8000";
  const dispatch = useDispatch();
  // Getting All Categories
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  const allcate = useSelector((state) => state.category.allCategories);
  console.log(allcate);

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
    dispatch(getAllCategories());
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
            <div className="col-lg-4">
              <div className="tag-list my-5 ms-4">
                <ul className="p-0 m-0">
                  {allcate &&
                    allcate.map((e) => {
                      return (
                        <li className="py-3 px-4 d-flex justify-content-between">
                          <div className="cate-photo-show">
                            <img
                              src={`${host}/api/v1/category/category-photo/${e?._id}`}
                              width={"50px"}
                              height={"50px"}
                              alt=""
                            />
                          </div>
                          <span className="tag-name text-black">
                            <b>{e.name}</b>
                          </span>
                          <span className="tag-oper d-flex gap-4">
                            <div className="edit-tag">
                              <Link to={""}>
                                <i class="fa-solid fa-pen-to-square"></i>
                              </Link>
                            </div>
                            <div className="delete-tag">
                              <i class="fa-duotone fa-trash"></i>
                            </div>
                          </span>
                        </li>
                      );
                    })}{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
