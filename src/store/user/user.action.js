import { createAction } from "../../utils/reducer/reducer.utils";

export const userActionTypes = {
  setCurrentUser: "SET_CURRENT_USER",
  checkUserSession: "CHECK_USER_SESSION", 
  googleSignInStart: "GOOGLE_SIGN_IN_START", 
  emailSignInStart: "EMAIL_SIGN_IN_START",
  signInSuccess: "SIGN_IN_SUCCESS",
  signInFailed: "SIGN_IN_FAILED", 
  signUpStart: "SIGN_UP_START",
  signUpSuccess: "SIGN_UP_SUCCESS",
  signUpFailed: "SIGN_UP_FAILED",
  signOutStart: "SIGN_OUT_START",
  signOutSuccess: "SIGN_OUT_SUCCESS",
  signOutFailed: "SIGN_OUT_FAILED", 
};

export const setCurrentUser = (user) => 
  createAction(userActionTypes.setCurrentUser, user);

export const checkUserSession = () => createAction(userActionTypes.checkUserSession);

export const googleSignInStart = () => createAction(userActionTypes.googleSignInStart);

export const emailSignInStart = (email, password) => 
  createAction(userActionTypes.emailSignInStart, {email, password});

export const signInSuccess = (user) => createAction(userActionTypes.signInSuccess, user);

export const signInFailed = (error) => createAction(userActionTypes.signInFailed, error);

export const signUpStart = (email, password, displayName) => 
  createAction(userActionTypes.signUpStart, {email, password, displayName});

export const signUpSuccess = (user, additionalDetails) => 
  createAction(userActionTypes.signUpSuccess, {user, additionalDetails});

export const signUpFailed = (error) => createAction(userActionTypes.signUpFailed, error);

export const signOutStart = () => createAction(userActionTypes.signOutStart);

export const signOutSuccess = () => createAction(userActionTypes.signOutSuccess);

export const signOutFailed = (error) => createAction(userActionTypes.signOutFailed, error);