import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../../ContextApi/CommanContext";

const Buttons = ({ children }) => {
  // This context for handle page/pagination
  let { page, handlePagination } = useContext(Context);
  
  return (
    <Button
      p="20px"
      m="5px"
      backgroundColor={children === page ? "gray" : ""}
      onClick={() => handlePagination(+children)}
    >
      {children}
    </Button>
  );
};

export default Buttons;
