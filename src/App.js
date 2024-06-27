import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Blogpage from "./pages/Blog-page";
import Singleproduct from "./pages/Singleproduct";
import Singleblog from "./pages/Singleblog";
import Admindashboard from "./pages/Admin/Admindashboard";
import Profile from "./pages/Admin/Profile";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Products from "./pages/Admin/AllProducts";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import AdminRoute from "./components/Routes/AdminRoute";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgetPasword from "./pages/Auth/ForgetPassword";
import AllProducts from "./pages/Admin/AllProducts";
import AllCategory from "./pages/Admin/AllCategory";
import UpdateCategory from "./pages/Admin/UpdateCategory";
import AddTag from "./pages/Admin/AddTag";
import AllTags from "./pages/Admin/AllTags";
import AddColor from "./pages/Admin/AddColor";
import Cartpage from "./pages/Cartpage";
import PrivateRoute from "./components/Routes/PrivateRoute";
import CreateBlogCategory from "./pages/Admin/CreateBlogCategory";
import CreateBlog from "./pages/Admin/CreateBlog";
import AllBlogs from "./pages/Admin/AllBlogs";
import UpdateBlog from "./pages/Admin/UpdateBlog";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/shop/:slug" element={<Singleproduct />} />
        <Route path="/blog/:slug" element={<Singleblog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgetPasword />} />
        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Admindashboard />} />
          <Route path="admin/profile" element={<Profile />} />
          {/* Category Routes  */}
          <Route path="admin/add-category" element={<CreateCategory />} />
          <Route path="admin/all-category" element={<AllCategory />} />
          <Route
            path="admin/update-category/:slug"
            element={<UpdateCategory />}
          />
          {/* Blog Category Routes  */}
          <Route
            path="admin/add-blog-category"
            element={<CreateBlogCategory />}
          />

          {/* Blog Routes */}
          <Route path="admin/add-blog" element={<CreateBlog />} />
          <Route path="admin/all-blogs" element={<AllBlogs />} />
          <Route path="admin/update-blog/:slug" element={<UpdateBlog />} />

          {/* Product Routes */}
          <Route path="admin/add-product" element={<CreateProduct />} />
          <Route path="admin/all-products" element={<AllProducts />} />
          <Route
            path="admin/update-product/:slug"
            element={<UpdateProduct />}
          />
          {/* Tag Routes */}
          <Route path="admin/add-tag" element={<AddTag />} />
          {/* Color Routes */}
          <Route path="admin/add-color" element={<AddColor />} />
        </Route>
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="cart" element={<Cartpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
