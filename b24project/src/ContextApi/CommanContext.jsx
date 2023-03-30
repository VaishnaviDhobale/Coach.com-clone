import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Context = createContext();

const CommanContext = ({ children }) => {
  const [searchParams] = useSearchParams();
  let initialData = +searchParams.get("_page") || 1;
  const [page, setPage] = useState(initialData);
  const [urlKey, setUrlKey] = useState("womens");

  const handlePagination = (payload) => {
    setPage(payload);
  };

  return (
    <Context.Provider
      value={{ page, handlePagination,urlKey,setUrlKey }}>
      {children}
    </Context.Provider>
  );
};

export default CommanContext;
