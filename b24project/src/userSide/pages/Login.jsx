import React from 'react'
import TopNavbar from "../components/TopNav";
import UserNavbar from "../components/UserNavbar";
import {
 Text
} from "@chakra-ui/react";

const Login = () => {
  return (
    <>
     <TopNavbar />
      <UserNavbar />
      <Text pt={200} fontWeight={"bold"} fontSize={"30px"}>Click On Login Button For Login!!</Text>
    </>
  )
}

export default Login;