import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const store = configureStore({
  reducer: { 
    cards: cardsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
   },
});

export default store;
