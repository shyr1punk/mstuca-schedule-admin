import { createAction, dispatch } from 'redux';

export const STORE_SPECIALITIES = 'STORE_SPECIALITIES';

export const fetchSpecialities = () => dispatch =>
  fetch('/admin/specialities')
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: STORE_SPECIALITIES,
        data: response
      });
    });
