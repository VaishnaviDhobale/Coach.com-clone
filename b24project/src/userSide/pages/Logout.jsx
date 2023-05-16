import { useToast } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";



const Logout = () => {
  const toast = useToast();
    localStorage.setItem("token",false);
    toast({
        title: "Logout successful",
        description: "Have a great day",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    return <Navigate to = "/" />
}

export default Logout;