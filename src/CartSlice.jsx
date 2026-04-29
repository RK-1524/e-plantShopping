import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",

  // Initial state
  initialState: {
    items: []
  },

  reducers: {

    // ✅ ADD ITEM
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1
        });
      }
    },

    // ✅ REMOVE ITEM
    removeItem: (state, action) => {
      const itemName = action.payload;

      state.items = state.items.filter(
        (item) => item.name !== itemName
      );
    },

    // ✅ UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      const item = state.items.find(
        (item) => item.name === name
      );

      if (item) {
        item.quantity = amount;
      }
    }
  }
});

// ✅ Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export reducer
export default CartSlice.reducer;