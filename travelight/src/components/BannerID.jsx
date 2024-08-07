import React, { useState, useEffect } from "react";
import axios from "axios";

function BannerID() {
  const [bannerId, setBannerId] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banner/841cd341-9eff-4d00-a996-f6f5d38782dc",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        const bannerId = response.data.data;
        console.log(response.data);
        setBannerId(bannerId);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <div className="banner">
      {bannerId && (
        <>

          <div>
            <p>{bannerId.id}</p>
            <p>{bannerId.name}</p>
            <img src={bannerId.imageUrl} alt={bannerId.name} />
          </div>
          <div>
            <h1 className="banner-hero">TraveLight, Your Travel Buddy to everywhere</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default BannerID;
