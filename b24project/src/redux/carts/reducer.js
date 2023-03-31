import {
  REQUEST_FAILURE,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
  POST_REQUEST_SUCCESS,
 
} from "./actionTypes";


const initialData = {
  cartData: [],
  totalData: 0,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case REQUEST_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartData: payload.data,
        totalData: payload.totalData,
      };
    }

    case POST_REQUEST_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          cartData :[...state.cartData,payload]
        };
      }

    case REQUEST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return { ...state };
    }
  }
};
