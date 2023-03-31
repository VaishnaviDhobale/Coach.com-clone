import axios from "axios";
import {
  ADD_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS
} from "./actionType";

export const addProduct = (payload) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .post(`https://project-backend-t6y7.onrender.com/wishlist`, payload)
    .then(() => {
      dispatch({ type: ADD_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};


export const getProducts =(paramObj)=> (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .get(`https://project-backend-t6y7.onrender.com/products`,paramObj)
    .then((res) => {
      dispatch({ type: GET_REQUEST_SUCCESS,payload:res.data });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};