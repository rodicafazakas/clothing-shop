import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
// import productsReducer from "./productsReducer";
// import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  // products: productsReducer,
  // cart: cartReducer
});

export default rootReducer;