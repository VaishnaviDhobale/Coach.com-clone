
import React from 'react'

const UserCard = ({name,email,age,city,address,pincode}) => {
  return (
    <div><h1>Name:{name}</h1>
    <h3>Email:-{email}</h3>
    <h3>Age:{age}</h3>
    <p>City:{city}</p>
    <p>Address:-{address}</p>
    <p>Pincode:-{pincode}</p>
</div>
  )
}

export default UserCard