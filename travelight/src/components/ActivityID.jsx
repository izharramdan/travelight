import React, { useState, useEffect } from "react";
import axios from "axios";

const ActivityID = () => {
  const [activity, setPopular] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities-by-category/8c380f04-88b5-4ed0-960b-b63d996f21f9",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        const items = response.data.data;
        setPopular(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleShow = (id) => {
    setSelectedItem(activity.find((item) => item.id === id));
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="activity">
      <div className="activity-title text-center">
        <h1>Where To Go</h1>
      </div>

      <div className="activity-box" id="activity-show">
        <div className="row activity-row">
          {activity.map((item, index) => {
            return (
              <div
                className="card activity-cards"
                style={{ marginBottom: "20px", width: "16rem" }}
                key={index}
              >
                <img
                  className="card-img-top"
                  src={item.imageUrls[0]}
                  alt=""
                  // onClick={() => handleShow(item.id)}
                />
                <div className="card-body activity-body">
                  <h5 className="card-title">
                    {item.title}{" "}
                    <i className="bi bi-arrow-right-square-fill"></i>
                  </h5>
                  <p className="card-text">
                    Rating
                    <i className="bi bi-star-fill text-warning pe-1"></i>{" "}
                    {item.rating}
                  </p>
                  <p className="card-text mb-1">
                    <i className="bi bi-geo-alt-fill"></i>
                    {item.city}, {item.province}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleShow(item.id)}
                  >
                    Detail
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedItem && (
        <div
          className={`modal fade ${show ? "show" : ""}`}
          id="activityModal"
          tabIndex="-1"
          aria-labelledby="activityModalLabel"
          aria-hidden={!show}
          style={{ display: show ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="activityModalLabel">
                  {selectedItem.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                {/* <img src={selectedItem.imageUrls[0]} alt="" /> */}
                <hr />
                <p className="my-0">Description: {selectedItem.description}</p>
                <p className="my-0">Price: {selectedItem.price}</p>
                <p className="my-0">
                  Discount price: {selectedItem.price_discount}
                </p>
                <p className="my-0">Rating: {selectedItem.rating}</p>
                <p className="my-0">
                  Total review: {selectedItem.total_reviews}
                </p>
                <p className="my-0">Facilities: {selectedItem.facilities}</p>
                <p className="my-0">Address: {selectedItem.address}</p>
                <p className="my-0">City: {selectedItem.city}</p>
                <p className="my-0">Province: {selectedItem.province}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityID;
