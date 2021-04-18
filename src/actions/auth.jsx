import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { clearUser } from './user';
import Swal from 'sweetalert2';

// Cheking if logged
export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken('auth/renew');

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
        })
      );
    }

    dispatch(checkingFinish());
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

//Register
export const startRegister = ({
  email,
  password,
  role,
  fName,
  lName,
  specialty = '',
}) => {
  const name = `${fName} ${lName}`;

  const endpoint =
    role === 'PROFESSIONAL_ROLE' ? 'auth/new-professional' : 'auth/new-user';
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      endpoint,
      { name, email, password, role, specialty },
      'POST'
    );

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      console.log('login');

      dispatch(
        login({
          uid: body.uid,
        })
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('auth', { email, password }, 'POST');

    const body = await resp.json();

    console.log(body);

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      console.log(body.uid);
      dispatch(
        login({
          uid: body.uid,
        })
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
    dispatch(clearUser());
  };
};

const logout = () => ({ type: types.authLogout });
