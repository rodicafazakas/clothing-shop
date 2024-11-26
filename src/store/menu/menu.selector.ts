import { createSelector } from "reselect";
import { MenuState } from "./menu.reducer";
import { RootState } from "../store";

export const selectMenuReducer = (state: RootState): MenuState => state.menu;

export const selectIsMenuOpen = createSelector(
  [selectMenuReducer],
  (menu) => menu.isMenuOpen
);
