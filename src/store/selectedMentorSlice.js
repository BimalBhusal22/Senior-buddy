import { createSlice } from "@reduxjs/toolkit";

const selectedMentorSlice = createSlice({
  name: "selectedMentor",
  initialState: {
        mentor: {},
        college: "",
        district: "",
      },
  reducers: {
    setSelectedMentor: (state, action) => {
      return action.payload;
    },
  },
});

export const selectedMentorActions = selectedMentorSlice.actions;

export default selectedMentorSlice;
