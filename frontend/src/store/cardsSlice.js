import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    addInitialCards: (state, action) => {
      return action.payload;
    },
    showSearchedCard: (state, action) => {
      const searchedCard = JSON.parse(JSON.stringify(state)).filter(
        (item) => item.clzInfo.name === action.payload
      );
      const bimal = "bimal"; //If I remove a line anything like this then the return value is empty array.
      return searchedCard;
    },
  },
});

export const cardsActions = cardsSlice.actions;
export default cardsSlice;
