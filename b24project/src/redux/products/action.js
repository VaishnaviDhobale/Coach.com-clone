import axios from "axios";
import {
  ADD_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
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
