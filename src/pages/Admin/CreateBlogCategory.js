import React, { useEffect, useRef, useState } from "react";
import Adminmenu from "../../components/Adminmenu";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleProduct } from "../../Slices/productSlice";
import Nodata from "../../components/Nodata";
import {
  addBlogCategory,
  deleteBlogCategory,
  getAllBlogCategories,
  updateBlogCategory,
} from "../../Slices/blogCategorySlice";

const CreateBlogCategory = () => {
  const host = "http://localhost:8000";
  let setfRef = useRef(true);
  let setsRef = useRef(true);

  const dispatch = useDispatch();
  // Getting All Categories
  useEffect(() => {
    dispatch(getAllBlogCategories());
  }, []);
  const allcate = useSelector((state) => state.blogcategory.allBlogCategories);
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
    await dispatch(addBlogCategory(categoryData));
    setCategory({ name: "" });
    setPhoto("");
    dispatch(getAllBlogCategories());
  };
  // Get Photo
  const getPhoto = (e) => {
    return `${host}/api/v1/category/blog-category-photo/${e}`;
  };
  //   Update Function
  const handleUpdate = async (e) => {
    e.preventDefault();
    const categoryData = new FormData();
    categoryData.append("name", category.name);
    categoryData.append("catId", category.catId);
    photo && categoryData.append("photo", photo);
    await dispatch(updateBlogCategory({ categoryData, catId: category.catId }));
    setCategory({ name: "", photo: "" });
    setPhoto("");
    dispatch(getAllBlogCategories());
    setfRef.current.classList.remove("d-none");
    setsRef.current.classList.add("d-none");
  };

  // Delete Category
  const delCate = (e) => {
    dispatch(deleteBlogCategory(e));
    dispatch(getAllBlogCategories());
  };
  return (
    <>
      <div id="admin-category-dashboard">
        <div className="admin-profile">
          <div className="admin-row row">
            <div className="col-lg-4">
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
                  {allcate.length !== 0 ? (
                    Array.isArray(allcate) ? (
                      allcate?.map((e) => {
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
                                    `${host}/api/v1/category/blog-category-photo/${e?._id}`
                                  );
                                }}
                                className="edit-tag"
                              >
                                {/* <Link to={""}> */}
                                <img
                                  width={20}
                                  src="../../images/edit.svg"
                                  alt=""
                                />
                                {/* </Link> */}
                              </div>
                              <div
                                className="delete-tag"
                                onClick={() => {
                                  delCate(e._id);
                                }}
                              >
                                <img
                                  width={20}
                                  src="../../images/delete.svg"
                                  alt=""
                                />
                              </div>
                            </span>
                          </li>
                        );
                      })
                    ) : (
                      ""
                    )
                  ) : (
                    <h2 className="text-center p-3">There is No Category</h2>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlogCategory;
