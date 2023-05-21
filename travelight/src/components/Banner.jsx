import React, { useState, useEffect } from "react";
import axios from "axios";

function Banner() {
  const [banners, setBanners] = useState([]);

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

  return (
<div className="banner">
  {banners.slice(3, 4).map((banner) => (
    <div key={banner.id}>
      <p>{banner.id}</p>
      <p>{banner.name}</p>
      <img src={banner.imageUrl}></img>
    </div>
  ))}
</div>
  );
}

export default Banner;
