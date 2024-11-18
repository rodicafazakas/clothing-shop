import { createAction } from "../../utils/reducer/reducer.utils.ts";

export const cartActionTypes = {
  setCartItems: "SET_CART_ITEMS",
  toggleCart: "TOGGLE_CART",   
};

export const toggleCart = (boolean) => 
  createAction(cartActionTypes.toggleCart, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(cartActionTypes.setCartItems, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(cartActionTypes.setCartItems, newCartItems);
};

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(cartActionTypes.setCartItems, newCartItems);
};

// Helper functions
const addCartItem = (cartItems, productToAdd) => {
  const cartItemExists = cartItems.find(cartItem => 
    cartItem.id === productToAdd.id
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

const removeCartItem = (cartItems, productToRemove) => {
  const cartItemToRemove = cartItems.find(cartItem => 
    cartItem.id === productToRemove.id
  );

  let newCartItems = [];
  if(cartItemToRemove.quantity === 1) {
    newCartItems = cartItems.filter( cartItem => cartItem.id !== productToRemove.id);
  } else {
    newCartItems = cartItems.map( cartItem => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem );
  }
  return newCartItems;
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter( cartItem => cartItem.id !== productToClear.id);
};
