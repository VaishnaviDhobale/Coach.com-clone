import React from 'react'
import Navbar from "../../adminSide/components/Navbar"
import OrderManagement from '../components/OrderManagement';

function Orders() {
  return (
    <div>
        <Navbar/>
       <OrderManagement/>
    </div>
  )
}

export default Orders;