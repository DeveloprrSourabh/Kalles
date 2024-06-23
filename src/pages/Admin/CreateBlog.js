import React, { useEffect, useRef, useState } from "react";
import Adminmenu from "../../components/Adminmenu";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags } from "../../Slices/tagSlice";
import { addBlog } from "../../Slices/blogSlice";
import { getAllBlogCategories } from "../../Slices/blogCategorySlice";

const CreateBlog = () => {
  const dispatch = useDispatch();

  //   Input Values
  const [blog, setBlog] = useState({
    name: "",
    slug: "",
    description: "",
    detail: "",
    price: "",
  });
  const [photo, setPhoto] = useState("");

  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  // Multiple Images
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Prepare preview images
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);

    // Prepare images for state
    const newImages = files.map((file) => ({
      file: file,
      name: file.name,
    }));
    setImages(newImages);
  };

  const handleRemoveImage = (index) => {
    // Create a copy of images state and remove the image at index
    const updatedImages = [...images];
    updatedImages.splice(index, 1); // Remove the image at the specified index
    setImages(updatedImages);

    // Update preview images
    const updatedPreviews = [...previewImages];
    updatedPreviews.splice(index, 1); // Remove the preview at the specified index

    setPreviewImages(updatedPreviews);
  };

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
        return prevSelectedTags.filter((tagId) => tagId !== value);
      }
    });
  };

  // Log the array to the console (or use it as needed)

  //   Input OnChange Value
  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  //   Add Product Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = new FormData();
    await blogData.append("name", blog.name);
    await blogData.append("description", blog.description);
    await blogData.append("tag", JSON.stringify(tag));
    await blogData.append("detail", blog.detail);
    await blogData.append("category", JSON.stringify(category));
    (await photo) && blogData.append("photo", photo);

    (await images) &&
      images.forEach((image, index) => {
        blogData.append(`images[${index}]`, image.file);
      });

    await dispatch(addBlog(blogData));

    // Reset form fields
    // setProduct({
    //   name: "",
    //   description: "",
    //   quantity: "",
    //   price: "",
    //   detail: "",
    //   sku: "",
    // });
    // setTag([]);
    // setCategory([]);
    // setSize([]);
    // setColor([]);
    // setPhoto(null);
    // setImages(null);
  };
  // Getting All Categories
  useEffect(() => {
    dispatch(getAllBlogCategories());
    dispatch(getAllTags());
  }, []);
  const allcate = useSelector((state) => state.blogcategory.allBlogCategories);
  const alltag = useSelector((state) => state.tag.allTags);

  return (
    <>
      <div id="admin-product">
        <div className="admin-profile">
          <div className="admin-row m-0 row">
            <div className="col-lg-3 p-0">
              <Adminmenu />
            </div>
            <div className="col-lg-9">
              <div className="item-add-form py-5 pe-5">
                <form action="" method="POST">
                  <div className="item-photo d-flex gap-4">
                    <label>
                      <div className="select-item-photo">
                        {photo && (
                          <img src={URL.createObjectURL(photo)} alt="" />
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

                    <div className="multiple-images">
                      <div className=" select-item-photo">
                        {previewImages.map((preview, index) => (
                          <>
                            <div className={`${index} multi position-relative`}>
                              <img
                                key={index}
                                src={preview}
                                alt=""
                                className={`${index}`}
                                id="multiimg"
                              />

                              <span
                                className="img-cut"
                                onClick={() => handleRemoveImage(index)}
                              >
                                ✕
                              </span>
                            </div>
                          </>
                        ))}
                      </div>
                      <label className=" ">
                        <div className="item-img-name">
                          {images.length > 0
                            ? `${images.length} images selected`
                            : "Upload Photos"}
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          multiple
                          hidden
                          id="fileInput"
                          name="images"
                        />
                      </label>
                    </div>
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
                      <div class="language product-drop">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Category
                          </button>
                          <ul class="dropdown-menu py-2">
                            {allcate?.map((e) => {
                              return (
                                <li>
                                  <div class="dropdown-item">
                                    <label>
                                      <input
                                        type="checkbox"
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
                    {/* tags */}
                    <div className="col-sm-6">
                      <div class="language product-drop">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Tags
                          </button>
                          <ul class="dropdown-menu py-2">
                            {alltag?.map((e) => {
                              return (
                                <li>
                                  <div class="dropdown-item">
                                    <label>
                                      <input
                                        type="checkbox"
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
                      ></input>
                    </div>
                    <div className="col-sm-12 my-3">
                      <textarea
                        name="description"
                        onChange={onChange}
                        value={blog.description}
                        placeholder="Enter Blog Descripton..."
                        id="description"
                      ></textarea>
                    </div>
                    <div className="col-sm-3">
                      {" "}
                      <div class="add-cart-btn effect" onClick={handleSubmit}>
                        Add Blog
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
