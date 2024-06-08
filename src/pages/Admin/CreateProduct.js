import React, { useEffect, useState } from "react";
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

  //   Login Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    productData.append("name", product.name);
    productData.append("description", product.description);
    productData.append("quantity", product.quantity);
    productData.append("price", product.price);
    productData.append("tag", JSON.stringify(tag));
    productData.append("detail", product.detail);
    productData.append("category", JSON.stringify(category));
    productData.append("size", JSON.stringify(size));
    productData.append("color", JSON.stringify(color));
    productData.append("sku", product.sku);
    photo && productData.append("photo", photo);
    await dispatch(addProduct(productData));

    // Reset form fields
    setProduct({
      name: "",
      description: "",
      quantity: "",
      price: "",
      detail: "",
      sku: "",
    });
    setTag([]);
    setCategory([]);
    setSize([]);
    setColor([]);
    setPhoto(null);
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
                  <div className="item-photo">
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
