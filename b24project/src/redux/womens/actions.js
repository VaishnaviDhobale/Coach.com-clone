import {
  REQUEST_FAILURE,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_SUCCESS_SIDE,
  CLEAR_FILTERS
} from "./actionTypes";
import axios from "axios";



const womensUrl = `https://project-backend-t6y7.onrender.com/womens`;

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

const clearFilters = () => {
  return {type : CLEAR_FILTERS}
}


// Fetching data for sideBar 
export const getSidebarData = async(dispatch) => {

  try {
    dispatch(requestPending());
    const apiData = await axios.get(womensUrl);
    dispatch(getRequestSuccessSidebar(apiData.data));
  } catch {
    dispatch(requestFailure());
  }

};


// Fetching data for womens data 
export const getWomensData =(paramsObj)=> async(dispatch) => {

  try {
    dispatch(requestPending());
    const apiData = await axios.get(`${womensUrl}/?_limit=16`,paramsObj);
    dispatch(getRequestSuccess({data : apiData.data,totalData :apiData["headers"]["x-total-count"]}));
  } catch {
    dispatch(requestFailure());
  }
  
};

// Clearing All filters
export const clearAllFilters = (dispatch) => {
  dispatch(clearFilters())
  getWomensData()
}