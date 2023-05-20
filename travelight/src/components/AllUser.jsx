import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function AllUser() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  // const [showBannerDropdown, setShowBannerDropdown] = useState(false);
  // const [userRole, setUserRole] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  // const toggleBannerDropdown = () => {
  //   setShowBannerDropdown(!showBannerDropdown);
  // };

  const handleChange = (event, userId, newRole) => {
    event.preventDefault();
    axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${userId}`,
        {
          role: newRole,
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

        // Update state user baru dengan role baru
        setUsers((prevState) =>
          prevState.map((user) =>
            user.id === userId ? { ...user, role: newRole } : user
          )
        );
      })
      .catch((error) => {
        console.log(error);
        alert("Error Update Data. Try Again!.");
      });
  };

  // const handleUpdate (userId, newRole)

  // const handleSubmit = (event, userId, newRole) => {
  //   event.preventDefault();
  //   handleChange(userId, newRole);
  // };

  return (
    <div className="dashboard-user-container">
      <Sidebar />
      <div className="content">
        <div className="container">
          <table className="user-table">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Name</th>
                <th>Role</th>
                <th>Profile Picture</th>

                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  {/* <td>{user.id}</td> */}
                  <td>{user.name}</td>
                  <td>
                    <form
                      onSubmit={(event) =>
                        handleChange(event, user.id, user.role)
                      }
                    >
                      <select
                        value={user.role}
                        onChange={(e) =>
                          handleChange(event, user.id, e.target.value)
                        }
                      >
                        <option value="admin">admin</option>
                        <option value="user">user</option>
                      </select>
                      {/* <button type="submit">Submit</button> */}
                    </form>
                  </td>
                  <td>
                    {" "}
                    <img src={user.profilePictureUrl} alt="" />
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllUser;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function AllUser() {
//   const [users, setUsers] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [updatedRoles, setUpdatedRoles] = useState({});

//   useEffect(() => {
//     axios
//       .get(
//         "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
//         {
//           headers: {
//             apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//             Authorization: `bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//         setUsers(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   }, []);

//   const handleChange = (userId, newRole) => {
//     setUpdatedRoles((prevState) => ({ ...prevState, [userId]: newRole }));
//   };

//   const handleUpdate = (userId) => {
//     axios
//       .post(
//         `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${userId}`,
//         {
//           role: updatedRoles[userId],
//         },
//         {
//           headers: {
//             apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//             Authorization: `bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//         alert("Update Data Succes!");
//         // Update state user baru dengan role baru
//         setUsers((prevState) =>
//           prevState.map((user) =>
//             user.id === userId ? { ...user, role: updatedRoles[userId] } : user
//           )
//         );
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("Error Update Data. Try Again!.");
//       });
//   };

//   const handleSubmit = (event, userId) => {
//     event.preventDefault();
//     handleUpdate(userId);
//   };

//   return (
//     <div>
//       <div className="container">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               {/* <th>Email</th> */}
//               <th>Role</th>
//               <th>Profile Picture URL</th>
//               {/* <th>Phone Number</th> */}
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 {/* <td>{user.email}</td> */}
//                 <td>
//                   <form onSubmit={(event) => handleSubmit(event, user.id)}>
//                     <input
//                       type="text"
//                       value={updatedRoles[user.id] || user.role}
//                       onChange={(e) => handleChange(user.id, e.target.value)}
//                     />
//                     <button type="submit">Update</button>
//                   </form>
//                 </td>
//                 <td>{user.profilePictureUrl}</td>
//                 {/* <td>{user.phoneNumber}</td> */}
//                 <td></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AllUser;
