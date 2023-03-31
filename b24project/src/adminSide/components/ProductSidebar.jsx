import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  Button,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const ProductSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const [searchParam, setSearchParam] = useSearchParams()
  const initial = searchParam.getAll('category')
  const [category, setCategory] = useState(initial||[])

  const handleChange = (e) => {
    // console.log(e.target.value)
    let newCategory = [...category]
    const value = e.target.value

    if (newCategory.includes(value)) {
        newCategory = newCategory.filter((el) => el !== value)
    } else {
        newCategory.push(value)
    }
    setCategory(newCategory)

    // console.log(category)
}

const handleClick = () =>{
  setCategory([])
}

  useEffect(() => {
    let params = {
        category,
    }

    setSearchParam(params)
}, [category])

  return (
    <>
      <Button colorScheme="gray" onClick={onOpen} mr={'20px'}>
        Filter
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Filter By Category</DrawerHeader>
          <DrawerBody>
            <Button onClick={handleClick} mb={"10px"}>Clear All</Button> <br />
            <Button defaultChecked mb={"10px"} value={'tops'} onClick={handleChange}>
              Tops
            </Button>
            <br />
            <Button defaultChecked mb={"10px"} value={'heels'} onClick={handleChange}>
              Heels
            </Button>
            <br />
            <Button mb={"10px"} value={'belts'} onClick={handleChange}>
              Belts
            </Button>
            <br />
            <Button mb={"10px"} value={'totes'} onClick={handleChange}>
              Totes
            </Button>
            <br />
            <Button mb={"10px"} value={'watch'} onClick={handleChange}>
              Watch
            </Button>
            <br />
            <Button mb={"10px"} value={'jewelry'} onClick={handleChange}>
              Jewelry
            </Button>
            <br />
            <Button mb={"10px"} value={'sandals'} onClick={handleChange}>
              Sandals
            </Button>
            <br />
            <Button mb={"10px"} value={'carryalls'} onClick={handleChange}>
              Carryalls
            </Button>
            <br />
            <Button mb={"10px"} value={'handbags'} onClick={handleChange}>
              Handbags
            </Button>
            <br />
            <Button value={'sunglasses'} onClick={handleChange}>Sunglasses</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProductSidebar;
