import { createAction } from "../../utils/reducer/reducer.utils";

export const userActionTypes = {
  setCurrentUser: "SET_CURRENT_USER",
};

export const setCurrentUser = (user) => 
  createAction(userActionTypes.setCurrentUser, user);