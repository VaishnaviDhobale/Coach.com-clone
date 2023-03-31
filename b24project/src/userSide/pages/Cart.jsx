import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData, getCartData } from "../../redux/carts/actions";
import SingleCart from "../components/SingleCart";
import Navbar from "../../userSide/components/Navbar";

// import Sidebar from "../components/Sidebar";
const { Box, Text } = require("@chakra-ui/react");

const Cart = () => {
  const dispatch = useDispatch();
  let { cartData, totalData } = useSelector((store) => store.cartReducer);
  let total = 0;
  let paramObj = {
    params: {
      // _page: 1,
    },
  };
  let totalPrice = 0;

  // handling delete cart

  const handleDeleteCart = (id) => {
    dispatch(deleteCartData(id)).then(() => {
      dispatch(getCartData(paramObj));
    });
  };

  for (let i = 0; i < totalData; i++) {
    totalPrice = cartData[i].price * cartData[i].qut;
    total += totalPrice;
  }

  useEffect(() => {
    dispatch(getCartData(paramObj));
  }, []);
  return (
    <Box>
      <Navbar />
      <Box ml="20px">
        <Text fontSize="30px" fontWeight={"bold"} textAlign={"left"}>
          My Bag ( {totalData} - {total})
        </Text>
        <Box display={"grid"} gridTemplateColumns={"60% 1fr"}>
          <Box id="cart">
            {cartData.map((item) => {
              return (
                <SingleCart
                  {...item}
                  totalData={totalData}
                  handleDeleteCart={handleDeleteCart}
                  paramObj={paramObj}
                />
              );
            })}
          </Box>

          <Box id="pay">
            <Text>Payment Detail</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
