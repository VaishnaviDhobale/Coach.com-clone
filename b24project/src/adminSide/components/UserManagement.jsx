
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getUsers } from '../../redux/Users/actions';
import { Store } from '../../redux/Store';
import UserCard from './UserCard';





const UserManagement = () => {
   //console.log(Store.getState())

  const dispatch=useDispatch();
  const usersData=useSelector((store)=>store.usersReducer)

    

     useEffect(()=>{
      dispatch(getUsers())
     },[]);



  return (
    <div style={{marginTop:"5%"}}>
         {
            usersData.users.map((item)=>{
           return <UserCard  key={item.id} {...item} />
            }) 
       }
    </div>
  )
}

export default UserManagement;