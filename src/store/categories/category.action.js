import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";

export const categoryActionTypes = {
  fetchCategoriesStart: 'FETCH_CATEGORIES_START',
  fetchCategoriesSuccess: 'FETCH_CATEGORIES_SUCCESS',
  fetchCategoriesFailed: 'FETCH_CATEGORIES_FAILED',
};

export const fetchCategoriesStart = () => 
  createAction(categoryActionTypes.fetchCategoriesStart);

export const fetchCategoriesSuccess = (categories) => 
  createAction(categoryActionTypes.fetchCategoriesSuccess, categories);

export const fetchCategoriesFailed = (error) => 
  createAction(categoryActionTypes.fetchCategoriesFailed, error);

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