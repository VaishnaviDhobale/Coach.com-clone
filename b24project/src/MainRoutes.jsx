import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./adminSide/pages/AddProduct";
import Dashboard from "./adminSide/pages/Dashboard";
import ProductList from "./adminSide/pages/ProductList";
import HomePage from "./userSide/pages/Homepage";
import New from "./userSide/pages/Newpage";
import ShopBy from "./userSide/pages/Shopby";
import Men from "./userSide/pages/Men";
import Bags from "./userSide/pages/Bags";
import BagioseRE from "./userSide/pages/Bagiose(RE)";
import BagioseInsider from "./userSide/pages/BagioseInsider";
import Gifts from "./userSide/pages/Gifts";
import Sale from "./userSide/pages/Sale";
import Womens from "./userSide/pages/Womens";
import Orders from "./adminSide/pages/Orders"; 
import ProductDetails from "./userSide/components/ProductDetails";
import Login from "./userSide/pages/Login";

import EditProduct from "./adminSide/pages/EditProduct";


import Users from "./adminSide/pages/Users";

import Cart from "./userSide/pages/Cart"



function MainRoutes(){
    return(
        <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/New" element={<New/>}></Route>
        <Route path="/Shopby" element={<ShopBy/>}></Route>
        
        <Route path="/Mens" element={<Men/>}></Route>
        <Route path="/Womens" element={<Womens/>}></Route>

        <Route path="/Bags" element={<Bags/>}></Route>
        <Route path="/Bagiose(RE)" element={<BagioseRE/>}></Route>
        <Route path="/BagioseInsider" element={<BagioseInsider/>}></Route>
        <Route path="/Gifts" element={<Gifts/>}></Route>
        <Route path="/Sale" element={<Sale/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/addProduct' element={<AddProduct/>} />
      <Route path='/productList' element={<ProductList/>} />
      <Route path='/edit/:id' element={<EditProduct/>} />

      <Route path="/orders" element={<Orders/>} />
      <Route path="/users" element={<Users/>} />
       <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path = "/cart" element = {<Cart />}></Route>
      </Routes>)

    }






export default MainRoutes;
