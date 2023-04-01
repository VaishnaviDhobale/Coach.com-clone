import { REQUEST_FAILURE,REQUEST_PENDING, GET_REQUEST_SUCCESS, GET_REQUEST_SUCCESS_SIDE, CLEAR_FILTERS } from "./actionTypes";


const initialData = {
    sidebarData : [],
    womensData : [],
    totalData : 0,
    isLoading : false,
    isError : false
}

export const reducer = (state = initialData,{type,payload}) => {
    switch(type){
        
        case REQUEST_PENDING : {
            return {
                ...state,
                isLoading : true
            }
        }

        case GET_REQUEST_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                womensData : payload.data,
                totalData : payload.totalData
            }
        }

        case GET_REQUEST_SUCCESS_SIDE : {
            return {
                ...state,
                isLoading : false,
                sidebarData : payload
            }
        }

        case REQUEST_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case CLEAR_FILTERS : {
            return {
                ...state
            }
        }

        default : {
            return {...state}
        }
    }
}