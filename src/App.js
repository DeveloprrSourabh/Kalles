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
        <Route path="/blog/:id" element={<Singleblog />} />
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
          {/* Product Routes */}
          <Route path="admin/add-product" element={<CreateProduct />} />
          <Route path="admin/all-products" element={<AllProducts />} />
          <Route
            path="admin/update-product/:slug"
            element={<UpdateProduct />}
          />
          {/* Tag Routes */}
          <Route path="admin/add-tag" element={<AddTag />} />
          <Route path="admin/all-tags" element={<AllTags />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
