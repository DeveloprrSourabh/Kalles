import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div id="cate-section">
        <div className="cate-row row mx-5 my-5">
          <div className="col-sm-6 py-0">
            <Link>
              <div className=" cate-img d-flex justify-content-center">
                <img src="./images/cate1.webp" alt="" />
                <div className="cate-name">Women</div>
              </div>
              <div className="cate-deco my-3">
                --------- CHECK OUT ALL CATEGORIES ----------
              </div>
            </Link>
          </div>
          <div className="col-sm-3">
            <Link>
              <div className="mb-4  cate-img d-flex justify-content-center">
                <img src="./images/cate2.jpg" alt="" />
                <div className="cate-name">Accessories</div>
              </div>
            </Link>
            <Link>
              <div className="cate-img d-flex justify-content-center">
                <img src="./images/cate4.avif" alt="" />
                <div className="cate-name">Watchs</div>
              </div>
            </Link>
          </div>
          <div className="col-sm-3">
            <Link>
              <div className=" mb-4 cate-img d-flex justify-content-center">
                <img src="./images/cate3.webp" alt="" />
                <div className="cate-name">Footwear</div>
              </div>
            </Link>
            <Link>
              <div className="cate-img d-flex justify-content-center">
                <img src="./images/cate1.webp" alt="" />
                <div className="cate-name">Footwear</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
