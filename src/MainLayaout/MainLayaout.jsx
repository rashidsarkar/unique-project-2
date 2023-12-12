import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";
import "./mainlayout.css";
import Header from "../Components/Home/Header/Header";
import GotoTop from "../Components/gotoTop/GotoTop";

function MainLayaout() {
  return (
    <div className="mainBody">
      <Header />
      <Outlet />
      <Footer />
      <GotoTop />
    </div>
  );
}

export default MainLayaout;
