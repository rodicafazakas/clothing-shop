import { UnknownAction } from "redux";
import { TCartItem } from "./cart.types";
import { toggleCart, setCartItems } from "./cart.action";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: TCartItem[];
};

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

const cartReducer = (
  state = CART_INITIAL_STATE,
  action: UnknownAction
): CartState => {
  if (toggleCart.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};

export default cartReducer;
