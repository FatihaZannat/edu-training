import {  useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)

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