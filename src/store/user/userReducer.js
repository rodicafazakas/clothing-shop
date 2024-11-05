import { userActionTypes } from "./user.action"; 

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state=INITIAL_STATE, action={}) => {
  const { type, payload } = action;

  switch(type) {
    case userActionTypes.signInSuccess:
      return {
        ...state, 
        currentUser: payload, 
      };
    case userActionTypes.signInFailed:
    case userActionTypes.signUpFailed:
    case userActionTypes.signOutFailed:
      return {
        ...state, 
        error: payload,
      };
    case userActionTypes.signOutSuccess:
      return {
        ...state,
        currentUser: null,
      }  
    default:
      return state;
  }
};

export default userReducer;