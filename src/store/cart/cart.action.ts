import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { Product } from "../categories/category.types";
import { CartActionTypes, CartItem } from "./cart.types";

// Helper functions
const addCartItem = (
  cartItems: CartItem[], 
  productToAdd: Product
): CartItem[] => {
  const cartItemExists = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );
  
  let newCartItems = [];
  if (!cartItemExists) {
    newCartItems = [...cartItems, {...productToAdd, quantity: 1}]
  } else {
    newCartItems = cartItems.map(cartItem => 
      cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
  }

  return newCartItems;
};

const removeCartItem = (
  cartItems: CartItem[], 
  cartItemToRemove: CartItem
): CartItem[] => {
  const cartItemToRemoveExists = cartItems.find(cartItem => 
    cartItem.id === cartItemToRemove.id
  );

  let newCartItems = [];
  if(cartItemToRemoveExists?.quantity === 1) {
    newCartItems = cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id);
  } else {
    newCartItems = cartItems.map( cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem );
  }
  return newCartItems;
};

const clearCartItem = (
  cartItems: CartItem[], 
  cartItemToClear: Product
): CartItem[] => {
  return cartItems.filter( cartItem => cartItem.id !== cartItemToClear.id);
};


export type ToggleCart = ActionWithPayload<CartActionTypes.toggleCart, boolean>;
export type SetCartItems = ActionWithPayload<CartActionTypes.setCartItems, CartItem[]>;

export const toggleCart = withMatcher(
  (boolean: boolean): ToggleCart => 
    createAction(CartActionTypes.toggleCart, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems => 
    createAction(CartActionTypes.setCartItems, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[], 
  productToAdd: Product
): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
}

export const removeItemFromCart = (
  cartItems: CartItem[], 
  cartItemToRemove: CartItem
): SetCartItems => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[], 
  cartItemToClear: Product
): SetCartItems => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};