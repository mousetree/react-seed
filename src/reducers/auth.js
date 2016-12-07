import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  profile: JSON.parse(localStorage.getItem('profile'))
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        token: action.token
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        profile: null,
        token: null
      };
    default:
      return state
  }
}