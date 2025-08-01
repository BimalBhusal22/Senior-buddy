import { createSlice } from "@reduxjs/toolkit";

let stateCopy;

const searchSlice = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    addInitialCards: (state, action) => {
      stateCopy = action.payload;
      return action.payload;
    },
    showSearchedCard: (state, action) => {
      const searchedCard = JSON.parse(JSON.stringify(stateCopy)).filter(
        (item) => item.collegeName === action.payload
      );
      const bimal = "bimal"; //If I remove a line anything like this then the return value is empty array.
      return searchedCard;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
