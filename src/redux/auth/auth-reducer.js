import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const setUser = (_, { payload }) => payload.user;
const setToken = (_, { payload }) => payload.token;
const setPayload = (_, { payload }) => payload;

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: setUser,
  [authActions.loginSuccess]: setUser,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: setPayload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: setToken,
  [authActions.loginSuccess]: setToken,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: setPayload,
  [authActions.loginError]: setPayload,
  [authActions.logoutError]: setPayload,
  [authActions.getCurrentUserError]: setPayload,
});

export default combineReducers({
  user,
  token,
  error,
});
