import { types } from '../types/types';

const initialState = {
    loading: true
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.profileSetUser:
      return {
        ...state,
        ...action.payload,
        loading:false
      };

    default:
      return state;
  }
};
