import React, { useState } from 'react'
import "./PaymentPage.css"
import { useSelector, useDispatch } from 'react-redux'


let initialState={
  
  name:"",
  city:"",
  address:"",
  pin:"",
  number:""
  
}


const PaymentPage = () => {
  const [delivery, setDelivery]= useState(initialState);
  const dispatch= useDispatch()
  const orderstore= useSelector((store)=>store.ordersReducer);
  const {cartData}= useSelector((store)=>store.cartReducer)
  console.log(cartData)
  
  const handleChange=(e)=>{
    console.log(e.target.value);
    const {name,value}= e.target 
        
            setDelivery((prev)=> {
                return {...prev, [name]:value}
            })
            //important way of setting key pair values 
            //[name] because it is used as key
  }
  
  const handleClick=(e)=>{
    
      e.preventDefault();
      // console.log(products);
      // dispatch(addProduct(products));
      // //important step 
      // setProducts(initialState); 
  
  }
  
  
  return (
    <div className='paymentpage'>
    
      <div className='enter-address'>
         <h2>Enter Delivery Address</h2>
          <input name="name" value={delivery.name} onChange={handleChange} type='text' placeholder='Enter Name'/>
          <input name="city" value={delivery.city} onChange={handleChange} type='text' placeholder='Enter City'/>
          <input name="address" value={delivery.address} onChange={handleChange}  type='text' placeholder='Enter Address'/>
          <input  name="pin" value={delivery.pin} onChange={handleChange} type='number' placeholder='Enter Pin'/>
          <input name="number" value={delivery.number} onChange={handleChange} type='number' placeholder='Enter Number'/> 
          <button onClick={handleClick}>Add Addres</button>

          <div className='show-address'></div>
      </div>

      <div className='payment-box'>

          <div className='paymentpage-cartmap'>
              {cartData.map((item)=>{
                return item.price 
              })}
          </div>

      </div>
     </div>
  )
}

export default PaymentPage  

