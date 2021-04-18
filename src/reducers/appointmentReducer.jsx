import { types } from '../types/types';

const intialState = {
  verify: { loading: false },
};

export const appointmentReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.appointmentStartLoadingVerify:
      return {
        ...state,
        verify: { loading: true },
      };

    case types.appointmentVerifyDate:
      return {
        ...state,

        verify: {
          ...action.payload,
          loading: false,
        },
      };
    case types.appointmentClearVerify:
      return {
        verify: { loading: false },
      };

    case types.appointmentSetProfessional:
      return {
        ...state,
        professional: action.payload,
      };
    case types.appointmentSetDate:
      return {
        ...state,
        date: action.payload,
      };
    case types.appointmentClear:
      return {
        verify: { loading: false }
      };

    default:
      return state;
  }
};
