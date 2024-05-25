import React, { useEffect, useState } from "react";
import { getAllCategories } from "../Slices/categorySlice";
import { useDispatch } from "react-redux";

const host = "http://localhost:8080";
const useCategory = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    const data = await dispatch(getAllCategories());
    // const data = await res.json();
    console.log(data.payload);
    console.log(data);
    setCategories(data.payload);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return categories;
};

export default useCategory;
