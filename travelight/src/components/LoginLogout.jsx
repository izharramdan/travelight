import React, { useState, useEffect } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";
import Banner from "./Banner";
import BannerUpdate from "./BannerUpdate";
import BannerCreate from "./BannerCreate";
import PromoUpdate from "./PromoUpdate";
import PromoCreate from "./PromoCreate";
import CategoryUpdate from "./CategoryUpdate";
import CategoryCreate from "./CategoryCreate";


function LoginLogout() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [banners, setBanners] = useState([]);

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login",
        formLogin,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
        localStorage.setItem("token", error.response.data.token);
      });
  };

  const handleLogout = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setToken(null);
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  };

  const handleChange = (event) => {
    setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setError(null);
  }, [formLogin]);

  return (
    <div>
      {token ? (
        <div>
          <p>You are logged in!</p>
          <UserProfile />
          <CategoryCreate />
          <CategoryUpdate />
          {/* <PromoUpdate /> */}
          {/* <PromoCreate /> */}
          {/* <Banner /> */}
          {/* <BannerUpdate /> */}
          {/* <BannerCreate /> */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formLogin.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formLogin.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginLogout;
