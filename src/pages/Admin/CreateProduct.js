import React, { useEffect, useRef, useState } from "react";
import Adminmenu from "../../components/Adminmenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Slices/productSlice";
import { getAllCategories } from "../../Slices/categorySlice";
import useCategory from "../../hooks/useCategory";
import { getAllTags } from "../../Slices/tagSlice";
import { getAllColors } from "../../Slices/colorSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();

  //   Input Values
  const [product, setProduct] = useState({
    name: "",
    slug: "",
    description: "",
    detail: "",
    price: "",
    quantity: "",
    sku: "",
  });
  const [photo, setPhoto] = useState("");

  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

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
  // Color Function
  const onCheckColor = (event) => {
    const { value, checked } = event.target;
    setColor((prevSelectedColors) => {
      if (checked) {
        return [...prevSelectedColors, value];
      } else {
        return prevSelectedColors.filter((colorId) => colorId !== value);
      }
    });
  };
  // Size Function
  const onCheckSize = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSize([...size, value]);
    } else {
      setSize(size.filter((sz) => sz !== value));
    }
  };

  // Log the array to the console (or use it as needed)

  //   Input OnChange Value
  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  //   Add Product Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    await productData.append("name", product.name);
    await productData.append("description", product.description);
    await productData.append("quantity", product.quantity);
    await productData.append("price", product.price);
    await productData.append("tag", JSON.stringify(tag));
    await productData.append("detail", product.detail);
    await productData.append("category", JSON.stringify(category));
    await productData.append("size", JSON.stringify(size));
    await productData.append("color", JSON.stringify(color));
    await productData.append("sku", product.sku);
    (await photo) && productData.append("photo", photo);

    (await images) &&
      images.forEach((image, index) => {
        productData.append(`images[${index}]`, image.file);
      });
    console.log(productData);

    await dispatch(addProduct(productData));

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
    dispatch(getAllCategories());
    dispatch(getAllTags());
    dispatch(getAllColors());
  }, []);
  const allcate = useSelector((state) => state.category.allCategories);
  const alltag = useSelector((state) => state.tag.allTags);
  const allcolor = useSelector((state) => state.color.allColors);

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
                        value={product.name}
                        placeholder="Enter Product Name..."
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        placeholder="Enter Product Price..."
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        onChange={onChange}
                        placeholder="Enter Product Quatity..."
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        name="sku"
                        value={product.sku}
                        onChange={onChange}
                        placeholder="Enter Product Sku..."
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
                    {/* Size */}
                    <div className="col-sm-6">
                      <div class="language product-drop">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Select Size
                          </button>
                          <ul class="dropdown-menu py-2">
                            <li>
                              <div class="dropdown-item">
                                <label>
                                  <input
                                    checked={size.includes("M")}
                                    onChange={onCheckSize}
                                    type="checkbox"
                                    name="size[]"
                                    value="M"
                                  />{" "}
                                  M
                                </label>
                              </div>
                            </li>
                            <li>
                              <div class="dropdown-item">
                                <label>
                                  <input
                                    checked={size.includes("L")}
                                    onChange={onCheckSize}
                                    type="checkbox"
                                    name="size[]"
                                    value="L"
                                  />{" "}
                                  L
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Color */}
                    <div className="col-sm-6">
                      <div class="language product-drop">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Select Color
                          </button>
                          <ul class="dropdown-menu py-2">
                            {allcolor?.map((e) => {
                              return (
                                <li>
                                  <div class="dropdown-item">
                                    <label>
                                      <input
                                        type="checkbox"
                                        onChange={onCheckColor}
                                        name="color[]"
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
                        value={product.detail}
                        onChange={onChange}
                        placeholder="Enter Product Detail..."
                        id="detail"
                      ></input>
                    </div>
                    <div className="col-sm-12 my-3">
                      <textarea
                        name="description"
                        onChange={onChange}
                        value={product.description}
                        placeholder="Enter Product Descripton..."
                        id="description"
                      ></textarea>
                    </div>
                    <div className="col-sm-3">
                      {" "}
                      <div class="add-cart-btn effect" onClick={handleSubmit}>
                        Add Product
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

export default CreateProduct;
