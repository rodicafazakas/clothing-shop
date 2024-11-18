// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { categoryActionTypes, Category } from "./category.types";

export type FetchCategoriesStart = Action<categoryActionTypes.fetchCategoriesStart>

export type FetchCategoriesSuccess = ActionWithPayload<categoryActionTypes.fetchCategoriesSuccess, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<categoryActionTypes.fetchCategoriesFailed, Error>

export type CategoryAction = 
  | FetchCategoriesStart 
  | FetchCategoriesSuccess
  | FetchCategoriesFailed

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart => 
    createAction(categoryActionTypes.fetchCategoriesStart)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess => 
    createAction(categoryActionTypes.fetchCategoriesSuccess, categoriesArray)
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed => 
    createAction(categoryActionTypes.fetchCategoriesFailed, error)
);


// category thunk
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments('categories');
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// };