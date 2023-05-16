
import {
    REQUEST_FAILURE,
    REQUEST_PENDING,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_SUCCESS_SIDE
  } from "./actionTypes";
  import axios from "axios";
  
  
  
  const mensUrl = `https://ruby-defiant-caridea.cyclic.app/mens`;
  
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
      // console.log(apiData.data.data)
      dispatch(getRequestSuccessSidebar(apiData.data.data));
    } catch {
      dispatch(requestFailure());
    }
  
  };
  
  
  // Fetching data for womens data 
  export const getMensData =(paramsObj)=> async(dispatch) => {
    console.log(paramsObj)
    try {
      dispatch(requestPending());
      const apiData = await axios.get(`${mensUrl}`);
      // console.log(apiData.data.data)
      dispatch(getRequestSuccess({data : apiData.data.data,totalData :apiData.data.totalData}));
    } catch {
      dispatch(requestFailure());
    }
    
  };
  
  