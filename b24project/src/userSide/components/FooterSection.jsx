import { Button } from "@chakra-ui/react";
import "./Footer.css";

const Footer=()=>{
   
    return (
        <>
        <div className="search">
        </div>

        {/* main footer */}
        <div className="footer">
            {/* first section */}
            <div>
            <h4>CUSTOMER CARE</h4><br></br>
            <p>Feedback</p>
            <p>Track Order</p>
            <p>Shipping Details & Fees</p>
            <p>Returns</p>
            <p>Pricing Policy</p>
            <p>Unsubscribe</p>
            <p>FAQ</p>
            </div>
{/* second section */}
            <div><h4>SERVICES</h4><br></br>
            <p>Lifetime Leather Care</p>
            <p>Product Care</p>
            <p>Repairs</p>
            <p>Bagiose Create Customization</p>
            <p>Chat with a Stylist</p>
            <p>Store Pickup and Virtual Shopping</p>
            <p>Gift Services</p>
            <p>ShopRunner</p></div>
        
        {/* third section */}
        <div><h4>SUSTAINABILITY</h4><br></br>
        <p>Crafted to Last</p>
        <p>Bagiouse (Re)Loved</p>
        <p>Sustainable Materials</p>
        <p>Tapestry Corporate Responsiblity</p></div>
{/* fourth section */}
<div>
    <h4>ABOUT US</h4><br></br>
    <p>Bagiouse Story</p>
    <p>Bagiouse Foundation</p>
    <p>Careers</p>
    <p>Tapestry</p>
    <p>Investor Relations</p>
</div>
{/* fifth section */}

<div>
    <input  type="text" placeholder="Enter Email"></input> <Button>Subscribe</Button>

<p>You are Signing up to receive Bagiouse emails.You can withdraw your consent at any time.</p>
<p>Read our Privacy Policy or Contact Us for more details</p>
<img width="130px" src="data:image/png;base64,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"/>
</div>
</div>
{/* bottom */}
<div className="bottom1">
<div><p>TERMS OF USE</p>
<p>PRIVACY POLICY</p>
<p>CA TRANSPARENCY & UK MODERN SLAVERY ACT</p>
<p>DO NOT SELL OR SHARE MY PERSONAL INFO</p>
<p>MANAGE COOKIES</p>
<p>BRAND PROTECTION</p></div>
<div className="bottom2"/>
<div><p>ACCESSBLITY</p>
<p>CUSTOMER CARE</p>
<p>FEEDBACK</p></div>
<div className="bottom3">
    <p>@2023 BAGIOUSE ALL RIGHTS RESERVED</p>
</div>
</div>


      </>  
    )
    
}
export default Footer;