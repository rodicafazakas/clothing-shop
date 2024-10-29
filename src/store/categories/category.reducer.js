import { categoryActionTypes } from "./category.action";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoryReducer = (state=INITIAL_STATE, action={}) => {
  const { type, payload } = action;

  switch(type) {
    case categoryActionTypes.fetchCategoriesStart:
      return {
        ...state,
        isLoading: true
      }
    case categoryActionTypes.fetchCategoriesSuccess:
      return {
        ...state, 
        categories: payload, 
        isLoading: false,
      };
    case categoryActionTypes.fetchCategoriesFailed:
      return {
        ...state,
        error: payload, 
        isLoading: false,
      }
    default:
      return state;
  }
};

export default categoryReducer;