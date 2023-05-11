import React, { useState, useEffect } from "react";
import axios from "axios";

function Promo() {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        const promos = response.data.data;
        console.log(response.data);
        setPromos(promos);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <div className="promo-card">
      {promos.slice(0, 3).map((promo) => (
        <div key={promo.id}>
          <p>{promo.id}</p>
          <p>{promo.title}</p>
          <p>{promo.description}</p>
          <img src={promo.imageUrl}></img>
        </div>
      ))}
    </div>
  );
}

export default Promo;
