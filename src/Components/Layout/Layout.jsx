import "./Layout.module.css";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Fresch Cart</title>
      </Helmet>
      <Navbar userData={userData} LogOut={LogOut} />
      <div className="container py-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
