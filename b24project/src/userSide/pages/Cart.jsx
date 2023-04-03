import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData, getCartData } from "../../redux/carts/actions";
import SingleCart from "../components/SingleCart";
import TopNavbar from "../components/TopNav";
import UserNavbar from "../components/UserNavbar";





import {
  Box,
  Spinner,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  let { cartData, totalData, isLoading, isError } = useSelector(
    (store) => store.cartReducer
  );
  let total = 0;
  let totalPrice = 0;

  let paramObj = {
    params: {
      // _page: 1,
    },
  };

  // handling delete cart
  const handleDeleteCart = (id) => {
    dispatch(deleteCartData(id)).then(() => {
      dispatch(getCartData(paramObj));
    });
  };

  // Handeling totalPrice here
  for (let i = 0; i < totalData; i++) {
    totalPrice = cartData[i].price * cartData[i].qut;
    total += totalPrice;
  }

  useEffect(() => {
    dispatch(getCartData(paramObj));
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <h1>Something went wrong</h1>;
  }else if(cartData.length===0){
    return <Box>
      <h1>Your Bag Is Empty</h1>
      <Link to = "/Womens"><Button backgroundColor={"black"} color = "white" p = "20px 10px" mt = "20px">Go For Shopping</Button></Link>
    </Box>
  }
  return (
    
    <Box>
      <TopNavbar/>
    <UserNavbar/>
      <Box  ml="20px">
        <Text fontSize="30px" fontWeight={"bold"} textAlign={"left"}>
          My Bag ( {totalData} )
        </Text>
        <Box mt="100px" display={"grid"} gridTemplateColumns={"60% 1fr"} gap="40px">
          <Box id="cart">
            {cartData.map((item) => {
              return (
                <SingleCart
                  key={Math.random()}
                  {...item}
                  totalData={totalData}
                  handleDeleteCart={handleDeleteCart}
                  paramObj={paramObj}
                />
              );
            })}
          </Box>

          <Box id="pay" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px" p="20px" mt="80px">
            <Text fontWeight={"bold"} fontSize={"25px"}>
              Order Summary
            </Text>
            <Table>
              <Tbody>
                <Tr>
                  <Td>Subtotal</Td>
                  <Td>{total}</Td>
                </Tr>
                <Tr>
                  <Td>Standard Shipping</Td>
                  <Td color={"green"}>FREE</Td>
                </Tr>
                <Tr>
                  <Td>Estimated Tax</Td>
                  <Td>----</Td>
                </Tr>
                <Tr>
                  <Td fontWeight={"bold"}>Total</Td>
                  <Td fontWeight="bold">Rs {total}</Td>
                </Tr>
              </Tbody>
            </Table>
            <Text mt="30px">
              4 interest-free payments of $112.50 with PayPal.
            </Text>
            <Link>
              <Button
                backgroundColor={"black"}
                color="White"
                w="100%"
                p="25px 0px"
              >
                <Link to={"/payment"}>
                PROCEED TO CHECKOUT
                </Link>
                
                 
                
              </Button>
            </Link>
            <Text mt="20px">OR CHECKOUT WITH </Text>
            <Link p="25px 0px">
              <Text
                w="200px"
                m="auto"
                fontSize={"30px"}
                fontWeight={"bold"}
                border="1px solid gray"
              >
                <i>
                  <span style={{ color: "#283a81" }}>Pay</span>
                  <span style={{ color: "#489cdb" }}>Pal</span>
                </i>
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
