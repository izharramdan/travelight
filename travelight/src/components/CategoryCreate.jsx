import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryCreate() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [category, setCategory] = useState({
        name: "",
        imageUrl: "",
    })

    const [error, setError] = useState(null);

    const handleCreate = (event) => {
        event.preventDefault();
        axios
          .post(
            "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-category",
            category,
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
        setCategory({ ...category, [event.target.name]: event.target.value });
      };

      useEffect(() => {
        setError(null);
      }, [category]);

      return (
        <form onSubmit={handleCreate}>
          <label htmlFor="name">Category Name:</label>
          <input type="name" name="name" value={category.name} onChange={handleChange} required />
    
          <label htmlFor="imageUrl">URL:</label>
          <input type="text" name="imageUrl" value={category.imageUrl} onChange={handleChange} required />
    
          <button type="submit">Create</button>
        </form>
      );
}

export default CategoryCreate