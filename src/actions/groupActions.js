import { createAction } from 'redux';

export const STORE_GROUPS = 'STORE_GROUPS';

/**
 * Загрузка групп
 *
 * @returns {Object} state
 */
export const fetchGroups = dispatch =>
  fetch('/admin/groups')
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: STORE_GROUPS,
        data: response
      });
    });
