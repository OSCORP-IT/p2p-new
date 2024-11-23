import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../src/features/authentication/authSlice";

const useAutoLogout = (timeout = 20 * 60 * 1000) => {
  const dispatch = useDispatch();

  // Reset timer and update last activity time in localStorage
  const resetTimer = useCallback(() => {
    const currentTime = new Date().getTime();
    localStorage.setItem("lastActivityTime", currentTime); // Save the last activity time

    // Clear existing timer and set a new one
    clearTimeout(window.inactivityTimer);
    window.inactivityTimer = setTimeout(() => {
      dispatch(logOut());
    }, timeout);
  }, [dispatch, timeout]);

  useEffect(() => {
    // Events that should reset the timer
    const events = ["mousemove", "keydown", "mousedown", "touchstart"];

    // Attach event listeners
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Start the timer when the component mounts
    resetTimer();

    // Clean up event listeners and timer on component unmount
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(window.inactivityTimer);
    };
  }, [resetTimer]);
};

export default useAutoLogout;
