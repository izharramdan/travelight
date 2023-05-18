import React, { useState, useEffect } from "react";
import axios from "axios";

function PromoID() {
  const [promoId, setPromoId] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/a3495996-623a-4182-a0a8-85d470f7d61d",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        const promoId = response.data.data;
        console.log(response.data);
        setPromoId(promoId);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
<div className="promo">
      {promoId && (
        <div className="card">
          <img src={promoId.imageUrl} className="card-img-top" alt={promoId.name} />
          <div className="card-body">
            <h5 className="card-title">{promoId.title}</h5>
            <p className="card-text">{promoId.description}</p>
            <p className="card-text">{promoId.terms_condition}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PromoID;
