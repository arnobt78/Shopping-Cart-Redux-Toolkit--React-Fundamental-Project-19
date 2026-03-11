import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

// Single Redux store instance for the app.
export const store = configureStore({
  reducer: {
    // Cart feature state is available at state.cartState.
    cartState: cartReducer,
  },
});

// RootState and AppDispatch keep selectors/dispatch strongly typed.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
