import React from "react";
import EditProduct from "../pages/EditProduct";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  
} from "@chakra-ui/react";
import ProductSidebar from "./ProductSidebar";
import { Link } from "react-router-dom";
const ProductCard = ({ image, title, id, price, category }) => {
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
                <Text size="sm" >{title}</Text>
                <Text color="blue.600" fontSize="2xl">
                ₹ {price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
            <Button mr='20px'> <Link to={`/edit/${id}`} >Edit</Link></Button>
              <ProductSidebar/>
              <Button>Delete</Button>
            </CardFooter>
          </Card>
    </div>
  );
};

export default ProductCard;
