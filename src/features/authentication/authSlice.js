import { createSlice } from "@reduxjs/toolkit";

const FIVE_MINUTES = 5 * 60 * 1000;

// Load initial state from localStorage if session is still valid
const loadStateFromLocalStorage = () => {
  const savedState = JSON.parse(localStorage.getItem("authState"));
  const lastActivityTime = localStorage.getItem("lastActivityTime");

  if (savedState && lastActivityTime) {
    const currentTime = new Date().getTime();
    const timeGap = currentTime - lastActivityTime;

    if (timeGap < FIVE_MINUTES) {
      // Update `inTime` to the latest time
      savedState.inTime = currentTime;
      localStorage.setItem("authState", JSON.stringify(savedState)); // Update saved state
      localStorage.setItem("lastActivityTime", currentTime); // Refresh last activity time
      return savedState;
    }
  }

  // Return default state if session is invalid or expired
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

      // Save login state and time to localStorage
      localStorage.setItem("authState", JSON.stringify(state));
      localStorage.setItem("lastActivityTime", state.inTime);
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.userToken = "";
      state.userName = "";
      state.inTime = "";
      localStorage.removeItem("authState");
      localStorage.removeItem("lastActivityTime");
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
