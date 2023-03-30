import React from "react";
import ProductCard from "../components/ProductCard";
import ProductSidebar from "../components/ProductSidebar";
import Navbar from "../components/Navbar";
import { Box, Container,  } from "@chakra-ui/react";
const ProductList = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.1xl">
        <Box display={'flex'} width='100%' border={'1px solid blue'} >
          <Box border={'1px solid green'} width='20%' >
            <ProductSidebar />
          </Box>
          <Box border={'1px solid red'} width='80%'  >
            <ProductCard />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ProductList;
