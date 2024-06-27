import React, { useEffect, useRef, useState } from "react";
import PageBanner from "../components/PageBanner";
import { Link, useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlogView } from "../Slices/blogSlice";

const Singleblog = () => {
  const location = useLocation();
  const page = location.pathname.replace("/", "");
  const ref = useRef();
  const params = useParams();
  const dispatch = useDispatch();
  const [photourl, setPhotourl] = useState("");
  // Fetch Blog
  useEffect(() => {
    dispatch(getSingleBlogView(params.slug));
  }, [dispatch, params.slug]);
  const host = "http://localhost:8000";
  const singleBlog = useSelector((state) => state.blog.singleBlogView);
  useEffect(() => {
    setPhotourl(`${host}/api/v1/blog/blog-photo/${singleBlog?.slug}`);
  }, [singleBlog]);
  console.log(singleBlog);
  return (
    <>
      <section id="single-blog-page">
        <Layout>
          {" "}
          <section id="page-banner">
            <PageBanner name={page} />
          </section>
          <div className="single-blog">
            <div className="single-blog-row row   mx-5 py-3 my-5">
              <div className="col-lg-8">
                <div className="single-blog-heading mb-4">
                  <h2>{singleBlog?.name}</h2>
                </div>
                <div className="single-blog-img mb-4">
                  <img src="/images/blog1.webp" width={"100%"} alt="" />
                </div>
                <div class="single-pro-desc pb-4">
                  {singleBlog?.description}
                </div>
                <div class="single-pro-desc pb-4">{singleBlog?.detail}</div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="blog-cat">
                    <h2 className="py-2 ">Categories</h2>
                    <ul className="px-0 py-3 m-0  d-flex  gap-3 flex-wrap">
                      {singleBlog?.category?.map((cat) => {
                        return (
                          <li className="">
                            <Link to="" className="">
                              {cat.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="blog-cat">
                    <h2 className="py-2 ">Tags</h2>
                    <ul className="px-0 py-3 m-0  d-flex  gap-3 flex-wrap">
                      {singleBlog?.tag?.map((tag) => {
                        return (
                          <li className="">
                            <Link to="" className="">
                              {tag.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
};

export default Singleblog;
