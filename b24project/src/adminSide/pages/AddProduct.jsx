import React, { useState } from "react";
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
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/action";

const initial = {
  image: "",
  title: "",
  price: "",
  category: "",
};
const AddProduct = () => {
  const [formState, setFormState] = useState(initial);
  const dispatch = useDispatch();
  const toast = useToast();
  const positions = ["bottom-right"];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formState));
    setFormState(initial);
    toast({
      title: `Product Added Successfully`,
      position: positions,
      isClosable: true,
    });
  };
  return (
    <>
      <Navbar />
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
            value={formState.image}
            placeholder="image"
            size="md"
            name="image"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Title</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={formState.title}
            placeholder="title"
            size="md"
            name="title"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Price</FormLabel>
          <Input
            border="1px solid gray"
            type="number"
            value={formState.price}
            placeholder="price"
            size="md"
            name="price"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Category</FormLabel>
          <Select
            border="1px solid gray"
            placeholder="Category"
            size="md"
            name="category"
            onChange={handleChange}
            mt={"10px"}
          >
            <option value={formState.watch}>Watch</option>
            <option value={formState.jewelry}>Jewelry</option>
            <option value={formState.sunglasses}>Sunglasses</option>
            <option value={formState.belts}>Belts</option>
            <option value={formState.tops}>Tops</option>
            <option value={formState.heels}>Heels</option>
            <option value={formState.sandal}>Sandal</option>
            <option value={formState.totes}>Totes</option>
            <option value={formState.carryalls}>Carryalls</option>
            <option value={formState.handbags}>Handbags</option>
          </Select>
          <Button
            onClick={handleSubmit}
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
