import { createAction } from "../../utils/reducer/reducer.utils";

export const productsActionTypes = {
  loadProducts: 'LOAD_PRODUCTS',
};

export const loadProducts = (products) => createAction(productsActionTypes.loadProducts, products);
