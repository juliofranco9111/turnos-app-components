import { types } from '../types/types';

const initialState = {
    loading: true
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userSetUser:
      return {
        ...state,
        ...action.payload,
        loading:false
      };
    case types.userClearUser:
      return {
        loading:false
      };

    default:
      return state;
  }
};