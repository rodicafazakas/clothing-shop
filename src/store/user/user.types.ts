export enum UserActionTypes {
  setCurrentUser = "SET_CURRENT_USER",
  checkUserSession = "CHECK_USER_SESSION",
  googleSignInStart = "GOOGLE_SIGN_IN_START",
  emailSignInStart = "EMAIL_SIGN_IN_START",
  signInSuccess = "SIGN_IN_SUCCESS",
  signInFailed = "SIGN_IN_FAILED",
  signUpStart = "SIGN_UP_START",
  signUpSuccess = "SIGN_UP_SUCCESS",
  signUpFailed = "SIGN_UP_FAILED",
  signOutStart = "SIGN_OUT_START",
  signOutSuccess = "SIGN_OUT_SUCCESS",
  signOutFailed = "SIGN_OUT_FAILED",
}

export type User = {
  createdAt: Date;
  displayName: string;
  email: string;
};
