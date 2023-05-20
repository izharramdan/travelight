import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function BannerCreate() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [banner, setBanner] = useState({
    name: "",
    imageUrl: "",
  });

  const [error, setError] = useState(null);

  const handleCreate = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-banner",
        banner,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  };
  const handleChange = (event) => {
    setBanner({ ...banner, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    setError(null);
  }, [banner]);

  return (
    <div className="dashboard-create-banner">
      <Sidebar />
      {/* <div className="sidebar">
        <a className="logo" href="/">
          TraveLight
        </a>
        <ul>
          <div>
            <a href="/Admin">User Role</a>
          </div>
          <div>
            <a href="/CreateBanner">Create Banner</a>
          </div>
          <div>
            <a href="/UpdateBanner">Update Banner</a>
          </div>
          <div>
            <a href="/CreatePromo">Create Promo</a>
          </div>
          <div>
            <a href="/UpdatePromo">Update Promo</a>
          </div>
          <div>
            <a href="/CreateCategory">Create Category</a>
          </div>
          <div>
            <a href="/UpdateCategory">Update Category</a>
          </div>
          <div>
            <a href="/UpdateActivity">Update Activity</a>
          </div>
        </ul>
      </div> */}
      <form onSubmit={handleCreate}>
        <label htmlFor="name">Banner Name:</label>
        <input
          type="name"
          name="name"
          value={banner.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="imageUrl">URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={banner.imageUrl}
          onChange={handleChange}
          required
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default BannerCreate;
