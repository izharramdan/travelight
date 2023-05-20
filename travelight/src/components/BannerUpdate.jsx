import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function BannerUpdate() {
  const [banners, setBanners] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        const banners = response.data.data;
        console.log(response.data);
        setBanners(banners);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const updateBanner = (bannerId) => {
    axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-banner/${bannerId}`,
        {
          name: inputs[bannerId]?.name,
          imageUrl: inputs[bannerId]?.imageUrl,
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

  const deleteBanner = (bannerId) => {
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${bannerId}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // Lakukan tindakan setelah berhasil menghapus banner
      })
      .catch((error) => {
        console.log(error.response.data);
        // Lakukan tindakan jika terjadi kesalahan dalam menghapus banner
      });
  };

  const handleInputChange = (bannerId, event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [bannerId]: {
        ...prevInputs[bannerId],
        [name]: value,
      },
    }));
  };

  return (
    <div className="dashboard-update-banner">
      <Sidebar />
      <div className="banner-update">
        {banners.map((banner) => (
          <div key={banner.id}>
            {/* <p>{banner.id}</p> */}
            <p>{banner.name}</p>
            <img src={banner.imageUrl} alt={banner.name} />
            <input
              type="text"
              placeholder="New Name"
              name="name"
              value={inputs[banner.id]?.name || ""}
              onChange={(e) => handleInputChange(banner.id, e)}
            />
            <input
              type="text"
              placeholder="New Image URL"
              name="imageUrl"
              value={inputs[banner.id]?.imageUrl || ""}
              onChange={(e) => handleInputChange(banner.id, e)}
            />
            <button onClick={() => updateBanner(banner.id)}>Update</button>
            <button onClick={() => deleteBanner(banner.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerUpdate;

// import React, { useState } from "react";
// import axios from "axios";

// function BannerUpdate({ bannerId }) {
//   const [name, setName] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const updateBanner = () => {
//     axios
//       .post(
//         `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-banner/${bannerId}`,
//         {
//           name: name,
//           imageUrl: imageUrl,
//         },
//         {
//           headers: {
//             apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//             Authorization: `bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//         // Lakukan tindakan setelah berhasil memperbarui banner
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//         // Lakukan tindakan jika terjadi kesalahan dalam memperbarui banner
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="New Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="New Image URL"
//         value={imageUrl}
//         onChange={(e) => setImageUrl(e.target.value)}
//       />
//       <button onClick={updateBanner}>Update</button>
//     </div>
//   );
// }

// export default BannerUpdate;
