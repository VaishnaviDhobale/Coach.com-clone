



import React from 'react'

const PaymentCard = ({image,price,qut, title,category}) => {
  
  
  
  return (
    <div>
      
        <div style={{border:"1px solid grey", width:"70%", height:"150px"}} className='listcartprod'>
          <img style={{marginLeft:"150px"}} width={"70px"} src={`${image}`}/>
          <p>{title}</p>
          <span> Quantity:{qut}</span>  <span>Price:{price}</span>
          
        </div>
    </div>
  )
}


export default PaymentCard
