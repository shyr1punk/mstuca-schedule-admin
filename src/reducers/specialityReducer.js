import { STORE_SPECIALITIES, fetchSpecialities } from '../actions/specialityActions';

export default (state = {
  specialities: []
}, action) => {
  switch(action.type) {
  case STORE_SPECIALITIES:
    return {
      ...state,
      specialities: action.data
    };
  default:
    return state;
  }
}
