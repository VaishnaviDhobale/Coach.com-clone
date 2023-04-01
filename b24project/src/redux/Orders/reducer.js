import { GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "./actionTypes";

const initialData={
    orders : [],
    isLoading : false,
    isError : false
}

export const reducer = (state = initialData,{type,payload}) => {
    switch(type){
        
        case GET_ORDERS_REQUEST : {
            return {
                ...state,
                isLoading : true,
            }
        }

        case GET_ORDERS_SUCCESS: {
            return {
                ...state,
                isLoading : false,
                orders : payload,
            }
        }

        case GET_ORDERS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        }
        
        default : {
            return {...state}
        }
    }
}