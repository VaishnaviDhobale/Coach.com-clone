import { Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { getSidebarData, getWomensData} from "../../redux/womens/actions";
import ProductsData from "../components/ProductsData";


const Womens = () => {

    return (
    <Box>
      <Sidebar getMethod={getSidebarData}/>
      <ProductsData  getMethod={getWomensData} />
    </Box>
  );
};

export default Womens;
