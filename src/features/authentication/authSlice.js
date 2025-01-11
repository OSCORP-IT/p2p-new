// import { createSlice } from "@reduxjs/toolkit";

// const FIVE_MINUTES = 5 * 60 * 1000;

// // Load initial state from localStorage if session is still valid
// const loadStateFromLocalStorage = () => {
//   const savedState = JSON.parse(localStorage.getItem("authState"));
//   const lastActivityTime = localStorage.getItem("lastActivityTime");

//   if (savedState && lastActivityTime) {
//     const currentTime = new Date().getTime();
//     const timeGap = currentTime - lastActivityTime;

//     if (timeGap < FIVE_MINUTES) {
//       // Update `inTime` to the latest time
//       savedState.inTime = currentTime;
//       localStorage.setItem("authState", JSON.stringify(savedState)); // Update saved state
//       localStorage.setItem("lastActivityTime", currentTime); // Refresh last activity time
//       return savedState;
//     }
//   }

//   // Return default state if session is invalid or expired
//   return {
//     isLoggedIn: false,
//     accountAs: "loan",
//     userToken: "",
//     userName: "",
//     inTime: "",
//     profileImage: "",
//   };
// };

// const initialState = loadStateFromLocalStorage();

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logIn: (state, action) => {
//       state.isLoggedIn = true;
//       state.userToken = action.payload.token;
//       state.userName = action.payload.name;
//       state.profileImage = action.payload.profileImage;
//       state.inTime = new Date().getTime();

//       // Save login state and time to localStorage
//       localStorage.setItem("authState", JSON.stringify(state));
//       localStorage.setItem("lastActivityTime", state.inTime);
//     },
//     profileImageChange: (state, action) => {
//       state.profileImage = action.payload;
//       state.inTime = new Date().getTime();
//       localStorage.setItem("authState", JSON.stringify(state));
//       localStorage.setItem("lastActivityTime", state.inTime);
//     },
//     logOut: (state) => {
//       state.isLoggedIn = false;
//       state.userToken = "";
//       state.accountAs = "";
//       state.userName = "";
//       state.inTime = "";
//       localStorage.removeItem("authState");
//       localStorage.removeItem("lastActivityTime");
//     },
//   },
// });

// export const { logIn, logOut, profileImageChange } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const FIVE_MINUTES = 5 * 60 * 1000;

// Load initial state from cookies if session is still valid
const loadStateFromCookies = () => {
  const savedState = Cookies.get("authState")
    ? JSON.parse(Cookies.get("authState"))
    : null;
  const lastActivityTime = Cookies.get("lastActivityTime");

  if (savedState && lastActivityTime) {
    const currentTime = new Date().getTime();
    const timeGap = currentTime - parseInt(lastActivityTime, 10);

    if (timeGap < FIVE_MINUTES) {
      // Update `inTime` to the latest time
      savedState.inTime = currentTime;
      Cookies.set("authState", JSON.stringify(savedState), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("lastActivityTime", currentTime, {
        secure: true,
        sameSite: "Strict",
      });
      return savedState;
    }
  }

  // Return default state if session is invalid or expired
  return {
    isLoggedIn: false,
    accountAs: "loan",
    userToken: "",
    userName: "",
    inTime: "",
    profileImage: "",
  };
};

const initialState = loadStateFromCookies();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.userToken = action.payload.token;
      state.userName = action.payload.name;
      state.profileImage = action.payload.profileImage;
      state.inTime = new Date().getTime();

      // Save login state and time to cookies
      Cookies.set("authState", JSON.stringify(state), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("lastActivityTime", state.inTime, {
        secure: true,
        sameSite: "Strict",
      });
    },
    profileImageChange: (state, action) => {
      state.profileImage = action.payload;
      state.inTime = new Date().getTime();

      // Update cookies with the new profile image and time
      Cookies.set("authState", JSON.stringify(state), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("lastActivityTime", state.inTime, {
        secure: true,
        sameSite: "Strict",
      });
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.userToken = "";
      state.accountAs = "";
      state.userName = "";
      state.inTime = "";

      // Remove cookies
      Cookies.remove("authState");
      Cookies.remove("lastActivityTime");
    },
  },
});

export const { logIn, logOut, profileImageChange } = authSlice.actions;
export default authSlice.reducer;
