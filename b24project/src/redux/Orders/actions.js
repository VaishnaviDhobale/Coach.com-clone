import axios from "axios";
import { GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "./actionTypes";


export const getProduct=(dispatch)=>{
  dispatch({type:GET_ORDERS_REQUEST})
  axios.get(`https://project-backend-t6y7.onrender.com/orders`).then((res)=>{
    console.log(res)
      dispatch({type:GET_ORDERS_SUCCESS,payload:res.data})
  }).catch(()=>{
      dispatch({type:GET_ORDERS_FAILURE})
  })
}

//comment