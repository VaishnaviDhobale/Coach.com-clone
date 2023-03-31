import axios from "axios";
import {GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./actionTypes";


export const getUsers=(dispatch)=>{
  dispatch({type:GET_USERS_REQUEST})
  axios.get(`https://project-backend-t6y7.onrender.com/users`).then((res)=>{
    console.log(res)
      dispatch({type:GET_USERS_SUCCESS,payload:res.data})
  }).catch(()=>{
      dispatch({type:GET_USERS_FAILURE})
  })
}

