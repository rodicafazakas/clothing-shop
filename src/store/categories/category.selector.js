import { createSelector } from "reselect"; // for selector memoization 

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer], // input selectors
  (categoriesSlice) => categoriesSlice.categories, // output selectors
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {}),
); 

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
);