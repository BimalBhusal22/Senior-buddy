import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import wishlistSlice from "./wishlistSlice";
import searchSlice from "./searchSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    wishlist: wishlistSlice.reducer,
    search: searchSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
