import React, { useState, useEffect } from "react";
import axios from "axios";

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
        setError(null); // Reset error state on successful login
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
        setError("Invalid email or password. Please try again.");
        localStorage.setItem("token", error.response.data.token);
        window.alert("Invalid email or password. Please try again."); // Menampilkan alert
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
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
        setError("Logout failed. Please try again.");
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
          <button className="btn btn-warning" onClick={handleLogout}>
            Logout
          </button>
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
          {error && <p className="text-danger">{error}</p>}
          <p>
            Don't have an account? Click <a href="/Register">register</a>
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginLogout;
