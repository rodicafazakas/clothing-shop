import { createAction } from "../../utils/reducer/reducer.utils";

export const menuActionTypes = {
  toggleMenu: "TOGGLE_MENU",    
};

export const toggleMenu = (boolean) => 
  createAction(menuActionTypes.toggleMenu, boolean);