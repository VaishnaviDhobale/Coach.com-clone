import { Box, Spinner } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Context } from "../../ContextApi/CommanContext";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import Navbar from "../../userSide/components/Navbar";

const ProductsData = ({ getMethod }) => {
  const [searchParams, setSearchparams] = useSearchParams();

  // Handling this page using contextApi 
  let {page} = useContext(Context)

  // preparing params object here
  const paramObj = {
    params: {
      category: searchParams.getAll("category"),
      _page : page
    },
  };

  // Accessing Store 
  const dispatch = useDispatch();
  const { isError, isLoading, womensData, totalData } = useSelector(
    (store) => store.womensReducer
  );

  useEffect(() => {
    dispatch(getMethod(paramObj));
    if(searchParams.get("_order")){
      paramObj.params["_order"] = searchParams.get("_order");
      paramObj.params["_sort"] = "price"
    }
    setSearchparams(paramObj.params)
  }, [searchParams,page]);


  // Conditional Rendering 
  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <h1>Something went wrong</h1>;
  }


  return (
    <Box>
      <Navbar />
    <Box>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base : "repeat(2,1fr)",
          sm : "repeat(2,1fr)",
          md : "repeat(3,1fr)",
          lg : "repeat(4,1fr)"
        }}
        gap="5px"
        ml= {{
          base : "20px",
          sm : "20px",
          md : "20px",
          lg : "22%"
        }}
      >
        {womensData.map((item) => {
          return <ProductCard {...item} />;
        })}
      </Box>
      <Pagination totalData={totalData} />
    </Box>
    </Box>
  );
};

export default ProductsData;
