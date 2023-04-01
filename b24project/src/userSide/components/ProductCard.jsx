import {
  Box,
  Img,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { postWishlistData } from "../../redux/wishlist/actions";
import { Context } from "../../ContextApi/CommanContext";

const ProductCard = ({ id, image, title, price }) => {
  let { urlKey } = useContext(Context);
  const toast = useToast();
  const dispatch = useDispatch();
  // this "shoeQu" for the "quick view hover"
  const [showQu, setShowQu] = useState(false);

  const handleHover = () => {
    setShowQu(true);
  };

  const handleDeleteHover = () => {
    setShowQu(false);
  };

  // For Modal (Quick view)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior] = useState("inside");

  // Handling add wishlist
  const handleAddWishlist = (id) => {
    const data = {
      id,
      image,
      title,
      price,
      qut: 1,
    };
    dispatch(postWishlistData(data));
    toast({
      description: "Product Added Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      <Box
        key={id}
        textAlign={"left"}
        w="90%"
        mb="20px"
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleDeleteHover()}
        position="relative"
        cursor="pointer"
        // h = "450px"
        // border = "1px solid red"
      >
        <Img
          src={image}
          alt={title}
          h={{
            base: "200px",
            sm: "250px",
            md: "250px",
            lg: "300px",
          }}
          w="100%"
        ></Img>
        <Box
          position={"absolute"}
          top="5px"
          right={"5px"}
          onMouseEnter={() => setShowQu(false)}
          onMouseLeave={() => setShowQu(true)}
          onClick={() => handleAddWishlist(id, image, title, price)}
        >
          <AiOutlineHeart size={"26px"} color="#8a8c8f" />
        </Box>
        {showQu && (
          <Text
            border="1px solid gray"
            textAlign={"center"}
            position="absolute"
            top="30%"
            w="100%"
            fontWidth="600"
            fontSize="18px"
            p="8px 0px"
            backgroundColor="#f7f7f7"
            onClick={onOpen}
          >
            Quick View
          </Text>
        )}
        <Text fontWeight={"600"} mt="20px">
          {title.substring(0, 23)}...
        </Text>
        <Box>
          <Text fontWeight={"600"} mt="-10px">
            Rs {price}
          </Text>
          <Link to={`/ProductDetails/${id}`} position="absolute" top="0px">
            <Button
              onMouseEnter={() => setShowQu(false)}
              onMouseLeave={() => setShowQu(true)}
              fontWeight={"600"}
              mt="-10px"
              // position = "absolute"
              // bottom = "0px"
            >
              Show More
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Quick view using Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />

          <ModalBody pt="40px">
            <Box
              display={"flex"}
              flexDirection={{
                base: "column",
                sm: "row",
                md: "row",
                lg: "row",
              }}
              gap="20px"
            >
              <Img width="50%" src={image}></Img>
              <Box>
                <Text fontWeight="600" fontSize="22px">
                  {title}
                </Text>
                <Text fontWeight={"600"} textDecoration="underline">
                  Rs {price}
                </Text>
                <Box display={"flex"}>
                  <Box
                    display={"flex"}
                    mb="20px"
                    justifyContent={"space-between"}
                    width="150px"
                  >
                    <BsStarFill size="20px" />
                    <BsStarFill size="20px" />
                    <BsStarFill size="20px" />
                    <BsStarFill size="20px" />
                    <BsStarFill size="20px" />
                  </Box>
                  <Text ml="10px" position={"relative"} bottom="2px">
                    ( {Math.floor(Math.random() * 10)} )
                  </Text>
                </Box>
                <Text>
                  {" "}
                  {title} ipsum dolor sit amet consectetur adipisicing elit.
                  Cum, repellendus...
                </Text>
                <Box>
                  <Select
                    name=""
                    id=""
                    style={{ border: "1px solid gray", height: "50px" }}
                  >
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </Select>
                  <Button
                    backgroundColor={"black"}
                    color="white"
                    m="20px 0px"
                    w="100%"
                    h="55px"
                  >
                    I WANT IT
                  </Button>
                </Box>

                <Box display={"flex"} justifyContent="space-between">
                  <Link to="/Womens">
                    <Text textDecoration={"underline"}>Go back to shop</Text>
                  </Link>

                  <Link to={`/ProductDetails/${id}`}>
                    <Text textDecoration={"underline"}>Show more detail</Text>
                  </Link>
                </Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
