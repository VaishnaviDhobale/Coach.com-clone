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
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProducts } from "../../redux/products/action";

const EditProduct = () => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  const toast = useToast();
  const positions = ["bottom-right"];
  const product = useSelector((store) => {
    return store.productsReducer.products;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    setItem(data);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProducts(item, id));
    toast({
      title: `Product Edit Successfully`,
      position: positions,
      isClosable: true,
    });
  };
  return (
    <>
      <Container
        maxW="container.md"
        border="1px"
        borderColor="gray.400"
        p={"20px"}
        mt={"70px"}
      >
        <Heading mb={"10px"}> Edit Product : {id}</Heading>
        <FormControl>
          <FormLabel m={"10px"}>Image URL</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={item.image}
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
            value={item.title}
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
            value={item.price}
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
            value={item.category}
            name="category"
            onChange={handleChange}
            mt={"10px"}
          >
            <option value={"watch"}>Watch</option>
            <option value={"jewelry"}>Jewelry</option>
            <option value={"sunglasses"}>Sunglasses</option>
            <option value={"belts"}>Belts</option>
            <option value={"tops"}>Tops</option>
            <option value={"heels"}>Heels</option>
            <option value={"sandal"}>Sandal</option>
            <option value={"totes"}>Totes</option>
            <option value={"carryalls"}>Carryalls</option>
            <option value={"handbags"}>Handbags</option>
          </Select>
          <Button
            onClick={handleSubmit}
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
