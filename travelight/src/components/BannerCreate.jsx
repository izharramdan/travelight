import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <form onSubmit={handleCreate}>
      <label htmlFor="name">Banner Name:</label>
      <input type="name" name="name" value={banner.name} onChange={handleChange} required />

      <label htmlFor="imageUrl">URL:</label>
      <input type="text" name="imageUrl" value={banner.imageUrl} onChange={handleChange} required />

      <button type="submit">Create</button>
    </form>
  );

}

export default BannerCreate
