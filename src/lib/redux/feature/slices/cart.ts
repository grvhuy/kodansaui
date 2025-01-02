import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  friendly_id: string;
  seq_number: number;
  cover_url: string;
  store_id: string;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    incrementQuantity(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    decrementQuantity(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },

    clearCart(state) {
      state.cartItems = [];
    }
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decrementQuantity, incrementQuantity, clearCart } = cartSlice.actions;
