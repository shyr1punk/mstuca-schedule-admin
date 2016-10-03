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

/**
 * Обновление группы
 *
 *
 *
 * @returns {Object} state
 */
export const updateGroup = (groupId) =>
  fetch(`/admin/groups/${groupId}/update`)
    .then(response => response.json())
    .then(
      response => response.result,
      err => err
    );
