import { UnknownAction } from "redux";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.action";
import { User } from "./user.types";

export type UserState = {
  readonly currentUser: User | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (
  state = USER_INITIAL_STATE,
  action: UnknownAction
): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signInFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    };
  }

  if (signOutFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    };
  }

  if (signUpFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  return state;
};

export default userReducer;
