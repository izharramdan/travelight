import React, { useState, useEffect } from "react";
import axios from "axios";

function PromoUpdate() {
  const [promos, setPromos] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [titleUpdate, setTitleUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [pictureUpdate, setPictureUpdate] = useState("");
  const [termUpdate, setTermUpdate] = useState("");
  const [codeUpdate, setCodeUpdate] = useState("");
  const [discPriceUpdate, setDiscPriceUpdate] = useState(0);
  const [claimPriceUpdate, setClaimPriceUpdate] = useState(0);

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
        setTitleUpdate(response.data.data.title);
        setDescriptionUpdate(response.data.data.description);
        setPictureUpdate(response.data.data.imageUrl);
        setTermUpdate(response.data.data.terms_condition);
        setCodeUpdate(response.data.data.promo_code);
        setDiscPriceUpdate(response.data.data.promo_discount_price);
        setClaimPriceUpdate(response.data.data.minimum_claim_price);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const updatePromo = (promoId) => {
    axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${promoId}`,
        {
          title: titleUpdate,
          description: descriptionUpdate,
          imageUrl: pictureUpdate,
          terms_condition: termUpdate,
          promo_code: codeUpdate,
          promo_discount_price: parseInt(discPriceUpdate),
          minimum_claim_price: parseInt(claimPriceUpdate),
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
        window.location.reload();
        // Lakukan tindakan setelah berhasil memperbarui promo
      })
      .catch((error) => {
        console.log(error.response.data);
        // Lakukan tindakan jika terjadi kesalahan dalam memperbarui promo
      });
  };

  const deletePromo = (promoId) => {
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${promoId}`,
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
        setPromos((prevPromos) =>
          prevPromos.filter((promo) => promo.id !== promoId)
        );
        // Lakukan tindakan setelah berhasil menghapus promo
      })
      .catch((error) => {
        console.log(error.response.data);
        // Lakukan tindakan jika terjadi kesalahan dalam menghapus promo
      });
  };

  return (
    <div className="dashboard-update-promo">
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
      <div>
        {promos.map((promo) => (
          <div key={promo.id}>
            <p>{promo.id}</p>
            <p>{promo.title}</p>
            <img src={promo.imageUrl} alt={promo.title} />
            <input
              type="text"
              placeholder="New Title"
              value={titleUpdate}
              onChange={(e) => setTitleUpdate(e.target.value)}
            />
            <input
              type="text"
              placeholder="New Description"
              value={descriptionUpdate}
              onChange={(e) => setDescriptionUpdate(e.target.value)}
            />
            <input
              type="text"
              placeholder="New Picture URL"
              value={pictureUpdate}
              onChange={(e) => setPictureUpdate(e.target.value)}
            />
            <input
              type="text"
              placeholder="New Term"
              value={termUpdate}
              onChange={(e) => setTermUpdate(e.target.value)}
            />
            <input
              type="text"
              placeholder="New Promo Code"
              value={codeUpdate}
              onChange={(e) => setCodeUpdate(e.target.value)}
            />
            <input
              type="number"
              placeholder="New Discount Price"
              value={discPriceUpdate}
              onChange={(e) => setDiscPriceUpdate(e.target.value)}
            />
            <input
              type="number"
              placeholder="New Minimum Claim Price"
              value={claimPriceUpdate}
              onChange={(e) => setClaimPriceUpdate(e.target.value)}
            />
            <button onClick={() => updatePromo(promo.id)}>Update</button>
            <button onClick={() => deletePromo(promo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromoUpdate;
