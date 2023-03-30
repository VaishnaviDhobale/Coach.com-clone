import { Box } from "@chakra-ui/react";
import Buttons from "./Button";

const Pagination = ({ totalData }) => {
  // Creating a dummy array for create multiple buttons 
  let buttonArray = Array(Math.ceil(totalData / 16)).fill(0);
  
  return (
    <Box mt={"30px"} m = {{
      base : "auto",
      sm : "auto",
      md : "auto"
    }}
    ml = {{
      base : "none",
      sm : "none",
      md : "none",
      lg : "20%"
    }}
    >
      {buttonArray.map((el, index) => {
        return (
          <Buttons>{index + 1}</Buttons>
        );
      })}
    </Box>
  );
};

export default Pagination;
