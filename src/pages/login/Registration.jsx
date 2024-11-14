import { createSlice } from "@reduxjs/toolkit";

const FIVE_MINUTES = 5 * 60 * 1000;

// Function to load and refresh initial state from local storage if valid
const loadStateFromLocalStorage = () => {
  const savedState = JSON.parse(localStorage.getItem("authState"));
  if (savedState) {
    const currentTime = new Date().getTime();
    const timeGap = currentTime - savedState.inTime;

    // Check if the saved state is within the 5-minute limit
    if (timeGap < FIVE_MINUTES) {
      // Update inTime to current time and save back to local storage
      savedState.inTime = currentTime;
      localStorage.setItem("authState", JSON.stringify(savedState));
      return savedState;
    }
  }
  return {
    isLoggedIn: false,
    userToken: "",
    userName: "",
    inTime: "",
  };
};

const initialState = loadStateFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.userToken = action.payload.token;
      state.userName = action.payload.name;
      state.inTime = new Date().getTime();

      // Save state to local storage upon login
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.userToken = "";
      state.userName = "";
      state.inTime = "";

      // Clear state from local storage on logout
      localStorage.removeItem("authState");
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
