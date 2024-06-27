import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllBlogs } from "../Slices/blogSlice";

const Blog = () => {
  const host = "http://localhost:8000";
  const dispatch = useDispatch();
  const params = useParams();
  // Fetch Blogs
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch, params.slug]);

  const allBlog = useSelector((state) => state.blog.allBlogs);
  return (
    <>
      <div className="mx-5 py-3 my-5 main-blogs">
        <div className="div-heading my-3">
          <div className="cate-deco mt-3 heading">
            <div className="main-heading mx-auto">LATES FROM BLOG</div>
          </div>
          <div className="sub-heading my-2 text-center">
            The freshest and most exciting news
          </div>
        </div>
        <div className="row ">
          {allBlog?.map((blg) => {
            return (
              <div className="col-sm-4 pb-3 pt-3">
                <div className="blog-card  blogs-all-card ">
                  <Link to={`/blog/${blg?.slug}`}>
                    <div className="blog-card-img">
                      <img
                        src={`${host}/api/v1/blog/blog-photo/${blg?.slug}`}
                        alt="blog's image"
                      />
                    </div>
                    <div className="blog-card-detail px-4 py-2">
                      <div className="blog-card-heading hover pt-2">
                        <Link to={`/blog/${blg?.slug}`}>{blg?.name}</Link>
                      </div>
                      <div className="blog-card-date pb-2 pt-1">
                        Uploaded <span className="text-secondary">on </span>{" "}
                        {new Date(blg?.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-secondary blog-card-desc">
                        <p>{blg?.description.slice(0, 15)}, ...</p>
                      </div>
                    </div>{" "}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
