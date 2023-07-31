import "./Layout.module.css";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Layout({ userData, setuserDate }) {
  let navigate = useNavigate();

  function LogOut() {
    localStorage.removeItem("usertocken");
    setuserDate(null);
    navigate("/Login");
  }

  return (
    <>
      <Navbar userData={userData} LogOut={LogOut} />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
