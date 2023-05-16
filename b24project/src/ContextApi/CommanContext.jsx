import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Context = createContext();

const CommanContext = ({ children }) => {
  const [searchParams] = useSearchParams();
  let initialData = +searchParams.get("_page") || 1;
  const [page, setPage] = useState(initialData);
  const [urlKey, setUrlKey] = useState("womens");
  const [token,setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const handlePagination = (payload) => {
    setPage(payload);
  };
  
  const handleAuth = (token,name) => {
    setToken(token)
    setIsAuth(true)
    setUserName(name)
  }

  return (
    <Context.Provider
      value={{ page, handlePagination,urlKey,setUrlKey,handleAuth,token,isAuth,userName }}>
      {children}
    </Context.Provider>
  );
};

export default CommanContext;
