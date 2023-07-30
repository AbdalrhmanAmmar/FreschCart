import { Link } from "react-router-dom";
import "./Navbar.module.css";
import logo from "/images/freshcart-logo.svg";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light  ">
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-auto"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav mx-auto  mt-2 mt-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Brands
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav   mt-2 mt-lg-0  ">
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <a to="/" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a to="/" className="nav-link">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
