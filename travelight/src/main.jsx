import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Register from "./components/Register.jsx";
import AllUser from "./components/AllUser.jsx";
import BannerCreate from "./components/BannerCreate.jsx";
import BannerUpdate from "./components/BannerUpdate.jsx";
import PromoCreate from "./components/PromoCreate.jsx";
import PromoUpdate from "./components/PromoUpdate.jsx";
import CategoryCreate from "./components/CategoryCreate.jsx";
import CategoryUpdate from "./components/CategoryUpdate.jsx";
import Admin from "./components/Admin.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/UserProfile",
    element: (
      <>
        <Navbar />
        <UserProfile />
      </>
    ),
  },
  {
    path: "/Register",
    element: (
      <>
        <Navbar />
        <Register />
      </>
    ),
  },
  {
    path: "/UpdateRole",
    element: (
      <>
        {/* <Navbar /> */}
        <AllUser />
      </>
    ),
  },
  {
    path: "/UpdateBanner",
    element: (
      <>
        {/* <Navbar /> */}
        <BannerUpdate />
      </>
    ),
  },
  {
    path: "/CreateBanner",
    element: (
      <>
        {/* <Navbar /> */}
        <BannerCreate />
      </>
    ),
  },
  {
    path: "/UpdatePromo",
    element: (
      <>
        {/* <Navbar /> */}
        <PromoUpdate />
      </>
    ),
  },
  {
    path: "/CreatePromo",
    element: (
      <>
        {/* <Navbar /> */}
        <PromoCreate />
      </>
    ),
  },
  {
    path: "/UpdateCategory",
    element: (
      <>
        {/* <Navbar /> */}
        <CategoryUpdate />
      </>
    ),
  },
  {
    path: "/CreateCategory",
    element: (
      <>
        {/* <Navbar /> */}
        <CategoryCreate />
      </>
    ),
  },
  {
    path: "/UpdateActivity",
    element: (
      <>
        {/* <Navbar /> */}
        <CategoryUpdate />
      </>
    ),
  },
  {
    path: "/CreateActivity",
    element: (
      <>
        {/* <Navbar /> */}
        <CategoryCreate />
      </>
    ),
  },
  {
    path: "/Admin",
    element: (
      <>
      <AllUser />
        {/* <Sidebar /> */}
        {/* <Admin /> */}
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <App />
  <RouterProvider router={router} />
);
