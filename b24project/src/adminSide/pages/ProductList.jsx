import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { Box, Container, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/action";
import { useLocation, useSearchParams } from "react-router-dom";
const ProductList = () => {
  const [searchParam] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((store) => {
    return store.productsReducer;
  });
  // console.log(products);
  let obj = {
    params: {
      category: searchParam.getAll("category"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);

  if (isLoading) {
    return <Spinner size="xl" mt={"20%"} />;
  }
  return (
    <>
      <Navbar />
      <Container maxW="container.1xl" mt={"5%"}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} mb="20px">
          {products.length > 0 &&
            products.map((el) => {
              return <ProductCard key={el.id} {...el} />;
            })}
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;
