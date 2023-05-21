// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Promo() {
//   const [promos, setPromos] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
//         {
//           headers: {
//             apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//           },
//         }
//       )
//       .then((response) => {
//         const promos = response.data.data;
//         console.log(response.data);
//         setPromos(promos);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>Check Out Our Offers</h1>
//       <div className="row">
//         {promos.slice(0, 3).map((promo) => (
//           <div key={promo.id} className="col-md-4">
//             <div className="card promo-card">
//               <img
//                 src={promo.imageUrl}
//                 className="card-img-top"
//                 alt={promo.title}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{promo.title}</h5>
//                 {/* <p className="card-text">{promo.description}</p>
//                 <p className="card-text">{promo.terms_condition}</p> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Promo;

import React, { useState, useEffect } from "react";
import axios from "axios";

function Promo() {
  const [promos, setPromos] = useState([]);
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleDetailClick = (promo) => {
    setSelectedPromo(promo);
    setShowModal(true); // Mengatur showModal menjadi true saat tombol detail diklik
  };

  const closeModal = () => {
    setSelectedPromo(null);
    setShowModal(false);
  };

  return (
    <>
    <div className="promo-title text-center">
    <h1>Check Out Our Offers</h1>
  </div>
    <div className="promo-container" id="promo-show">
    

      <div className="row">
        {promos.slice(0, 4).map((promo) => (
          <div key={promo.id} className="col-sm-3">
            <div className="card promo-card">
              <img
                src={promo.imageUrl}
                className="card-img-top"
                alt={promo.title}
              />
              <div className="card-body">
                <h5 className="promo-code">{promo.promo_code}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDetailClick(promo)}
                  data-bs-toggle="modal"
                  data-bs-target="#promoModal"
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPromo && (
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          id="promoModal"
          tabIndex="-1"
          aria-labelledby="promoModalLabel"
          aria-hidden={!showModal}
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="promoModalLabel">
                  {selectedPromo.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedPromo.description}</p>
                <p>{selectedPromo.terms_condition}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Promo;
