import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="text-center"><span className="loading loading-bars text-purple-500 loading-xs"></span>
        <span className="loading loading-bars text-secondary loading-sm"></span>
        <span className="loading loading-bars text-orange-600 loading-md"></span></div>
    }

    if(user){
        return children;
    }

    return  <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoute;