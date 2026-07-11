import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
      state.totalQuantity++;
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.totalQuantity--;
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    }
  },
});

export const { addItemToCart, removeItemFromCart, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
