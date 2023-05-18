import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryID() {
  const [categoryId, setCategoryId] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/category/441d523f-7e5c-42f4-9919-6deec1720cb2",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        const categoryId = response.data.data;
        console.log(response.data);
        setCategoryId(categoryId);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <div className="category">
      {categoryId && (
        <div>
          <p>{categoryId.id}</p>
          <p>{categoryId.name}</p>
          <img src={categoryId.imageUrl} alt={categoryId.name} />
        </div>
      )}
    </div>
  );
}

export default CategoryID;
