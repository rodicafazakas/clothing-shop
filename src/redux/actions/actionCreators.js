import actionTypes from "./actionTypes";

export const setCategoriesMap = (categoriesMap) => ({
  type: actionTypes.setCategoriesMap,
  payload: categoriesMap,
});

export const setCartItems = ({cartItems, cartCount, cartTotal}) => ({
  type: actionTypes.setCartItems,
  payload: {cartItems, cartCount, cartTotal},
});

export const toggleCart = (bool) => ({
  type: actionTypes.toggleCart,
  paymoad: bool,
});

export const setCurrentUser = (user) => ({
  type: actionTypes.setCurrentUser,
  payload: user,
});