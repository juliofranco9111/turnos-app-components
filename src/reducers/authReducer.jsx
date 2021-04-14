import { types } from '../types/types';

const initialState = {
  checking: true
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        checking: false,
        ...action.payload,
        ...state,
      };

    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

    case types.authLogout:
      return {
        checking: false,
      };

    default:
      return state;
  }
};
