import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.unshift(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;
