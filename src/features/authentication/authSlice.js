import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  userToken: "",
  inTime: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      console.log(action.payload);
      state.isLoggedIn = true;
      state.userToken = action.payload;
      state.inTime = new Date().getTime();
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.userToken = "";
      state.inTime = "";
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
