// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";

// function CategoryCreate() {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [category, setCategory] = useState({
//     name: "",
//     imageUrl: "",
//   });

//   const [error, setError] = useState(null);

//   const handleCreate = (event) => {
//     event.preventDefault();
//     axios
//       .post(
//         "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-category",
//         category,
//         {
//           headers: {
//             apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//             Authorization: `bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//         setError(error.response.data);
//       });
//   };

//   const handleChange = (event) => {
//     setCategory({ ...category, [event.target.name]: event.target.value });
//   };

//   useEffect(() => {
//     setError(null);
//   }, [category]);

//   return (
//     <div className="dashboard-create-category">
//       <Sidebar />
//       <form onSubmit={handleCreate}>
//         <label htmlFor="name">Category Name:</label>
//         <input
//           type="name"
//           name="name"
//           value={category.name}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="imageUrl">URL:</label>
//         <input
//           type="text"
//           name="imageUrl"
//           value={category.imageUrl}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// }

// export default CategoryCreate;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function CategoryCreate() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [category, setCategory] = useState({
    name: "",
    imageUrl: "",
  });

  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreate = (event) => {
    event.preventDefault();

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      axios
        .post(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
          formData,
          {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              Authorization: `bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          const imageUrl = response.data.url;
          console.log(response.data);

          sendCategoryData(imageUrl);
        })
        .catch((error) => {
          console.log(error.response.data);
          setError(error.response.data);
        });
    } else {
      sendCategoryData("");
    }
  };

  const sendCategoryData = (imageUrl) => {
    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-category",
        {
          ...category,
          imageUrl: imageUrl,
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
        window.alert("Category created successfully!");
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  };

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    setError(null);
    setSuccessMessage("");
  }, [category]);

  return (
    <div className="dashboard-create-category">
      <Sidebar />
      <form onSubmit={handleCreate}>
        <label htmlFor="name">Category Name:</label>
        <input
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImage}
          required
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: "200px", height: "200px" }}
          />
        )}

        {error && <p>Error: {error.message}</p>}
        {successMessage && (
          <p style={{ color: "green" }}>{successMessage}</p>
        )}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CategoryCreate;

