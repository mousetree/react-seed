import Auth0Lock from 'auth0-lock';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// TODO move to config
const domainId = 'admm.auth0.com';
const clientId = 'gC5yMGZes8GLXcjgeYlu1LD2YNpBd2JP'
const lock = new Auth0Lock(clientId, domainId);

export function login() {
  // display lock widget
  return dispatch => {
    dispatch(loginRequest());
    lock.show();
  }
}

export function logout() {
  return dispatch => {
    dispatch(logoutRequest());
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    dispatch(logoutSuccess());
  };
}

export function doAuthentication() {
  return dispatch => {
    lock.on("authenticated", function(authResult) {
      const token = authResult.idToken;
      localStorage.setItem('token', token);
      lock.getProfile(token, function(error, profile) {
        if (error) return dispatch(loginError(error));
        localStorage.setItem('profile', JSON.stringify(profile));
        return dispatch(loginSuccess(profile, token))
      });
    });
  }
}

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}

function loginSuccess(profile, token) {
  return {
    type: LOGIN_SUCCESS,
    profile,
    token
  };
}

function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}