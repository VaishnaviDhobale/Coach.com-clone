import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";


const PrivateRouts = ({children}) => {
    const {isAuthenticated} = useAuth0();

    if(isAuthenticated){
        return children
    }else{
        return <Navigate to = "/login" />
    }
    
}

export default PrivateRouts;