import React, { useState, useEffect } from "react";
import axios from "axios";

function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        const banners = response.data.data;
        console.log(response.data);
        setBanners(banners);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
<div className="banner">
  {banners.slice(0, 1).map((banner) => (
    <div key={banner.id}>
      <p>{banner.id}</p>
      <p>{banner.name}</p>
      <img src={banner.imageUrl}></img>
    </div>
  ))}
</div>
  );
}

export default Banner;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import BannerItem from "./BannerItem";

// function Banner() {
//   const [banners, setBanners] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
//         {
//           headers: {
//             apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//           },
//         }
//       )
//       .then((response) => {
//         const banners = response.data.data;
//         console.log(response.data);
//         setBanners(banners);
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   }, []);

//   return (
//     <div>
//       {banners.map((banner) => (
//         <div key={banner.id}>
//           {/* <p>{banner.id}</p>
//           <p>{banner.name}</p>
//           <img src={banner.imageUrl}></img> */}
//         </div>
//       ))}
//       {banners.map((banner) => (
//         <BannerItem key={banner.id} banner={banner} />
//       ))}
//     </div>
//   );
// }

// export default Banner;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Banner() {
//   const [banners, setBanners] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
//         {
//           headers: {
//             apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//           },
//         }
//       )
//       .then((response) => {
//         const banners = response.data.data;
//         console.log(response.data);
//         setBanners(banners);

//         // Ambil semua ID dari banners
//         const bannerIds = banners.map((banner) => banner.id);

//         // Lakukan pemanggilan API kedua dengan menggunakan setiap bannerId
//         bannerIds.forEach((bannerId) => {
//           axios
//             .get(
//               `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banner/${bannerId}`,
//               {
//                 headers: {
//                   apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//                 },
//               }
//             )
//             .then((response) => {
//               console.log(response.data);
//               // Lakukan operasi yang sesuai dengan data bannerId
//             })
//             .catch((error) => {
//               console.log(error.response.data);
//             });
//         });
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   }, []);

//   return (
//     <div>
//       {banners.map((banner) => (
//         <div key={banner.id}>
//           <p>{banner.id}</p>
//           <p>{banner.name}</p>
//           {/* <img src={banner.imageUrl} alt={banner.name} /> */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Banner;
