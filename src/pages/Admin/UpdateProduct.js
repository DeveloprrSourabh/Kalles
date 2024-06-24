import React, { useState, useEffect } from "react";
import Adminmenu from "../../components/Adminmenu";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, updateProduct } from "../../Slices/productSlice";
import { getAllCategories } from "../../Slices/categorySlice";
import { getAllTags } from "../../Slices/tagSlice";
import { getAllColors } from "../../Slices/colorSlice";

const UpdateProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [photourl, setPhotourl] = useState("");
  const host = "http://localhost:8000";
  const singleProduct = useSelector((state) => state.product.singleProduct);
  useEffect(() => {
    setPhotourl(`${host}/api/v1/product/product-photo/${singleProduct?.slug}`);
  }, [singleProduct]);
  // Fetch product and categories
  useEffect(() => {
    dispatch(getSingleProduct(params.slug));
    dispatch(getAllCategories());
    dispatch(getAllTags());
    dispatch(getAllColors());
  }, [dispatch, params.slug]);

  // Initialize states
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

  // Update state when singleProduct changes
  useEffect(() => {
    if (singleProduct) {
      setProduct({
        name: singleProduct.name || "",
        slug: singleProduct.slug || "",
        description: singleProduct.description || "",
        detail: singleProduct.detail || "",
        price: singleProduct.price || "",
        quantity: singleProduct.quantity || "",
        sku: singleProduct.sku || "",
      });
      setCategory(singleProduct.category?.map((e) => e._id) || []);
      setTag(singleProduct.tag?.map((e) => e._id) || []);
      setSize(singleProduct.size || []);
      setColor(singleProduct.color?.map((e) => e._id) || []);
    }
  }, [singleProduct]);

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

  // Color Function
  const onCheckColor = (event) => {
    const { value, checked } = event.target;
    setColor((prevSelectedColors) => {
      if (checked) {
        return [...prevSelectedColors, value];
      } else {
        return prevSelectedColors.filter((color) => color !== value);
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
  useEffect(() => {
    console.log(size);
  }, [onCheckSize]);
  // Input OnChange Value
  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Update Product Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    productData.append("name", product.name);
    productData.append("description", product.description);
    productData.append("quantity", product.quantity);
    productData.append("price", product.price);
    productData.append("category", JSON.stringify(category));
    productData.append("tag", JSON.stringify(tag));
    productData.append("detail", product.detail);
    productData.append("size", JSON.stringify(size));
    productData.append("color", JSON.stringify(color));
    productData.append("sku", product.sku);
    photo && productData.append("photo", photo);
    await dispatch(updateProduct({ productData, slug: product.slug }));
  };

  // Getting all categories, tags, and colors
  const allCategories = useSelector((state) => state.category.allCategories);
  const allTags = useSelector((state) => state.tag.allTags);
  const allColors = useSelector((state) => state.color.allColors);

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
                      placeholder="Enter Product Quantity..."
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="sku"
                      value={product.sku}
                      onChange={onChange}
                      placeholder="Enter Product SKU..."
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
                  <div className="col-sm-6">
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
                  {/* Size */}
                  <div className="col-sm-6">
                    <div className="language product-drop">
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Size
                        </button>
                        <ul className="dropdown-menu py-2">
                          <li>
                            <div className="dropdown-item">
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
                            <div className="dropdown-item">
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
                    <div className="language product-drop">
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Color
                        </button>
                        <ul className="dropdown-menu py-2">
                          {allColors?.map((e) => {
                            return (
                              <li key={e._id}>
                                <div className="dropdown-item">
                                  <label>
                                    <input
                                      type="checkbox"
                                      checked={color && color.includes(e._id)}
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
                    />
                  </div>
                  <div className="col-sm-12 my-3">
                    <textarea
                      name="description"
                      onChange={onChange}
                      value={product.description}
                      placeholder="Enter Product Description..."
                      id="description"
                    ></textarea>
                  </div>
                  <div className="col-sm-3">
                    <div className="add-cart-btn effect" onClick={handleSubmit}>
                      Update Product
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

export default UpdateProduct;
