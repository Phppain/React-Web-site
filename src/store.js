import { configureStore } from "@reduxjs/toolkit";
import authReducer from './feauters/auth/authSlice.js'
import cartReducer from './feauters/cart/cartSlice.js'
import catalogReducer from './feauters/catalog/catalogSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    catalog: catalogReducer,
  },
});