import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export interface RootState {
  cart: CartState;
}

export type AppDispatch = typeof store.dispatch; 