import { Box, Img, Text, Select } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { getCartData, patchCartData } from "../../redux/carts/actions";
import { useDispatch } from "react-redux";
const SingleCart = ({
  title,
  price,
  image,
  id,
  category,
  handleDeleteCart,
  qut,
  paramObj,
}) => {
  const dispatch = useDispatch();

  const handleTotalPrice = (e) => {
    dispatch(patchCartData(id, { qut: +e.target.value })).then(() => {
      dispatch(getCartData(paramObj));
    });
  };

  return (
    <Box mb="30px" position={"relative"}>
      <Box
        position={"absolute"}
        right="5px"
        top="5px"
        backgroundColor={"#e2e8f0"}
        p="5px"
        borderRadius={"50%"}
        cursor={"pointer"}
        onClick={() => handleDeleteCart(id)}
      >
        <AiOutlineClose />
      </Box>
      <Box
        // border="1px solid red"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
        display={"flex"}
        gap="20px"
        h="150px"
      >
        <Img src={image} h="150px"></Img>
        <Box textAlign={"left"} width="350px">
          <Text fontSize={"19px"} fontWeight={"bold"} mt="20px">
            {title}
          </Text>
          <Text fontWeight={"600"}>{category}</Text>
          <Box display={"flex"}>
            <Text>
              Rs {price}{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>Only</span>
            </Text>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={"repeat(2,1fr)"}
          gap="20px"
          mt="20px"
        >
          <Select onChange={(e) => handleTotalPrice(e)}>
            <option value={qut}>{qut}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
          <Text
            position={"relative"}
            top="8px"
            fontWeight={"600"}
            fontSize={"18px"}
          >
            Rs {qut * price}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleCart;
