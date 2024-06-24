import React, { useEffect } from "react";
import Adminmenu from "../../components/Adminmenu";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nodata from "../../components/Nodata";
import { deleteBlog, getAllBlogs } from "../../Slices/blogSlice";

const AllBlogs = () => {
  const host = "http://localhost:8000";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  const blogs = useSelector((state) => state.blog.allBlogs);
  // Delete Blog
  const handleDelete = async (e) => {
    await dispatch(deleteBlog(e));
    dispatch(getAllBlogs());
  };

  return (
    <>
      <div id="all-products-dashboard">
        <div className="admin-profile">
          <div className="admin-row row">
            <div className="col-lg-3">
              <Adminmenu />
            </div>
            <div className="col-lg-9">
              {" "}
              <div className="product-row row-gap-lg-5 pe-5 row">
                {blogs?.length !== 0 ? (
                  blogs?.map((item) => {
                    return (
                      <div key={item._id} className="col-sm-4">
                        <div className="product-card-link">
                          <div className="product-card   p-4 position-relative">
                            <div className="product-card-img">
                              <div className=" position-relative product_img-card">
                                <img
                                  className="first-img"
                                  src={`${host}/api/v1/blog/blog-photo/${item?.slug}`}
                                  alt=""
                                />
                                <img
                                  className="second-img"
                                  src={`${host}/api/v1/blog/blog-photo/${item?.slug}`}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="product-option position-absolute">
                              <div className="product-card-heart d-flex justify-content-center align-content-center">
                                <img src="./images/wish.svg" alt="" />
                              </div>{" "}
                              <div className="product-card-view">
                                <Link to={`../admin/update-blog/${item.slug}`}>
                                  {" "}
                                  <div className="first-option position-relative my-3">
                                    <div className="option-name">Edit Blog</div>
                                    <span className="option-icon">
                                      <img src="../../images/eye.svg" alt="" />
                                    </span>
                                  </div>
                                </Link>
                                <div className="first-option position-relative">
                                  <div className=" option-name">
                                    Delete Blog
                                  </div>
                                  <span
                                    className="all-dash-del option-icon "
                                    onClick={() => {
                                      handleDelete(item?._id);
                                    }}
                                  >
                                    <img src="../../images/delete.svg" alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="product-detail  py-2 hover">
                              <Link className="product-card-name">
                                {item.name}
                              </Link>
                              <div className="pro-card-price d-flex gap-2">
                                <div className="product-card-price text-danger">
                                  ${item.date}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Nodata message="blog" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
