// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CategoryActionTypes, Category } from "./category.types";

// The only 3 action types the category reducer is going to respond to
export type FetchCategoriesStart =
  Action<CategoryActionTypes.fetchCategoriesStart>;
export type FetchCategoriesSuccess = ActionWithPayload<
  CategoryActionTypes.fetchCategoriesSuccess,
  Category[]
>;
export type FetchCategoriesFailed = ActionWithPayload<
  CategoryActionTypes.fetchCategoriesFailed,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CategoryActionTypes.fetchCategoriesStart)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(CategoryActionTypes.fetchCategoriesSuccess, categoriesArray)
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CategoryActionTypes.fetchCategoriesFailed, error)
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
