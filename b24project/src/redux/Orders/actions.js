import axios from "axios";
import { GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "./actionTypes";


export const getOrders=()=>(dispatch)=>{
  dispatch({type:GET_ORDERS_REQUEST})
  axios.get(`https://project-backend-t6y7.onrender.com/orders`).then((res)=>{
    //console.log(res.data)
      dispatch({type:GET_ORDERS_SUCCESS,payload:res.data})
  }).catch(()=>{
      dispatch({type:GET_ORDERS_FAILURE})
  })
}

// export const getOrders=()=>async(dispatch)=>{
//   dispatch({type:GET_ORDERS_REQUEST})
//   try{
//     let res=await axios.get(`https://project-backend-t6y7.onrender.com/orders`)
//     let data=res.data;
//     //console.log(data)
//     dispatch({type:GET_ORDERS_SUCCESS,payload:res.data})

//   } catch (error) {
//     console.log(error);
//     dispatch({type:GET_ORDERS_FAILURE})
//   }
// }

