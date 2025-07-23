import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: "",
    name: "",
    role: "",
    phoneNo: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
  accessToken: "",
  refreshToken: "",
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: initialState,
  reducers: {
    addUserInfo: (state, action) => {
      let newState = action.payload;
      localStorage.setItem("user", JSON.stringify(newState));
      console.log("userProfileSlice", newState);
      return newState;
    },
    removeUserInfo: (state, action) => {
      localStorage.setItem("user", JSON.stringify(initialState));
      return initialState;
    },
  },
});

export const userProfileActions = userProfileSlice.actions;
export default userProfileSlice;
