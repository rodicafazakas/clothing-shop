import { createAction } from "../../utils/reducer/reducer.utils";

export const categoryActionTypes = {
  setCategories: "SET_CATEGORIES",
};

export const setCategories = (categories) => 
  createAction(categoryActionTypes.setCategories, categories);
  
export default categoryActionTypes;