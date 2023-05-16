import {
  REQUEST_FAILURE,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
  POST_REQUEST_SUCCESS,
  DELETE_REQUEST_SUCCESS,
  PATCH_REQUEST_SUCCESS,

} from "./actionTypes";
import axios from "axios";



const cartUrl = `https://ruby-defiant-caridea.cyclic.app/cart`;

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
export const getCartData = async(dispatch) => {

  try {
    dispatch(requestPending());
    const apiData = await axios.get(`${cartUrl}`);
    // console.log(apiData.data.totalData,"fgohgchjhgcgh")
    dispatch(getRequestSuccess({data : apiData.data.data,totalData :apiData.data.totalData
    }));
  } catch {
    dispatch(requestFailure());
  }
  
};


// Posting data for cart page 
export const postCartData =(paramsObj)=> async(dispatch) => {
  console.log(paramsObj,".........")
  try {
    dispatch(requestPending());
    const apiData = await axios.post(`${cartUrl}/addCart`,paramsObj);
    dispatch(postRequestSuccess(apiData.data));
  } catch {
    dispatch(requestFailure());
  }
  
};

// Deleting data for cart page 
export const deleteCartData =(id)=> async(dispatch) => {
  console.log(id)
  try {
    dispatch(requestPending());
    await axios.delete(`${cartUrl}/delete/${id}`);
    dispatch(deleteRequestSuccess());
  } catch {
    dispatch(requestFailure());
  }
  
};


// Patch data for cart page 
export const patchCartData =(id, paramObj)=> async(dispatch) => {
  // console.log(id,paramObj)
  try {
    dispatch(requestPending());
    let data = await axios.patch(`${cartUrl}/update/${id}`,paramObj);
    console.log(data)
    dispatch(patchRequestSuccess());
  } catch {
    dispatch(requestFailure());
  }
  
};


