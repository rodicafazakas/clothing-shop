import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case actionTypes.setCurrentUser:
      return {
        ...state, 
        currentUser: payload, 
      }
    default:
      return state;
  }
};

export default userReducer;