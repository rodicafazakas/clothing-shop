import { menuActionTypes } from "./menu.action";

const INITIAL_STATE =  {
  isMenuOpen: false,    
};

const menuReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case menuActionTypes.toggleMenu:
      return {
        ...state,
        isMenuOpen: payload
      }
    default:
      return state;
  }
};

export default menuReducer;

