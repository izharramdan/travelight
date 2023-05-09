import React, { useState, useEffect } from "react";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        const categories = response.data.data;
        console.log(response.data);
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <p>{category.id}</p>
          <p>{category.name}</p>
          <img src={category.imageUrl}></img>
        </div>
      ))}
    </div>
  );
}

export default Categories;
