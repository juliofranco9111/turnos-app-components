import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { setCapital } from '../helpers/setCapitalizedString';
//import Swal from 'sweetalert2';
import { types } from '../types/types';

export const startVerifyDate = (date) => {
  return async (dispatch) => {
    dispatch({ type: types.appointmentStartLoadingVerify });
    const resp = await fetchWithToken(`turnos/${date}`);

    const response = await resp.json();

    dispatch(verifyDate(response));

    if (response.ok) {
      dispatch(setDate(date));
    }
  };
};

const verifyDate = (response) => ({
  type: types.appointmentVerifyDate,
  payload: response,
});

export const clearVerify = () => ({
  type: types.appointmentClearVerify,
});

export const getProfessionals = () => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken('usuario/profesionales');

    const response = await resp.json();

    const { avatar, name, _id: id } = response.professionals[0];

    const professionalName = setCapital(name);

    dispatch(setProfessional({ avatar, name: professionalName, id }));
  };
};

const setProfessional = (professional) => ({
  type: types.appointmentSetProfessional,
  payload: professional,
});

export const setDate = (date) => ({
  type: types.appointmentSetDate,
  payload: date,
});

export const startCreateAppointment = (appointment) => {
  return async (dispatch) => {
    const resp = await fetchWithToken('turnos', appointment, 'POST');

    const response = await resp.json();

    console.log(response);
    if (response.ok) {
      Swal.fire(
        'Éxito',
        response.msg,
        'success'
      );
      dispatch(appointmentCreated());
    }else{
      Swal.fire(
        'Algo salió mal :(',
        response.msg,
        'error'
      );
    }
  };
};

const appointmentCreated = () => ({
  type: types.appointmentClear,
});
