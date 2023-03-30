import {NavLink} from "react-router-dom";
import "./navbar.css";


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
];


//styling for navigation bar
function Navbar(){


    const defaultLinkStyle={textDecoration:"none",color:"black"}
    const activeLinkStyle={textDecoration:"none",color:"blue"}
    return(
        
      <div className="nav" >

{/* 
      style={{display:"flex",
    
      alignItems:"center",
      justifyContent:"space-evenly",
    marginTop:"100px",
      paddingBottom:"30px",
      width:"80%",
      margin:"auto",
      fontSize:"14px",
      fontStyle:"inherit",
    
      }}> */}
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