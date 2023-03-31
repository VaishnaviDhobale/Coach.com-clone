import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../redux/carts/actions";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
// import Sidebar from "../components/Sidebar";
const { Box, Text } = require("@chakra-ui/react");

const Cart = () => {
  const dispatch = useDispatch();
  let { cartData, totalData } = useSelector((store) => store.cartReducer);

  let paramObj = {
    params: {
      _page: 1,
    },
  };

  let totalPrice = 0

  for(let i=0;i<totalData;i++){
    totalPrice = totalPrice + cartData[i].price
  }


  useEffect(() => {
    dispatch(getCartData(paramObj));
  }, []);

  return (
    <Box>
      <Box>
        <Text>Total Products: {totalData}</Text>
        <Text>Total Price: {totalPrice}</Text>
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap="5px"
        ml="20px"
      >
        {cartData.map((item) => {
          return <ProductCard {...item} />;
        })}
      </Box>
      <Pagination totalData={totalData} />
    </Box>
  );
};

export default Cart;
