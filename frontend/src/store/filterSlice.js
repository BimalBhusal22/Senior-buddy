import { createSlice } from "@reduxjs/toolkit";

export let selectedDiscipline;
export let selectedDistrict;
export let selectedLevel;

let stateCopy;
let filteredCards;

const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    addInitialCards: (state, action) => {
      stateCopy = action.payload;
      return action.payload;
    },
    applyDisciplineFilter: (state, action) => {
      // console.log(action.payload);
      selectedDiscipline = action.payload;

      if (selectedDiscipline) {
        filteredCards = stateCopy.filter((item) =>
          // console.log(item.collegeFaculties)
          item.collegeFaculties.includes(selectedDiscipline)
        );
      }

      if (selectedDistrict) {
        filteredCards = filteredCards.filter(
          (item) => item.collegeDistrict === selectedDistrict
        );
        // console.log("applyDisciplineFilter", filteredCards);
      }

      if (selectedLevel) {
        filteredCards = filteredCards.filter((item) =>
          item.collegeLevels.includes(selectedLevel)
        );
      }

      const bimal = "bimal"; //If I remove a line anything like this then the return value is empty array.
      // console.log("applyDisciplineFilter", filteredCards);
      return filteredCards;
    },
    applyDistrictFilter: (state, action) => {
      selectedDistrict = action.payload;

      if (selectedDistrict) {
        filteredCards = stateCopy.filter(
          (item) => item.collegeDistrict === selectedDistrict
        );
      }
      if (selectedDiscipline) {
        filteredCards = filteredCards.filter((item) =>
          item.collegeFaculties.includes(selectedDiscipline)
        );
      }

      if (selectedLevel) {
        filteredCards = filteredCards.filter((item) =>
          item.collegeLevels.includes(selectedLevel)
        );
      }

      const bimal = "bimal"; //If I remove a line anything like this then the return value is empty array.
      // console.log("applyDistrictFilter", filteredCards);
      return filteredCards;
    },
    applyLevelFilter: (state, action) => {
      // console.log("applyLevelFilter action.payload :",action.payload)
      selectedLevel = action.payload;

      if (selectedLevel) {
        filteredCards = stateCopy.filter((item) =>
          // console.log("applyLevelFilter item.collegeLevels", item.collegeLevels)
          item.collegeLevels.includes(selectedLevel)
        );
      }
      console.log(filteredCards);
      if (selectedDiscipline) {
        filteredCards = filteredCards.filter((item) =>
          item.collegeFaculties.includes(selectedDiscipline)
        );
      }
      // console.log(filteredCards);
      if (selectedDistrict) {
        filteredCards = filteredCards.filter(
          (item) => item.collegeDistrict === selectedDistrict
        );
      }
      // console.log("applyLevelFilter", filteredCards);
      const bimal = "bimal"; //If I remove a line anything like this then the return value is empty array.
      return filteredCards;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
