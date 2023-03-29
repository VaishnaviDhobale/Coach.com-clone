import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
const AddProduct = () => {
  return (
    <>
    <Navbar/>
      <Container
        maxW="container.md"
        border="1px"
        borderColor="gray.400"
        p={"20px"}
        mt={"70px"}
      >
        <Heading mb={"10px"}>Add Product Form</Heading>
        <FormControl>
          <FormLabel m={"10px"}>Image URL</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value=""
            placeholder="image"
            size="md"
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Title</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value=""
            placeholder="title"
            size="md"
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Price</FormLabel>
          <Input
            border="1px solid gray"
            type="number"
            value=""
            placeholder="price"
            size="md"
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Category</FormLabel>
          <Select
            border="1px solid gray"
            placeholder="Category"
            size="md"
            mt={"10px"}
          >
            <option value="watch">Watch</option>
            <option value="jewelry">Jewelry</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="belts">Belts</option>
            <option value="tops">Tops</option>
            <option value="heels">Heels</option>
            <option value="sandal">Sandal</option>
            <option value="totes">Totes</option>
            <option value="carryalls">Carryalls</option>
            <option value="handbags">Handbags</option>
          </Select>
          <Button
            type="submit"
            colorScheme="teal"
            variant="outline"
            size="md"
            mt={"20px"}
          >
            Add Product
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddProduct;
