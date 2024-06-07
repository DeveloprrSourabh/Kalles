import React, { useEffect, useRef, useState } from "react";
import Adminmenu from "../../components/Adminmenu";
import { useDispatch, useSelector } from "react-redux";
import {
  addColor,
  deleteColor,
  getAllColors,
  updateColor,
} from "../../Slices/colorSlice";
import { Link } from "react-router-dom";

const AddColor = () => {
  const dispatch = useDispatch();
  let setfRef = useRef(true);
  let setsRef = useRef(true);
  // Getting All Colors
  useEffect(() => {
    dispatch(getAllColors());
  }, []);
  const allcolor = useSelector((state) => state.color.allColors);

  //   Input Values
  const [color, setColor] = useState({
    name: "",
    colorId: "",
  });
  // const [id, setId] = useState("");

  //   Input OnChange Value
  const onChange = (e) => {
    setColor({ ...color, [e.target.name]: e.target.value });
  };

  //   Add Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addColor(color));
    setColor({ name: "" });
    dispatch(getAllColors());
  };
  // Update Tag
  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateColor(color));
    setColor({ name: "" });
    dispatch(getAllColors());
    setfRef.current.classList.remove("d-none");
    setsRef.current.classList.add("d-none");
  };

  // Delete Color
  const delCate = (e) => {
    dispatch(deleteColor(e));
    dispatch(getAllColors());
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
                        value={color.name}
                        placeholder="Enter Color Name..."
                      />
                    </div>

                    <div className="col-sm-12 my-3">
                      {" "}
                      <div class="add-cart-btn effect" onClick={handleSubmit}>
                        Add Color
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
                        value={color.name}
                        placeholder="Enter Color Name..."
                      />
                    </div>

                    <div className="col-sm-12 my-3">
                      {" "}
                      <div class="add-cart-btn effect" onClick={handleUpdate}>
                        Update Color
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tag-list my-5 ms-4">
                <ul className="p-0 m-0">
                  {allcolor.length !== 0 ? (
                    allcolor?.map((e) => {
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
                                setColor({ name: e.name, colorId: e._id });
                              }}
                              className="edit-tag"
                            >
                              <img
                                width={20}
                                src="../../images/edit.svg"
                                alt=""
                              />
                            </div>
                            <div
                              className="delete-tag"
                              onClick={() => {
                                delCate(e._id);
                              }}
                            >
                              <img
                                width={20}
                                src="../../images/delete.svg"
                                alt=""
                              />
                            </div>
                          </span>
                        </li>
                      );
                    })
                  ) : (
                    <h2 className="text-center p-3">There is No Color</h2>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddColor;
