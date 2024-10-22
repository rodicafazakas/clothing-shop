import { cartActionTypes } from "./cart.action";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};


const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case cartActionTypes.setCartItems:
      return {
        ...state, 
        ...payload,
      };
    case cartActionTypes.toggleCart:
      return {
        ...state, 
        isCartOpen: payload
      }
    default:
      return state;
  }
};

export default cartReducer;

const updateCartItemsReducer = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity, 0) 
  setCartCount(count);

  const newCartTotal = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price, 0) 
  setCartCount(count);

  dispatch({type: 'SET_CART_ITEMS', payload : {
    cartItems: newCartItems,
    cartCount: newCartCount,
    cartTotal: newCartTotal,
  }})
};

const addItemToCart = (productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  updateCartItemsReducer(newCartItems);
};


const setIsCartOpen = (bool) => {
  dispatch({
    type: 'SET_IS_CART_OPEN',
    payload: bool,
  })
}
