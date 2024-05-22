import React, { useEffect, useRef, useState } from "react";
import Adminmenu from "../../components/Adminmenu";
import { useDispatch, useSelector } from "react-redux";
import { addTag, getAllTags, updateTag } from "../../Slices/tagSlice";
import { Link } from "react-router-dom";

const AddTag = () => {
  const dispatch = useDispatch();
  let setfRef = useRef(true);
  let setsRef = useRef(true);
  // Getting All Tags
  useEffect(() => {
    dispatch(getAllTags());
  }, []);
  const alltag = useSelector((state) => state.tag.allTags);
  console.log(alltag);

  //   Input Values
  const [tag, setTag] = useState({
    name: "",
    tagId: "",
  });
  // const [id, setId] = useState("");

  //   Input OnChange Value
  const onChange = (e) => {
    setTag({ ...tag, [e.target.name]: e.target.value });
  };

  //   Add Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addTag(tag));
    setTag({ name: "" });
    dispatch(getAllTags());
  };
  // Update Tag
  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateTag(tag));
    setTag({ name: "" });
    dispatch(getAllTags());
    setfRef.current.classList.remove("d-none");
    setsRef.current.classList.add("d-none");
  };
  return (
    <>
      <div id="admin-category-dashboard">
        <div className="admin-profile">
          <div className="admin-row row">
            <div className="col-lg-3">
              <Adminmenu />
            </div>
            <div className="col-lg-4">
              <div ref={setfRef} className="item-add-form py-5 pe-5">
                <form action="" method="POST">
                  <div className="row flex-column my-3">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={tag.name}
                        placeholder="Enter Tag Name..."
                      />
                    </div>

                    <div className="col-sm-12 my-3">
                      {" "}
                      <div class="add-cart-btn effect" onClick={handleSubmit}>
                        Add Tag
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div ref={setsRef} className="d-none item-add-form py-5 pe-5">
                <form action="" method="POST">
                  <div className="row flex-column my-3">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={tag.name}
                        placeholder="Enter Tag Name..."
                      />
                    </div>

                    <div className="col-sm-12 my-3">
                      {" "}
                      <div class="add-cart-btn effect" onClick={handleUpdate}>
                        Update Tag
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tag-list my-5 ms-4">
                <ul className="p-0 m-0">
                  {alltag?.map((e) => {
                    return (
                      <li className="py-3 px-4 d-flex justify-content-between">
                        <span className="tag-name text-black">
                          <b>{e.name}</b>
                        </span>
                        <span className="tag-oper d-flex gap-4">
                          <div
                            onClick={() => {
                              setfRef.current.classList.add("d-none");
                              setsRef.current.classList.remove("d-none");
                              setTag({ name: e.name, tagId: e._id });
                              // setId(e._id);
                              // console.log(e._id);
                            }}
                            className="edit-tag"
                          >
                            <Link to={""}>
                              <i class="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </div>
                          <div className="delete-tag">
                            <i class="fa-duotone fa-trash"></i>
                          </div>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTag;
