import "./Topnav.css";
import { MdPlace } from "react-icons/md";
import { Text } from "@chakra-ui/react";
import { RxHeart } from "react-icons/rx";
import { IoPersonOutline, IoBagHandleOutline } from "react-icons/io5";
import { Box,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const TopNavbar = () => {
  return (
    <Box className="topnav">
      <Box>
        <img src="https://i.postimg.cc/SsRfrTjB/IMG-20230402-WA0000.jpg" />
      </Box>

      {/* <Text paddingTop="3"><RxHeart size={30} className="wshlst"/></Text>
           <Text marginLeft="200"  paddingTop="3"><IoPersonOutline size={30} className="signup"/></Text>
           <Text marginLeft="500" paddingTop="3"><IoBagHandleOutline size={30} className="shopbag"/></Text>

             */}
      <Box>
        <input type="text" placeholder="Search" className="searchbox" />
        <Button>Search</Button>
        <Link to="/">
          <RxHeart size="2rem" />
        </Link>

        <Link to="/login">
          <IoPersonOutline size="2rem" />
        </Link>
        <Link to="/cart">
          {" "}
          <IoBagHandleOutline size="2rem" />
        </Link>
      </Box>
    </Box>
  );
};
export default TopNavbar;
