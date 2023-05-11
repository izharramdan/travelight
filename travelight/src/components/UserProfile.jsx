import React, { useState, useEffect } from "react";
import axios from "axios";
// import AllUser from "./AllUser";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [nameEdit, setNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  const [pictureEdit, setPictureEdit] = useState("");
  const [numberEdit, setNumberEdit] = useState("");

  useEffect(() => {
    axios
      .get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user", {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setNameEdit(response.data.data.name);
        setEmailEdit(response.data.data.email);
        setPictureEdit(response.data.data.profilePictureUrl);
        setNumberEdit(response.data.data.phoneNumber);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-profile",
        {
          name: nameEdit,
          email: emailEdit,
          profilePictureUrl: pictureEdit,
          phoneNumber: numberEdit,
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
        alert("Update Data Succes!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error Update Data. Try Again!.");
      });
  };
  if (!token) {
    return <div>Please log in to view this page.</div>;
  }
  
  return (
    <div className="edit-account">
      <div className="container">
        <h1>Edit Account Detail</h1>
        <div className="profile-picture">
          <p>Profil Picture</p>
          <img src={pictureEdit} alt="Profile" />
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={nameEdit}
            onChange={(event) => setNameEdit(event.target.value)}
          />

          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={emailEdit}
            onChange={(event) => setEmailEdit(event.target.value)}
          />

          <label htmlFor="picture">Profile Picture</label>
          <input
            type="text"
            id="picture"
            name="picture"
            placeholder="Profile Picture URL"
            value={pictureEdit}
            onChange={(event) => setPictureEdit(event.target.value)}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Profile Phone Number"
            value={numberEdit}
            onChange={(event) => setNumberEdit(event.target.value)}
          />
          <button type="submit">Save Changes</button>
        </form>
        {/* <AllUser /> */}
      </div>
    </div>
  );
}

export default UserProfile;
