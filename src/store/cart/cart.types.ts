import { Product } from "../categories/category.types";

export enum CartActionTypes {
  setCartItems = "SET_CART_ITEMS",
  toggleCart = "TOGGLE_CART",   
};

export type CartItem = Product & {
  quantity: number;
};