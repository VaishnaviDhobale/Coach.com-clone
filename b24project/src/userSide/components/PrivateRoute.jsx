// import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";


const PrivateRouts = ({children}) => {
    let token = JSON.parse(localStorage.getItem("token")) || ""
    console.log("token",token)
    if(token){
        return children
    }else{
        return <Navigate to = "/login" />
    }
    
}

export default PrivateRouts;