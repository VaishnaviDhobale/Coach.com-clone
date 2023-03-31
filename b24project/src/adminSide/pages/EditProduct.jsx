import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [item , setItem] = useState("")
  const product = useSelector((store) => {
    return store.productsReducer.products;
  });

  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    setItem(data);
  }, []);
  
  return (
    <>
     <Container
        maxW="container.md"
        border="1px"
        borderColor="gray.400"
        p={"20px"}
        mt={"70px"}
      >
        <Heading mb={"10px"}> Edit Product Form</Heading>
        <FormControl>
          <FormLabel m={"10px"}>Image URL</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={item.image}
            placeholder="image"
            size="md"
            name="image"
            // onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Title</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={item.title}
            placeholder="title"
            size="md"
            name="title"
            // onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Price</FormLabel>
          <Input
            border="1px solid gray"
            type="number"
            value={item.price}
            placeholder="price"
            size="md"
            name="price"
            // onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Category</FormLabel>
          <Select
            border="1px solid gray"
            placeholder="Category"
            size="md"
            name="category"
            // onChange={handleChange}
            mt={"10px"}
          >
            <option value={item.watch}>Watch</option>
            <option value={item.jewelry}>Jewelry</option>
            <option value={item.sunglasses}>Sunglasses</option>
            <option value={item.belts}>Belts</option>
            <option value={item.tops}>Tops</option>
            <option value={item.heels}>Heels</option>
            <option value={item.sandal}>Sandal</option>
            <option value={item.totes}>Totes</option>
            <option value={item.carryalls}>Carryalls</option>
            <option value={item.handbags}>Handbags</option>
          </Select>
          <Button
            // onClick={handleSubmit}
            colorScheme="teal"
            variant="outline"
            size="md"
            mt={"20px"}
          >
            Submit
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditProduct;
