import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardSlice";

const store = configureStore({
  reducer: { cards: cardsSlice.reducer },
});

export default store;
