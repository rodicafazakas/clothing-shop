import { userActionTypes } from "./user.action"; 

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case userActionTypes.setCurrentUser:
      return {
        ...state, 
        currentUser: payload, 
      }
    default:
      return state;
  }
};

export default userReducer;