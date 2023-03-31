import {
  REQUEST_FAILURE,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
  POST_REQUEST_SUCCESS,
  DELETE_REQUEST_SUCCESS,
  PATCH_REQUEST_SUCCESS,

} from "./actionTypes";
import axios from "axios";



const cartUrl = `https://project-backend-t6y7.onrender.com/cart`;

const requestPending = () => {
  return { type: REQUEST_PENDING };
};

const requestFailure = () => {
  return { type: REQUEST_FAILURE };
};

const getRequestSuccess = (data) => {
  return { type: GET_REQUEST_SUCCESS, payload: data };
};

const postRequestSuccess = (data) => {
  return { type: POST_REQUEST_SUCCESS, payload: data };
};

const deleteRequestSuccess = () => {
  return { type: DELETE_REQUEST_SUCCESS};
};

const patchRequestSuccess = () => {
  return { type: PATCH_REQUEST_SUCCESS};
};


// Fetching data for cart page 
export const getCartData =(paramsObj)=> async(dispatch) => {

  try {
    dispatch(requestPending());
    const apiData = await axios.get(`${cartUrl}/?_limit=16`,paramsObj);
    dispatch(getRequestSuccess({data : apiData.data,totalData :apiData["headers"]["x-total-count"]}));
  } catch {
    dispatch(requestFailure());
  }
  
};


// Posting data for cart page 
export const postCartData =(paramsObj)=> async(dispatch) => {

  try {
    dispatch(requestPending());
    const apiData = await axios.post(`${cartUrl}/?_limit=16`,paramsObj);
    dispatch(postRequestSuccess(apiData.data));
  } catch {
    dispatch(requestFailure());
  }
  
};

// Deleting data for cart page 
export const deleteCartData =(id)=> async(dispatch) => {

  try {
    dispatch(requestPending());
    await axios.delete(`${cartUrl}/${id}`);
    dispatch(deleteRequestSuccess());
  } catch {
    dispatch(requestFailure());
  }
  
};


// Patch data for cart page 
export const patchCartData =(id, paramObj)=> async(dispatch) => {

  try {
    dispatch(requestPending());
    await axios.patch(`${cartUrl}/${id}`,paramObj);
    dispatch(patchRequestSuccess());
  } catch {
    dispatch(requestFailure());
  }
  
};


