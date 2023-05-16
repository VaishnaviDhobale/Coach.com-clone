import {NavLink} from "react-router-dom";
import "./navbar.css";

 let token = JSON.parse(localStorage.getItem("token")) || ""
 let name = JSON.parse(localStorage.getItem("buyfiuser")) || ""



const links=[
    {path:"/",title:"HOME"},
    {path:"/New",title:"NEW"},
    {path:"/Shopby",title:"SHOP BY"},
    {path:"/Womens",title:"WOMENS"},
    {path:"/Mens",title:"MENS"},
    {path:"/Bags",title:"BAGS"},
    {path:"/Bagiose(RE)",title:"BAGIOSE(RE)LOVED"},
    {path:"/BagioseInsider",title:"BAGIOSE INSIDER"},
    {path:"/Gifts",title:"GIFTS"},
    {path:"/SALE",title:"SALE"},
    {path: token ? "/logout" : "/login",title: token ? name+" " + "LOGOUT" : "LOGIN"},
];


//styling for navigation bar
function Navbar(){
    const defaultLinkStyle={textDecoration:"none",color:"black"}
    const activeLinkStyle={textDecoration:"none",color:"blue"}
    return(
        
      <div className="nav" >
        {links.map(({path,title})=>(
            <NavLink 
            style={({isActive})=>{
                return isActive ? activeLinkStyle : defaultLinkStyle;
            }}
            key={path}
            to={path}>
                {title}
            </NavLink>
        ))}
      </div>

    )
}
export default Navbar;