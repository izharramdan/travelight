// import React from "react";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <a href="#" className="navbar-brand">
//         Trave<span>Light</span>
//       </a>
//       <button
//         type="button"
//         className="navbar-toggler"
//         data-toggle="collapse"
//         data-target="#navbarCollapse"
//       >
//         <span className="navbar-toggler-icon" />
//       </button>
//       {/* Collection of nav links, forms, and other content for toggling */}
//       <div
//         id="navbarCollapse"
//         className="collapse navbar-collapse justify-content-start"
//       >
//         <div className="navbar-nav mx-auto">
//           <a href="#" className="nav-item nav-link">
//             Home
//           </a>
//           <a href="#" className="nav-item nav-link">
//             About
//           </a>
//           <a href="#" className="nav-item nav-link">
//             Category
//           </a>
//           {/* <li className="nav-item dropdown">
//             <a
//               href="#"
//               className="nav-link dropdown-toggle"
//               role="button"
//               data-bs-toggle="dropdown"
//             >
//               Services
//             </a>
//             <ul className="dropdown-menu">
//               <a href="#" className="dropdown-item">
//                 Web Design
//               </a>
//               <a href="#" className="dropdown-item">
//                 Web Development
//               </a>
//               <a href="#" className="dropdown-item">
//                 Graphic Design
//               </a>
//               <a href="#" className="dropdown-item">
//                 Digital Marketing
//               </a>
//             </ul>
//           </li> */}
//           <a href="#" className="nav-item nav-link">
//             Promo
//           </a>
//         </div>
//         <div className="navbar-nav ml-auto action-buttons">
//           <div className="nav-item dropdown">
//             <a
//               href="#"
//               className="nav-link dropdown-toggle mr-4"
//               role="button"
//               data-bs-toggle="dropdown"
//             >
//               Login
//             </a>
//             <div className="dropdown-menu action-form">
//               <form action="/examples/actions/confirmation.php" method="post">
//                 <p className="hint-text">
//                   Sign in with your social media account
//                 </p>
//                 <div className="form-group social-btn clearfix">
//                   <a
//                     href="#"
//                     className="btn btn-secondary facebook-btn float-left"
//                   >
//                     <i className="fa fa-facebook" /> Facebook
//                   </a>
//                   <a
//                     href="#"
//                     className="btn btn-secondary twitter-btn float-right"
//                   >
//                     <i className="fa fa-twitter" /> Twitter
//                   </a>
//                 </div>
//                 <div className="or-seperator">
//                   <b>or</b>
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Username"
//                     required="required"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     required="required"
//                   />
//                 </div>
//                 <input
//                   type="submit"
//                   className="btn btn-primary btn-block"
//                   defaultValue="Login"
//                 />
//                 <div className="text-center mt-2">
//                   <a href="#">Forgot Your password?</a>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="nav-item dropdown">
//             <a
//               href="#"
//               className="btn btn-primary dropdown-toggle sign-up-btn"
//               role="button"
//               data-bs-toggle="dropdown"
//             >
//               Sign up
//             </a>
//             <div className="dropdown-menu action-form">
//               <form action="/examples/actions/confirmation.php" method="post">
//                 <p className="hint-text">
//                   Fill in this form to create your account!
//                 </p>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Username"
//                     required="required"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     required="required"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Confirm Password"
//                     required="required"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label className="form-check-label">
//                     <input type="checkbox" required="required" /> I accept the{" "}
//                     <a href="#">Terms &amp; Conditions</a>
//                   </label>
//                 </div>
//                 <input
//                   type="submit"
//                   className="btn btn-primary btn-block"
//                   defaultValue="Sign up"
//                 />
//               </form>

//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;

// Navbar.js

// import React, { useState } from "react";
// import LoginLogout from "./LoginLogout";

// function Navbar() {
//   const [showModal, setShowModal] = useState(false);

//   const handleLogin = () => {
//     setShowModal(true);
//   };

//   const handleLogout = () => {
//     // Lakukan proses logout sesuai kebutuhan Anda
//     // ...
//   };

//   const token = localStorage.getItem("token");

//   return (
//   <nav className="navbar navbar-expand-lg">
//     <a href="#" className="navbar-brand">
//       Trave<span>Light</span>
//     </a>
//     <button
//       type="button"
//       className="navbar-toggler"
//       data-toggle="collapse"
//       data-target="#navbarCollapse"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div
//       id="navbarCollapse"
//       className="collapse navbar-collapse justify-content-start"
//     >
//       <div className="navbar-nav mx-auto">
//         <a href="#" className="nav-item nav-link">
//           Home
//         </a>
//         <a href="#" className="nav-item nav-link">
//           About
//         </a>
//         <a href="#" className="nav-item nav-link">
//           Category
//         </a>
//         {/* <li className="nav-item dropdown">
//           <a
//             href="#"
//             className="nav-link dropdown-toggle"
//             role="button"
//             data-bs-toggle="dropdown"
//           >
//             Services
//           </a>
//           <ul className="dropdown-menu">
//             <a href="#" className="dropdown-item">
//               Web Design
//             </a>
//             <a href="#" className="dropdown-item">
//               Web Development
//             </a>
//             <a href="#" className="dropdown-item">
//               Graphic Design
//             </a>
//             <a href="#" className="dropdown-item">
//               Digital Marketing
//             </a>
//           </ul>
//         </li> */}
//         <a href="#" className="nav-item nav-link">
//           Promo
//         </a>
//       </div>
//       <div className="navbar-nav ml-auto action-buttons">
//         <div className="nav-item dropdown">
//           {token ? (
//             // Tampilkan "Logout" jika token tersedia
//             <a
//               href="#"
//               className="nav-link dropdown-toggle mr-4"
//               role="button"
//               data-bs-toggle="dropdown"
//               onClick={handleLogout} // Pindahkan onClick ke sini
//             >
//               Logout
//             </a>
//           ) : (
//             // Tampilkan "Login" jika token tidak tersedia
//             <a
//               href="#"
//               className="nav-link dropdown-toggle mr-4"
//               role="button"
//               data-bs-toggle="dropdown"
//             >
//               Login
//             </a>
//           )}
//           <div className="dropdown-menu action-form">
//             <LoginLogout
//               handleLogin={handleLogin}
//               handleLogout={handleLogout}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </nav>
// );

// }

// export default Navbar;

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
      <a href="#" className="navbar-brand">
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
          <a href="#" className="nav-item nav-link">
            Home
          </a>
          <a href="#" className="nav-item nav-link">
            About
          </a>
          <a href="#" className="nav-item nav-link">
            Category
          </a>
          <a href="#" className="nav-item nav-link">
            Promo
          </a>
        </div>
        <div className="navbar-nav ml-auto action-buttons">
          <div className="nav-item dropdown">
            {token ? (
              <>
                {/* <a
                  href="#"
                  className="nav-link dropdown-toggle mr-4"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={handleLogout}
                >
                  Logout
                </a> */}
                <a
              href="#"
              className="nav-link dropdown-toggle mr-4"
              role="button"
              data-bs-toggle="dropdown"
              onClick={handleProfile}
            >
              My Profile
            </a>
            <ul className="dropdown-menu action-form">

                  <li><a href="#">Edit Profile</a></li>
                  <li onClick={handleLogout}><button href="#">Logout</button></li>

            </ul>
                {/* <div
                  className={`dropdown-menu action-form ${
                    showProfile ? "show" : ""
                  }`}
                >
                  <UserProfile />
                </div> */}
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
