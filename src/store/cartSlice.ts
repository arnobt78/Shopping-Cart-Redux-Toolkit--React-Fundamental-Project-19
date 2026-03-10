import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";

interface CartState {
  cartList: Product[];
  total: number;
}

const initialState: CartState = {
  cartList: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Product>) {
      state.cartList.push(action.payload);
      state.total += action.payload.price;
    },
    remove(state, action: PayloadAction<Product>) {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload.id,
      );
      state.total -= action.payload.price;
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
