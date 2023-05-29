import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const Auth=useSelector((store)=>store.authReducer.isAuth)
  const location = useLocation()
  return Auth? <Navigate state={location.pathname} to={"/login"}/>:children
};
