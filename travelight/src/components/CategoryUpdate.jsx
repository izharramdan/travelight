import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryUpdate() {
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [nameUpdate, setNameUpdate] = useState("");
  const [pictureUpdate, setPictureUpdate] = useState("");

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

  const updateCategory = (categoryId) => {
    axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-category/${categoryId}`,
        {
          name: nameUpdate,
          imageUrl: pictureUpdate,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // Lakukan tindakan setelah berhasil memperbarui banner
      })
      .catch((error) => {
        console.log(error.response.data);
        // Lakukan tindakan jika terjadi kesalahan dalam memperbarui banner
      });
  };

  const deleteCategory = (categoryId) => {
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-category/${categoryId}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // window.location.reload();
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== categoryId)
        );
        // Lakukan tindakan setelah berhasil menghapus promo
      })
      .catch((error) => {
        console.log(error.response.data);
        // Lakukan tindakan jika terjadi kesalahan dalam menghapus promo
      });
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <p>{category.id}</p>
          <p>{category.name}</p>
          <img src={category.imageUrl} alt={category.name} />
          <input
            type="text"
            placeholder="New Name"
            // value={titleUpdate}
            onChange={(e) => setNameUpdate(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Picture URL"
            // value={pictureUpdate}
            onChange={(e) => setPictureUpdate(e.target.value)}
          />
          <button onClick={() => updateCategory(category.id)}>Update</button>
          <button onClick={() => deleteCategory(category.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default CategoryUpdate;
