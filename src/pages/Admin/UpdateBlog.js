import React, { useState, useEffect } from "react";
import Adminmenu from "../../components/Adminmenu";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags } from "../../Slices/tagSlice";
import { getSingleBlog, updateBlog } from "../../Slices/blogSlice";
import { getAllBlogCategories } from "../../Slices/blogCategorySlice";

const UpdateBlog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [photourl, setPhotourl] = useState("");
  const host = "http://localhost:8000";
  const singleBlog = useSelector((state) => state.blog.singleBlog);
  console.log(singleBlog);
  // Fetch Blog and categories
  useEffect(() => {
    dispatch(getSingleBlog(params.slug));
    dispatch(getAllBlogCategories());
    dispatch(getAllTags());
  }, [dispatch, params.slug]);
  useEffect(() => {
    setPhotourl(`${host}/api/v1/blog/blog-photo/${singleBlog?.slug}`);
  }, [singleBlog]);
  // Initialize states
  const [blog, setBlog] = useState({
    name: "",
    slug: "",
    description: "",
    detail: "",
  });
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);

  // Update state when singleBlog changes
  useEffect(() => {
    if (singleBlog) {
      setBlog({
        name: singleBlog.name || "",
        slug: singleBlog.slug || "",
        description: singleBlog.description || "",
        detail: singleBlog.detail || "",
      });
      setCategory(singleBlog.category?.map((e) => e._id) || []);
      setTag(singleBlog.tag?.map((e) => e._id) || []);
    }
  }, [singleBlog]);

  // Category Function
  const onCheck = (event) => {
    const { value, checked } = event.target;
    setCategory((prevSelectedCategories) => {
      if (checked) {
        return [...prevSelectedCategories, value];
      } else {
        return prevSelectedCategories.filter(
          (categoryId) => categoryId !== value
        );
      }
    });
  };

  // Tag Function
  const onCheckTag = (event) => {
    const { value, checked } = event.target;
    setTag((prevSelectedTags) => {
      if (checked) {
        return [...prevSelectedTags, value];
      } else {
        return prevSelectedTags.filter((tag) => tag !== value);
      }
    });
  };

  // Input OnChange Value
  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  // Update Blog Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = new FormData();
    blogData.append("name", blog.name);
    blogData.append("description", blog.description);
    blogData.append("quantity", blog.quantity);
    blogData.append("price", blog.price);
    blogData.append("category", JSON.stringify(category));
    blogData.append("tag", JSON.stringify(tag));
    blogData.append("detail", blog.detail);
    blogData.append("sku", blog.sku);
    photo && blogData.append("photo", photo);
    await dispatch(updateBlog({ blogData, slug: blog.slug }));
  };

  // Getting all categories, tags
  const allCategories = useSelector((state) => state.category.allCategories);
  const allTags = useSelector((state) => state.tag.allTags);
  return (
    <div id="admin-product">
      <div className="admin-profile">
        <div className="admin-row m-0 row">
          <div className="col-lg-3 p-0">
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
                        <img src={photourl} alt="" />
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
                      value={blog.name}
                      placeholder="Enter Blog Name..."
                    />
                  </div>

                  {/* Category */}
                  <div className="col-sm-6">
                    <div className="language product-drop">
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Category
                        </button>
                        <ul className="dropdown-menu py-2">
                          {allCategories?.map((e) => {
                            return (
                              <li key={e._id}>
                                <div className="dropdown-item">
                                  <label>
                                    <input
                                      type="checkbox"
                                      checked={
                                        category && category.includes(e._id)
                                      }
                                      onChange={onCheck}
                                      name="category[]"
                                      value={e._id}
                                    />{" "}
                                    {e.name}
                                  </label>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="col-sm-12 mb-2">
                    <div className="language product-drop">
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Tags
                        </button>
                        <ul className="dropdown-menu py-2">
                          {allTags?.map((e) => {
                            return (
                              <li key={e._id}>
                                <div className="dropdown-item">
                                  <label>
                                    <input
                                      type="checkbox"
                                      checked={tag && tag.includes(e._id)}
                                      onChange={onCheckTag}
                                      name="tag[]"
                                      value={e._id}
                                    />{" "}
                                    {e.name}
                                  </label>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <input
                      name="detail"
                      value={blog.detail}
                      onChange={onChange}
                      placeholder="Enter Blog Detail..."
                      id="detail"
                    />
                  </div>
                  <div className="col-sm-12 my-3">
                    <textarea
                      name="description"
                      onChange={onChange}
                      value={blog.description}
                      placeholder="Enter Product Description..."
                      id="description"
                    ></textarea>
                  </div>
                  <div className="col-sm-3">
                    <div className="add-cart-btn effect" onClick={handleSubmit}>
                      Update Blog
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
