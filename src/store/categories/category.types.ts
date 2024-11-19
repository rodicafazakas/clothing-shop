export enum CategoryActionTypes {
  fetchCategoriesStart = 'FETCH_CATEGORIES_START',
  fetchCategoriesSuccess = 'FETCH_CATEGORIES_SUCCESS',
  fetchCategoriesFailed = 'FETCH_CATEGORIES_FAILED',
}

export type Product = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: Product[];
} 

export type CategoryMap = {
  [key: string]: Product[];
}