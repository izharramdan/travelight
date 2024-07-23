import React, { useState } from "react";
import LoginLogout from "./LoginLogout";
// import UserProfile from "./UserProfile";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  // const [showProfile, setShowProfile] = useState(false);
  // const [user, setUser] = useState(null);

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.reload();
  };

  // const handleProfile = () => {
  //   setShowProfile(true);
  // };

  return (
    <nav className="navbar navbar-expand-lg">
      <a href="/" className="navbar-brand">
        Trave<span>Light</span>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        id="navbarCollapse"
        className="collapse navbar-collapse justify-content-start"
      >
        <div className="navbar-nav mx-auto">
          <a href="/" className="nav-item nav-link">
            Home
          </a>
        </div>
        <div className="navbar-nav ml-auto action-buttons">
          <div className="nav-item dropdown">
            {token ? (
              <>
                <a
                  href="#"
                  className="nav-link dropdown-toggle mr-4"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  My Profile
                </a>
                <ul className="dropdown-menu action-form">
                  <li>
                    <div>
                      <a href="/UserProfile">Edit Profile</a>
                    </div>
                    <div>
                      <a href="/Admin">Admisitrator</a>
                    </div>
                  </li>
                  <li onClick={handleLogout}>
                    <button href="#">Logout</button>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <a
                  href="#"
                  className="nav-link dropdown-toggle mr-4"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Login
                </a>
                <div className="dropdown-menu action-form">
                  <LoginLogout handleLogin={handleLogin} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
