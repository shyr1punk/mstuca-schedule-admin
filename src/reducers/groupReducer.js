import { STORE_GROUPS, fetchGroups } from '../actions/groupActions';

export default (state = {
  groups: []
}, action) => {
  switch(action.type) {
  case STORE_GROUPS:
    return {
      ...state,
      groups: action.data
    };
  default:
    return state;
  }
}
