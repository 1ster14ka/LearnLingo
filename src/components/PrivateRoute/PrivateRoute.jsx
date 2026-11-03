import { useSelector } from "react-redux";
import { isLoggedInSelect } from "../redux/Auth/selectors";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = useSelector(isLoggedInSelect);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
