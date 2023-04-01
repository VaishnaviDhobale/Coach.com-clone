import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/Orders/actions';
import { Store } from '../../redux/Store';
import OrderCard from './OrderCard';


const OrderManagement = () => {

    //console.log(Store.getState())

     const dispatch=useDispatch();
     const ordersData=useSelector((store)=>store.ordersReducer)
     //console.log(orders);

     useEffect(()=>{
      dispatch(getOrders());
     },[]);


  return (
    <div style={{marginTop:"5%"}}>
       {
        ordersData.orders.map((item)=>{
          return <OrderCard key={item.id} {...item} />
        })
       }
    </div>
  )
}

export default OrderManagement;