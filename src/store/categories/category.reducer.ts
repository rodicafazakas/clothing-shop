import { Category } from "./category.types";
import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from "./category.action";
import { UnknownAction } from "redux";

export type CategoriesState = {
  readonly categories: Category[]; 
  readonly isLoading: boolean;
  readonly error: Error | null;
}

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE, 
  action = {} as UnknownAction,
): CategoriesState => {

  if(fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if(fetchCategoriesSuccess.match(action)) {
    return {
      ...state, 
      categories: action.payload, 
      isLoading: false,
    };
  }

  if(fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      error: action.payload, 
      isLoading: false,
    };
  }

  return state;
};

export default categoryReducer;