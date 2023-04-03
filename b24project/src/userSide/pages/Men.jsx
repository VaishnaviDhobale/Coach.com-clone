import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { getSidebarData, getMensData} from "../../redux/mens/actions";
import ProductsData from "../components/ProductsData";
import { useContext, useEffect } from "react";
import { Context } from "../../ContextApi/CommanContext";



const Mens = () => {
  // This context for fetching the correct data from the server like mens data or womwns data 
  let {setUrlKey} = useContext(Context);

  useEffect(()=>{
    setUrlKey("mens")
  },[]);
    return (
    <Box>
      <Sidebar getMethod={getSidebarData}/>
      <ProductsData  getMethod={getMensData} />
    </Box>
  );
};

export default Mens;
