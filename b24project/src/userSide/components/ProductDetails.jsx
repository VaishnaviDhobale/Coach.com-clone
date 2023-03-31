import { Text, Box, Img, Select, Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../ContextApi/CommanContext";
import { BsStarFill } from "react-icons/bs";
import { getCartData, postCartData } from "../../redux/carts/actions";
import { useDispatch, useSelector } from "react-redux";

const ProductsDetails = () => {
  let toast = useToast();
  // Getting product id from url
  const id = +useParams("id").id;

  // Accessing urlKey (This Context for getting correct data from server like "womens", "mens")
  const { urlKey } = useContext(Context);
  const [data, setData] = useState({});

  // getting data from server
  const getData = async () => {
    let data = await axios.get(
      `https://project-backend-t6y7.onrender.com/${urlKey}/${id}`
    );
    setData(data.data);
  };

  // Getting cart detail from store
  const dispatch = useDispatch();
  // const datas = useSelector((store)=>store.cartReducer);
  // console.log(datas)

  // Handling cart post here
  const handleCartPosting = () => {
    dispatch(postCartData(data)).then(() => {
      toast({
        description: "Product Added To Cart",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(1,1fr)",
          lg: "60% 1fr",
        }}
        gap="20px"
        m={{
          base: "0px 20px",
          sm: "0px 20px",
          md: "0px 0px",
        }}
      >
        <Box width="100%" backgroundColor="#f1f1f1" m="auto" mt="0px">
          <Img m="auto" width="50%" src={data.image}></Img>
        </Box>
        <Box mr="20px">
          <Text textAlign={"left"} fontWeight="600" fontSize="22px">
            {data.title}
          </Text>
          <Text
            textAlign={"left"}
            fontWeight={"600"}
            textDecoration="underline"
          >
            Rs {data.price}
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
              ( {Math.floor(Math.random() * 100)} )
            </Text>
          </Box>
          <Text textAlign={"left"}>
            {data.title} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Asperiores exercitationem cumque quam ipsam nesciunt nulla
            repudiandae, magnam modi omnis maxime enim, repellat sequi aliquam
            eaque perspiciatis voluptatibus veritatis minima? A?
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns={"20% 1fr 1fr"}
            gap="20px"
            // border = "1px solid red"
          >
            <Box position={"relative"} top="22px">
              <Select
                name=""
                id=""
                style={{
                  border: "1px solid gray",
                  height: "50px",
                  width: "100%",
                }}
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </Select>
            </Box>
            <Button
              backgroundColor={"black"}
              color="white"
              m="20px 0px"
              w="100%"
              h="55px"
            >
              I WANT IT
            </Button>
            <Button
              backgroundColor={"black"}
              color="white"
              m="20px 0px"
              w="100%"
              h="55px"
              onClick={handleCartPosting}
            >
              ADD TO CART
            </Button>
          </Box>

          <Link to="/Womens">
            <Text textDecoration={"underline"}>Go back to shop</Text>
          </Link>

          <Box>
            <Text>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                SHOPRUNNER
              </span>{" "}
              Free 2-Day Shipping & Free Returns.
            </Text>

            <Text textAlign={"left"}>
              Insiders Give Back We’ll donate $2.25 of your purchase to the
              cause of your choice when you sign in or sign up for Coach Insider
              Powered. It's the perfect retro chic bag to go with any loungewear
              outfit that is a relaxed fit
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="30px" mb="40px">
        <Box>
          <Text fontWeight={"bold"} fontSize="70px">
            We look good together.
          </Text>
          <Text fontWeight={"600"} fontSize="20px">
            Keep carrying (and tagging) @coach. #CoachNY
          </Text>
          <a target="blank" href="https://www.instagram.com/">
            <Text textDecoration="underline">FOLLOW US ON INSTAGRAM</Text>
          </a>
          <Img
            m="auto"
            mt="90px"
            src="https://cdn.wyng.com/54ac3103ef95a67c1cff8ef2/64066ef802458501678c1d4d.JPEG"
          ></Img>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsDetails;
