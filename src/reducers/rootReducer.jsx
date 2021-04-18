import { combineReducers } from 'redux';
import { appointmentReducer } from './appointmentReducer';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  appointment: appointmentReducer,
  user: userReducer
});

