import "./App.css";
import Register from "./components/Register";
import LoginLogout from "./components/LoginLogout";
import Banner from "./components/Banner";
import Promo from "./components/Promo";
import Categories from "./components/Category";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import BannerID from "./components/BannerID";
import PromoID from "./components/PromoID";
import CategoryID from "./components/CategoryID";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <LoginLogout /> */}
      {/* <UserProfile /> */}
      {/* <Register /> */}

      {/* <Banner /> */}
      <BannerID />
      <Promo />
      {/* <PromoID /> */}
      <Categories />
      {/* <CategoryID /> */}
    </div>
  );
}

export default App;
