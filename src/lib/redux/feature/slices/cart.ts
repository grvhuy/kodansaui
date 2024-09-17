import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  friendly_id: string;
  // rating: number;
  // status: string;
  // description: string;
  // tags: string[];
  // type: string;
  cover_url: string;
  thumbnail_url: string;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [

  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    testAddToPersistedCart(state, action: PayloadAction<CartItem>) {
      state.cartItems.push(action.payload);
    },

    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, testAddToPersistedCart } = cartSlice.actions;
