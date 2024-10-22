import { categoryActionTypes } from "./category.action";

const INITIAL_STATE = {
  categories: [],
};

const categoryReducer = (state=INITIAL_STATE, action={}) => {
  const { type, payload } = action;

  switch(type) {
    case categoryActionTypes.setCategories:
      return {
        ...state, 
        categories: payload
      };
    default:
      return state;
  }
};

export default categoryReducer;