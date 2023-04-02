import React from 'react'

const OrderCard = ({image,title,price,category,email,transaction_id}) => {
    console.log(props)
  return (
    <div>
       <h1>Email:{email}</h1>
      <h2>Transaction Id:{transaction_id}</h2>
      <h2>Title:{title}</h2>
      <h2>Category:{category}</h2>
      <h2>Price:{price}</h2>

      <img src={image} alt={title} />
    </div>
  )
}

export default OrderCard