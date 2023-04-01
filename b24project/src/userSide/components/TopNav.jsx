import "./Topnav.css";
import {MdPlace} from "react-icons/md";
import { Text } from "@chakra-ui/react";
import {RxHeart} from "react-icons/rx";
import {IoPersonOutline,IoBagHandleOutline} from "react-icons/io5";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const TopNavbar=()=>{
    return (
        <div className="topnav">
   
             
        <Button><a href="">Recorded</a></Button>
         
            <img  src="https://i.postimg.cc/yYBp7z01/Whats-App-Image-2023-04-01-at-13-31-59.jpg"/>
    
           {/* <Text paddingTop="3"><RxHeart size={30} className="wshlst"/></Text>
           <Text marginLeft="200"  paddingTop="3"><IoPersonOutline size={30} className="signup"/></Text>
           <Text marginLeft="500" paddingTop="3"><IoBagHandleOutline size={30} className="shopbag"/></Text>

             */}
             <Link to="/">
             <RxHeart size="2rem"/></Link>
             <Link to="/"><IoPersonOutline marginLeft="30px" size="2rem"/></Link>
            <Link to="/"> <IoBagHandleOutline paddingLeft="200px"  size="2rem"/></Link>

        </div>
    )
}
export default TopNavbar;