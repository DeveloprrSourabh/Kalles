import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../Slices/categorySlice";

const Category = () => {
  const host = "http://localhost:8000";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const allCate = useSelector((state) => state.category.allCategories);
  console.log(allCate);
  return (
    <>
      <div id="cate-section">
        <div className="cate-row row mx-5 my-5">
          <div className="col-sm-6 py-0">
            <Link>
              <div className=" cate-img first d-flex justify-content-center">
                <img
                  src={`${host}/api/v1/category/category-photo/${allCate[0]?._id}`}
                  alt=""
                />
                <div className="cate-name">{allCate[0]?.name}</div>
              </div>
              <div className="cate-deco my-3">
                --------- CHECK OUT ALL CATEGORIES ----------
              </div>
            </Link>
          </div>
          <div className="col-sm-6 row">
            {allCate?.map((cate) => {
              return (
                <div key={cate?._id} className="col-lg-6">
                  <Link>
                    <div className="mb-4  cate-img d-flex justify-content-center">
                      <img
                        src={`${host}/api/v1/category/category-photo/${cate?._id}`}
                        alt=""
                      />
                      <div className="cate-name">{cate?.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
