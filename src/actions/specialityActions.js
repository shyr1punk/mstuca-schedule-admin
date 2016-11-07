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

/**
 * Вставить группы специальности в коллекцию groups
 *
 * @param {String} specialityId
 *
 * @returns {Object} state
 */
export const insertGroups = specialityId =>
  fetch(`/admin/specialities/${specialityId}/insert`)
    .then(response => response.json())
    .then(
      response => response.result,
      err => err
    );
