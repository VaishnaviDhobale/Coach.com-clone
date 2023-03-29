import { Box, Spinner, Text, Img } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

const ProductsData = ({ getMethod, setTotalData }) => {
  const [searchParams] = useSearchParams();
  const paramObj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: "price",
      _order: searchParams.get("_order"),
    },
  };
  const dispatch = useDispatch();
  const { isError, isLoading, womensData, totalData } = useSelector(
    (store) => store.womensReducer
  );

  useEffect(() => {
    dispatch(getMethod(paramObj));
  }, [searchParams]);

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      <Box display={"grid"} gridTemplateColumns="repeat(4,1fr)" gap="5px" ml = "15%" borderLeft={"1px solid gray"} pl = "20px" >
        {womensData.map((item) => {
          return (
            <Box key={item.id} textAlign={"left"} w="90%"  mb = "20px">
              <Img src={item.image} alt={item.title} h="300px" w="100%"></Img>
              <Text fontWeight={"600"}>{item.title}</Text>
              <Text fontWeight={"600"}>Rs {item.price}</Text>
            </Box>
          );
        })}
      </Box>
      <Pagination totalData={totalData} />
    </>
  );
};

export default ProductsData;
