
import {
    REQUEST_FAILURE,
    REQUEST_PENDING,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_SUCCESS_SIDE
  } from "./actionTypes";
  import axios from "axios";
  
  
  
  const mensUrl = `https://project-backend-t6y7.onrender.com/mens`;
  
  const requestPending = () => {
    return { type: REQUEST_PENDING };
  };
  
  const requestFailure = () => {
    return { type: REQUEST_FAILURE };
  };
  
  const getRequestSuccessSidebar = (data) => {
    return { type: GET_REQUEST_SUCCESS_SIDE, payload: data };
  };
  
  const getRequestSuccess = (data) => {
    return { type: GET_REQUEST_SUCCESS, payload: data };
  };
  
  
  // Fetching data for sideBar 
  export const getSidebarData = async(dispatch) => {
  
    try {
      dispatch(requestPending());
      const apiData = await axios.get(mensUrl);
      dispatch(getRequestSuccessSidebar(apiData.data));
    } catch {
      dispatch(requestFailure());
    }
  
  };
  
  
  // Fetching data for womens data 
  export const getMensData =(paramsObj)=> async(dispatch) => {
  
    try {
      dispatch(requestPending());
      const apiData = await axios.get(`${mensUrl}/?_limit=12}`,paramsObj);
      console.log(apiData)
      dispatch(getRequestSuccess({data : apiData.data,totalData :apiData["headers"]["x-total-count"]}));
    } catch {
      dispatch(requestFailure());
    }
    
  };
  
  