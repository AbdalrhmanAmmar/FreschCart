import { Link } from "react-router-dom";
import "./NotFound.module.css";
import Notfound from "/images/error.svg";
function NotFound() {
  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        <img className="w-75" src={Notfound} alt="" />
      </div>
      <div className="d-flex justify-content-center">
        <Link
          to="/"
          className="btn btn-success"
          style={{ background: "#0aad0a" }}
        >
          Back To Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
