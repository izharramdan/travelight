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
  const [images, setImages] = useState();
  const [imagePreview, setImagePreview] = useState();

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
        setImagePreview(response.data.data.profilePictureUrl);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const handleImage = (e) => {
    setImages(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let imageUrl = {
      url: pictureEdit,
    };

    if (images) {
      const formData = new FormData();
      formData.append("image", images);
      await axios
        .post(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
          formData,
          {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              Authorization: `bearer ${token}`,
            },
          }
        )
        .then((response) => {
          imageUrl = response.data;
          console.log(response.data);
        });
    }

    // await uploadImage();
    axios
      .post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-profile",
        {
          name: nameEdit,
          email: emailEdit,
          profilePictureUrl: imageUrl.url,
          phoneNumber: numberEdit,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response1) => {
        console.log(response1.data);
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
          <img src={imagePreview} alt="Profile" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={nameEdit}
              onChange={(event) => setNameEdit(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailEdit}
              onChange={(event) => setEmailEdit(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="picture">Profile Picture</label>
            <input
              accept="image/*"
              type="file"
              id="picture"
              name="picture"
              placeholder="Profile Picture URL"
              // value={pictureEdit}
              onChange={(e) => handleImage(e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Profile Phone Number"
              value={numberEdit}
              onChange={(event) => setNumberEdit(event.target.value)}
            />
          </div>

          <button type="submit">Save Changes</button>
        </form>
        {/* <AllUser /> */}
      </div>
    </div>
  );
}

export default UserProfile;
