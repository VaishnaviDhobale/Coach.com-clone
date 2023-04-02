import "./Topnav.css";
import {MdPlace} from "react-icons/md";
import { Text } from "@chakra-ui/react";
import {RxHeart} from "react-icons/rx";
import {IoPersonOutline,IoBagHandleOutline} from "react-icons/io5";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {MdSearch} from "react-icons/md"



const TopNavbar=()=>{
    return (
        <div className="topnav">

             
        <Button><a href="xyz">Recorded</a></Button>

            <div>
         
            <img  src="https://i.postimg.cc/SsRfrTjB/IMG-20230402-WA0000.jpg"/>
            </div>
    
           {/* <Text paddingTop="3"><RxHeart size={30} className="wshlst"/></Text>
           <Text marginLeft="200"  paddingTop="3"><IoPersonOutline size={30} className="signup"/></Text>
           <Text marginLeft="500" paddingTop="3"><IoBagHandleOutline size={30} className="shopbag"/></Text>

             */}
             <div>
                <input type="text" placeholder="Search" className="searchbox"/><Button>Search</Button>
             <Link to="/">
             <RxHeart size="2rem"/></Link>

             <Link to="/"><IoPersonOutline  size="2rem"/></Link>
            <Link to="/"> <IoBagHandleOutline   size="2rem"/></Link>

        
        

        </div>
        </div>
    )
}
export default TopNavbar;