import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Product from "../components/Product";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Category />
      <Product />
    </Layout>
  );
};

export default Home;
