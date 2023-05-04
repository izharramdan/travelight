import React, { useState, useEffect } from "react";
import axios from "axios";

function AllUser() {
  const [users, setUsers] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

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
        setRole(response.data.data.role);
        setUserID(response.data.data.id);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${userID}`,
        {
          role: role,
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
  return (
    <div>
      <div className="container">
        <form>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            placeholder="enter your role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>Save Changes</button>
        </form>
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

//   const handleRoleChange = (userId, newRole) => {
//     axios
//       .post(
//         `https:travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${userId}`,
//         {
//           role: newRole,
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
//         // Update the users state with the new role
//         setUsers((prevState) =>
//           prevState.map((user) =>
//             user.id === userId ? { ...user, role: newRole } : user
//           )
//         );
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("Error Update Data. Try Again!.");
//       });
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
//                   <input
//                     type="text"
//                     value={user.role}
//                     onChange={(e) => handleRoleChange(user.id, e.target.value)}
//                   />
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
