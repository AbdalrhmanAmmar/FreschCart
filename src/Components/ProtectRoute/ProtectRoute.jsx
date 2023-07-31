import { Navigate } from "react-router-dom";
import "./ProtectRoute.module.css";
function ProtectRoute(props) {
  if (localStorage.getItem("usertocken") == null) {
    return <Navigate to="/login" />;
  } else {
    // eslint-disable-next-line react/prop-types
    return props.children;
  }
}

export default ProtectRoute;
