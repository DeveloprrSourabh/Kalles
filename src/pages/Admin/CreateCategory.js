import React, { useEffect, useRef, useState } from "react";
import Adminmenu from "../../components/Adminmenu";
import {
  addCategory,
  getAllCategories,
  updateCategory,
} from "../../Slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CreateCategory = () => {
  const host = "http://localhost:8000";

  let setfRef = useRef(true);
  let setsRef = useRef(true);

  const dispatch = useDispatch();
  // Getting All Categories
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  const allcate = useSelector((state) => state.category.allCategories);
  // const status = useSelector((state) => state.category.status);
  // const error = useSelector((state) => state.category.error);
  // console.log(status);
  // console.log(error);
  console.log(allcate);

  //   Input Values
  const [category, setCategory] = useState({
    name: "",
    catId: "",
    photo: "",
  });
  const [photo, setPhoto] = useState("");
  const [photourl, setPhotourl] = useState("");

  //   Input OnChange Value
  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  //   Add Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryData = new FormData();
    categoryData.append("name", category.name);
    categoryData.append("catId", category.catId);
    photo && categoryData.append("photo", photo);
    await dispatch(addCategory(categoryData));
    setCategory({ name: "" });
    setPhoto("");
    dispatch(getAllCategories());
  };
  // Get Photo
  const getPhoto = (e) => {
    return `${host}/api/v1/category/category-photo/${e}`;
  };
  //   Update Function
  const handleUpdate = async (e) => {
    e.preventDefault();
    const categoryData = new FormData();
    categoryData.append("name", category.name);
    categoryData.append("catId", category.catId);
    photo && categoryData.append("photo", photo);
    await dispatch(updateCategory({ categoryData, catId: category.catId }));
    getPhoto(category.catId);
    setCategory({ name: "", photo: "" });
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
              <div ref={setfRef} className="item-add-form py-5 pe-5">
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
              <div ref={setsRef} className="d-none item-add-form py-5 pe-5">
                <form action="" method="POST">
                  <div className="item-photo">
                    <label className="d-flex">
                      <div className="select-item-photo">
                        {photo ? (
                          <img src={URL.createObjectURL(photo)} alt="" />
                        ) : (
                          <img src={photourl} alt="" />
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
                      <div class="add-cart-btn effect" onClick={handleUpdate}>
                        Update Category
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
                        <li
                          key={e._id}
                          className="py-3 px-4 d-flex justify-content-between"
                        >
                          <div className="cate-photo-show">
                            <img
                              src={getPhoto(e._id)}
                              width={"50px"}
                              height={"50px"}
                              alt=""
                            />
                          </div>
                          <span className="tag-name text-black">
                            <b>{e.name}</b>
                          </span>
                          <span className="tag-oper d-flex gap-4">
                            <div
                              onClick={() => {
                                setfRef.current.classList.add("d-none");
                                setsRef.current.classList.remove("d-none");
                                setCategory({ name: e.name, catId: e._id });
                                setPhotourl(
                                  `${host}/api/v1/category/category-photo/${e?._id}`
                                );
                              }}
                              className="edit-tag"
                            >
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
