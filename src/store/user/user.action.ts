import {
  UserData,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { UserActionTypes } from "./user.types";

// The only action types the user reducer is going o respond to
export type SetCurrentUser = ActionWithPayload<
  UserActionTypes.setCurrentUser,
  UserData
>;
export type CheckUserSession = Action<UserActionTypes.checkUserSession>;
export type GoogleSignInStart = Action<UserActionTypes.googleSignInStart>;
export type EmailSignInStart = ActionWithPayload<
  UserActionTypes.emailSignInStart,
  { email: string; password: string }
>;
export type SignInSuccess = ActionWithPayload<
  UserActionTypes.signInSuccess,
  UserData
>;
export type SignInFailed = ActionWithPayload<
  UserActionTypes.signInFailed,
  Error
>;
export type SignUpStart = ActionWithPayload<
  UserActionTypes.signUpStart,
  { email: string; password: string; displayName: string }
>;
export type SignUpSuccess = ActionWithPayload<
  UserActionTypes.signUpSuccess,
  { user: UserData; additionalDetails: AdditionalInformation }
>;
export type SignUpFailed = ActionWithPayload<
  UserActionTypes.signUpFailed,
  Error
>;
export type SignOutStart = Action<UserActionTypes.signOutStart>;
export type SignOutSuccess = Action<UserActionTypes.signOutSuccess>;
export type SignOutFailed = ActionWithPayload<
  UserActionTypes.signOutFailed,
  Error
>;

// User Actions
export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(UserActionTypes.setCurrentUser, user)
);

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(UserActionTypes.checkUserSession)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(UserActionTypes.googleSignInStart)
);

export const emailSignInStart = withMatcher((email: string, password: string) =>
  createAction(UserActionTypes.emailSignInStart, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData): SignInSuccess =>
    createAction(UserActionTypes.signInSuccess, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(UserActionTypes.signInFailed, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(UserActionTypes.signUpStart, { email, password, displayName })
);

export const signUpSuccess = withMatcher(
  (user: UserData, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(UserActionTypes.signUpSuccess, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(UserActionTypes.signUpFailed, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(UserActionTypes.signOutStart)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(UserActionTypes.signOutSuccess)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(UserActionTypes.signOutFailed, error)
);
