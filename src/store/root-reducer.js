import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import categoryReducer from "./categories/category.reducer";
import cartReducer from "./cart/cart.reducer";
import menuReducer from "./menu/menu.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
  cart: cartReducer,
  menu: menuReducer,
});
