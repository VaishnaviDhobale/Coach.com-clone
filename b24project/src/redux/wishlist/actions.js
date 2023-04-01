import {
  REQUEST_FAILURE,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
  POST_REQUEST_SUCCESS,
  DELETE_REQUEST_SUCCESS,

} from "./actionTypes";
import axios from "axios";



const wishlistUrl = `https://project-backend-t6y7.onrender.com/wishlist`;

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


// Fetching data for wishlist page 
export const getWishlistData =(paramsObj)=> async(dispatch) => {

  try {
    dispatch(requestPending());
    const apiData = await axios.get(`${wishlistUrl}/?_limit=16`,paramsObj);
    dispatch(getRequestSuccess({data : apiData.data,totalData :apiData["headers"]["x-total-count"]}));
  } catch {
    dispatch(requestFailure());
  }
  
};


// Posting data for wishlist page 
export const postWishlistData =(obj)=> async(dispatch) => {

  try {
    dispatch(requestPending());
    const apiData = await axios.post(`${wishlistUrl}`,obj);
    dispatch(postRequestSuccess(apiData.data));
  } catch {
    dispatch(requestFailure());
  }
  
};

// Deleting data for wishlist page 
export const deleteWishlistData =(id)=> async(dispatch) => {

  try {
    dispatch(requestPending());
    await axios.delete(`${wishlistUrl}/${id}`);
    dispatch(deleteRequestSuccess());
  } catch {
    dispatch(requestFailure());
  }
  
};


