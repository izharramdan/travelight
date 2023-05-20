import React from "react";

function Sidebar() {
  return (
    <>
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* Sidebar - Brand */}
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              
            </div>
            <div className="sidebar-brand-text mx-3">
              TraveLight
            </div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <a className="nav-link" href="/">
              
              <span>Dashboard</span>
            </a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/Admin"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              
              <span>User Role</span>
            </a>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            ></div>
          </li>
          {/* Nav Item - Utilities Collapse Menu */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/CreateBanner"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              
              <span>Create Banner</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/UpdateBanner"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              
              <span>Update Banner</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/CreatePromo"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              
              <span>Create Promo</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/UpdatePromo"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              
              <span>Update Promo</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/CreateCategory"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              
              <span>Create Category</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/UpdateCategory"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              
              <span>Update Category</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/CreateActivity"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              
              <span>Create Activity</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/UpdateActivity"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              
              <span>Update Activity</span>
            </a>
          </li>
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>
        </ul>
        {/* End of Sidebar */}
      </div>
    </>
  );
}

export default Sidebar;
