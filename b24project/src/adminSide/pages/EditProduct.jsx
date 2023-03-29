import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const EditProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Edit Product</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
              <Input
                border="1px solid gray"
                type="text"
                value=""
                placeholder="category"
                size="md"
                mb={"10px"}
              />
              <Button
                type="submit"
                colorScheme="teal"
                variant="outline"
                size="md"
                mt={"20px"}
              >
                Submit
              </Button>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditProduct;
