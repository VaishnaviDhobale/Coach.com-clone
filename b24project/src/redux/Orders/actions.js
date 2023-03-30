import axios from "axios";
import { GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "./actionTypes";


export const getProduct=()=>(dispatch)=>{
  dispatch({type:GET_ORDERS_REQUEST})
  axios.get(`https://project-backend-t6y7.onrender.com/orders`).then((res)=>{
      dispatch({type:GET_ORDERS_SUCCESS,payload:res.data})
  }).then(()=>{
      dispatch({type:GET_ORDERS_FAILURE})
  })
}

