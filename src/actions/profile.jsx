import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { setCapital } from '../helpers/setCapitalizedString';

export const getProfileUser = (uid) => {
  return async (dispatch) => {
    const resp = await fetchWithToken(`usuario/id/${uid}`);

    const body = await resp.json();

    console.log(body);

    if (body.ok) {

      let nameUser = setCapital( body.name )

      dispatch(
        setProfileUser({
          uid: body.uid,
          name: nameUser,
          email: body.email
        })
      );
    }
  };
};


const setProfileUser = (user) => ({
  type: types.profileSetUser,
  payload: user
})