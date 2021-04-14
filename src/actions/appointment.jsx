import { fetchWithoutToken } from '../helpers/fetch';
//import Swal from 'sweetalert2';
import { types } from '../types/types';

export const startVerifyDocumentUser = (document) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(`usuario/documento/${document}`);

    const response = await resp.json();

    if (response.ok) {
      dispatch(
        setUser({
          name: response.name,
          email: response.email,
          document: response.document,
          id: response.id,
        })
      );
      console.log('todo ok');
    } else {
      dispatch(setError(response.msg));
    }
  };
};

const setUser = (user) => ({
  type: types.userVerifyDocument,
  payload: user,
});

const setError = (error) => ({
  type: types.userErrorDocument,
  payload: error,
});
