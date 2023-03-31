import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { getSidebarData, getWomensData} from "../../redux/womens/actions";
import ProductsData from "../components/ProductsData";
import { useContext, useEffect } from "react";
import { Context } from "../../ContextApi/CommanContext";
import Navbar from "../../userSide/components/Navbar"


const Womens = () => {
    // This context for fetching the correct data from the server like mens data or womwns data 
    let {setUrlKey} = useContext(Context);

    useEffect(()=>{
      setUrlKey("womens")
    },[]);

    return (
    <Box>
      <Navbar />
      <Sidebar getMethod={getSidebarData}/>
      <ProductsData  getMethod={getWomensData} />
    </Box>
  );
};

export default Womens;
