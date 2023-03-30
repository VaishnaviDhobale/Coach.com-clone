import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox
} from '@chakra-ui/react'
const ProductSidebar = () => {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Filter By Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel mb={10}>
          <Checkbox defaultChecked mb={'10px'}>Tops</Checkbox><br />
          <Checkbox defaultChecked mb={'10px'}>Heels</Checkbox><br />
          <Checkbox defaultChecked mb={'10px'}>Belts</Checkbox><br />
          <Checkbox defaultChecked mb={'10px'}>Totes</Checkbox><br />
          <Checkbox defaultChecked mb={'10px'}>Watch</Checkbox><br />
          <Checkbox defaultChecked mb={'10px'}>Jewelry</Checkbox><br />
          <Checkbox defaultChecked mb={'10px'}>Sandels</Checkbox><br />
          <Checkbox defaultChecked mb={'10px'}>Carryalls</Checkbox><br />
          <Checkbox defaultChecked mb={'10px'}>Handbags</Checkbox><br />
          <Checkbox defaultChecked>Sunglasses</Checkbox>

          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ProductSidebar;
