import { createSelector } from "reselect";
import { MenuState } from "./menu.reducer";

export const selectMenuReducer = (state): MenuState => state.menu;

export const selectIsMenuOpen = createSelector(
  [selectMenuReducer],
  (menu) => menu.isMenuOpen
);
