import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./actionTypes";

const initialData={
    users : [],
    isLoading : false,
    isError : false
}

export const reducer = (state = initialData,{type,payload}) => {
    switch(type){
        
        case GET_USERS_REQUEST : {
            return {
                ...state,
                isLoading : true,
            }
        }

        case GET_USERS_SUCCESS: {
            return {
                ...state,
                isLoading : false,
                users : payload.data,
            }
        }

        case GET_USERS_FAILURE : {
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