import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { MenuActionTypes } from "./menu.types";

export type ToggleMenu = ActionWithPayload<MenuActionTypes.toggleMenu, boolean>;

export const toggleMenu = withMatcher(
  (boolean: boolean): ToggleMenu =>
    createAction(MenuActionTypes.toggleMenu, boolean)
);
