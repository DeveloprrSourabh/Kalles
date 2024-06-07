import React from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Adminmenu = () => {
  return (
    <>
      <Toaster />
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          class="sidebar-brand d-flex align-items-center justify-content-center"
          to={""}
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            Admin <sup>Pannel</sup>
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <Link class="nav-link" to={"../admin/profile"}>
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
        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div class="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li class="nav-item">
          <Link
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </Link>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Login Screens:</h6>
              <Link class="collapse-item" href="login.html">
                Login
              </Link>
              <Link class="collapse-item" href="register.html">
                Register
              </Link>
              <Link class="collapse-item" href="forgot-password.html">
                Forgot Password
              </Link>
              <div class="collapse-divider"></div>
              <h6 class="collapse-header">Other Pages:</h6>
              <Link class="collapse-item" href="404.html">
                404 Page
              </Link>
              <Link class="collapse-item" href="blank.html">
                Blank Page
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li class="nav-item">
          <Link class="nav-link" href="charts.html">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li class="nav-item">
          <Link class="nav-link" href="tables.html">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
    </>
  );
};

export default Adminmenu;
