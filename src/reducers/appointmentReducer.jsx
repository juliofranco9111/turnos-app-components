import { types } from '../types/types';

const intialState = {
    error: false,
}

export const appointmentReducer = ( state = intialState, action ) => {

    switch (action.type) {
        case types.userVerifyDocument:
            return {
                ...state,
                error: null,
                userActive: action.payload
            }

            case types.userErrorDocument:
                return{
                    ...state,
                    error: action.payload,
                    userActive: null
                } 
            
            
    
        default:
            return state;
    }
  
}