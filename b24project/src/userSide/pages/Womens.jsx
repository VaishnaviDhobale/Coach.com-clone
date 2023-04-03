import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { getSidebarData, getWomensData} from "../../redux/womens/actions";
import ProductsData from "../components/ProductsData";
import { useContext, useEffect } from "react";
import { Context } from "../../ContextApi/CommanContext";
import TopNavbar from "../components/TopNav";
import UserNavbar from "../components/UserNavbar";



const Womens = () => {
    // This context for fetching the correct data from the server like mens data or womwns data 
    let {setUrlKey} = useContext(Context);

    useEffect(()=>{
      setUrlKey("womens")
    },[]);

    return (
    <Box>
      <TopNavbar/>
      <UserNavbar/>
      <Sidebar getMethod={getSidebarData}/>
      <ProductsData  getMethod={getWomensData} />
    </Box>
  );
};

export default Womens;
