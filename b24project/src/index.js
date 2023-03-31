import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {Store} from "./redux/Store"
import CommanContext from "./ContextApi/CommanContext";
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-rqcl8zma8nhzlth0.us.auth0.com"
  clientId="4MAUWk57Z2kKjMXZIJx2M53FEZSnbIwP"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}> 
<Provider store = {Store}>
     <BrowserRouter>
    <ChakraProvider>
      <CommanContext>
        <App />
      </CommanContext>
    </ChakraProvider>
  </BrowserRouter>
  </Provider>


</Auth0Provider>
 
 
 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
