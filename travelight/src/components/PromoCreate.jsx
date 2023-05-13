import React, { useState, useEffect } from "react";
import axios from "axios";

function PromoCreate() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [promo, setPromo] = useState({
    title: "",
    description: "",
    imageUrl: "",
    terms_condition: "",
    promo_code: "",
    promo_discount_price: 0,
    minimum_claim_price: 0,
  });

  const [error, setError] = useState(null);

  const handleCreate = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo",
        {
          ...promo,
          promo_discount_price: parseInt(promo.promo_discount_price),
          minimum_claim_price: parseInt(promo.minimum_claim_price),
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
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  };
  const handleChange = (event) => {
    setPromo({ ...promo, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setError(null);
  }, [promo]);

  return (
    <div className="dashboard-create-promo">
      <div className="sidebar">
        <a className="logo" href="/">
          TraveLight
        </a>
        <ul>
          <div>
            <a href="/Admin">User Role</a>
          </div>
          <div>
            <a href="/CreateBanner">Create Banner</a>
          </div>
          <div>
            <a href="/UpdateBanner">Update Banner</a>
          </div>
          <div>
            <a href="/CreatePromo">Create Promo</a>
          </div>
          <div>
            <a href="/UpdatePromo">Update Promo</a>
          </div>
          <div>
            <a href="/CreateCategory">Create Category</a>
          </div>
          <div>
            <a href="/UpdateCategory">Update Category</a>
          </div>
          {/* <div>
            <a href="/CreateActivity">Create Activity</a>
          </div> */}
          <div>
            <a href="/UpdateActivity">Update Activity</a>
          </div>
        </ul>
      </div>
      <form onSubmit={handleCreate}>
        <label htmlFor="name">Promo Title:</label>
        <input
          type="text"
          name="title"
          value={promo.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="imageUrl">URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={promo.imageUrl}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={promo.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="terms_condition">Terms and Conditions:</label>
        <textarea
          name="terms_condition"
          value={promo.terms_condition}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="promo_code">Promo Code:</label>
        <input
          type="text"
          name="promo_code"
          value={promo.promo_code}
          onChange={handleChange}
          required
        />

        <label htmlFor="promo_discount_price">Promo Discount Price:</label>
        <input
          type="number"
          name="promo_discount_price"
          value={promo.promo_discount_price}
          onChange={handleChange}
          required
        />

        <label htmlFor="minimum_claim_price">Minimum Claim Price:</label>
        <input
          type="number"
          name="minimum_claim_price"
          value={promo.minimum_claim_price}
          onChange={handleChange}
          required
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default PromoCreate;
