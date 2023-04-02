import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  useToast,
} from "@chakra-ui/react";
import ProductSidebar from "./ProductSidebar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProducts} from "../../redux/products/action";
const ProductCard = ({ image, title, id, price, category }) => {
  const dispatch = useDispatch();
  // const toast = useToast();
  // const positions = ["bottom-right"];
//  const handleDelete =(id)=>{
//   dispatch(deleteProducts(id))
//   toast({
//     title: `Product Delete Successfully`,
//     position: positions,
//     isClosable: true,
//   });
//  }
const handleDelete =()=>{
  
}
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text size="sm">{title}</Text>
            <Text color="blue.600" fontSize="2xl">
              ₹ {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button mr="20px">
            {" "}
            <Link to={`/edit/${id}`}>Edit</Link>
          </Button>
          <ProductSidebar />
          <Button onClick={handleDelete(id)}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
