import {NavLink} from "react-router-dom";
import "./navbar.css";
 import { useAuth0 } from "@auth0/auth0-react";

 

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
    // {path:"/cart",title:"CART"},

    // {path:"/login", title:"LOGIN"}
];


//styling for navigation bar
function Navbar(){
   const { loginWithRedirect, isAuthenticated, logout, user} = useAuth0();


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
       
        { isAuthenticated ? ( <button style={{border:"1px solid #b266ff", color:"white", backgroundColor:"#b266ff", padding : "20px"}} onClick={() => logout({ returnTo: window.location.origin })}>
         LOGOUT 
       </button>) :  
        
        (<button style={{border:"1px solid #b266ff", color:"white", backgroundColor:"#b266ff"}} onClick={() => loginWithRedirect()}>LOGIN</button>)
       
          }
          {isAuthenticated && <p>Welcome ! {user.nickname}</p>}
      </div>

    )
}
export default Navbar;