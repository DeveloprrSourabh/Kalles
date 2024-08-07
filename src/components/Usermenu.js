import React from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const usermenu = () => {
  return (
    <>
      <Toaster />
      <ul
        class="navbar-nav  sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          class="sidebar-brand d-flex align-items-center justify-content-center"
          to={"../../"}
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            Go To <sup>Site</sup>
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <Link class="nav-link" to={"../user/profile"}>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Profile</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div class="sidebar-heading">Product</div>

        {/* <!-- Product Collapse Menu --> */}
        <li class="nav-item">
          <Link
            class="nav-link collapsed"
            to={"#"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Product</span>
          </Link>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Products</h6>
              <Link class="collapse-item" to="../admin/add-product">
                Add Product
              </Link>

              <Link class="collapse-item" to="../admin/all-products">
                All Products
              </Link>
            </div>
          </div>
        </li>
        {/* <!-- Category Collapse Menu --> */}
        <li class="nav-item">
          <Link
            class="nav-link collapsed"
            to={"#"}
            data-toggle="collapse"
            data-target="#category"
            aria-expanded="true"
            aria-controls="category"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Category</span>
          </Link>
          <div
            id="category"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Category</h6>
              <Link class="collapse-item" to="../admin/add-category">
                Add Category
              </Link>
            </div>
          </div>
        </li>
        {/* <!--Blog Category Collapse Menu --> */}
        <li class="nav-item">
          <Link
            class="nav-link collapsed"
            to={"#"}
            data-toggle="collapse"
            data-target="#blogcategory"
            aria-expanded="true"
            aria-controls="blogcategory"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Blog Category</span>
          </Link>
          <div
            id="blogcategory"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Category</h6>
              <Link class="collapse-item" to="../admin/add-blog-category">
                Add Blog Category
              </Link>
            </div>
          </div>
        </li>
        {/* <!-- Tag Collapse Menu --> */}
        <li class="nav-item">
          <Link
            class="nav-link collapsed"
            to={"#"}
            data-toggle="collapse"
            data-target="#tag"
            aria-expanded="true"
            aria-controls="tag"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Tag</span>
          </Link>
          <div
            id="tag"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Tag</h6>
              <Link class="collapse-item" to="../admin/add-tag">
                Add Tag
              </Link>
            </div>
          </div>
        </li>
        {/* <!-- Color Collapse Menu --> */}
        <li class="nav-item">
          <Link
            class="nav-link collapsed"
            to={"#"}
            data-toggle="collapse"
            data-target="#color"
            aria-expanded="true"
            aria-controls="color"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Color</span>
          </Link>
          <div
            id="color"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Tag</h6>
              <Link class="collapse-item" to="../admin/add-color">
                Add Color
              </Link>
            </div>
          </div>
        </li>
        {/* <!-- Blog Collapse Menu --> */}
        <li class="nav-item">
          <Link
            class="nav-link collapsed"
            to={"#"}
            data-toggle="collapse"
            data-target="#blog"
            aria-expanded="true"
            aria-controls="blog"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Blog</span>
          </Link>
          <div
            id="blog"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Blogs</h6>
              <Link class="collapse-item" to="../admin/add-blog">
                Add Blog
              </Link>

              <Link class="collapse-item" to="../admin/all-blogs">
                All Blogs
              </Link>
            </div>
          </div>
        </li>
        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />
      </ul>
    </>
  );
};

export default usermenu;
