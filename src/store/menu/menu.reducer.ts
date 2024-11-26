import { UnknownAction } from "redux";
import { toggleMenu } from "./menu.action";

export type MenuState = {
  readonly isMenuOpen: boolean;
};

const MENU_INITIAL_STATE: MenuState = {
  isMenuOpen: false,
};

const menuReducer = (
  state = MENU_INITIAL_STATE,
  action: UnknownAction
): MenuState => {
  if (toggleMenu.match(action)) {
    return {
      ...state,
      isMenuOpen: action.payload,
    };
  }

  return state;
};

export default menuReducer;
