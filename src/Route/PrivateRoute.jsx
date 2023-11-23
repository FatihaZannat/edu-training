import {  useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loding ,user} = useContext(AuthContext)
   
    if(loding){       
     return  <span className="loading loading-spinner loading-lg"></span>
    }
    
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to='/register'></Navigate>
        </div>
    );
};

export default PrivateRoute;