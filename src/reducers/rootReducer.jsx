import { combineReducers } from 'redux';
import { appointmentReducer } from './appointmentReducer';
import { profileReducer } from './profileReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  appointment: appointmentReducer,
  profile: profileReducer
});

