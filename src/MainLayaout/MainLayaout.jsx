import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";
import "./mainlayout.css";
import Header from "../Components/Home/Header/Header";

function MainLayaout() {
  return (
    <div className="mainBody">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayaout;
