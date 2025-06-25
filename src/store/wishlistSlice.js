import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.unshift(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter((cardId) => cardId !== action.payload);
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;
