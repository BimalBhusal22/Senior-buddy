import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import wishlistSlice from "./wishlistSlice";
import searchSlice from "./searchSlice";
import filterSlice from "./filterSlice";
import selectedMentorSlice from "./selectedMentorSlice";
import userProfileSlice from "./userProfileSlice";

const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    wishlist: wishlistSlice.reducer,
    search: searchSlice.reducer,
    filter: filterSlice.reducer,
    selectedMentor: selectedMentorSlice.reducer,
    userProfile: userProfileSlice.reducer,
  },
});

export default store;
