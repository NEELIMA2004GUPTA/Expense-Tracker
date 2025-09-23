import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transactionSlice";
import authReducer from "./authSlice";  
import { loadState, saveState } from "./localStorage";

// Load persisted state
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    auth: authReducer,   
  },
  preloadedState: persistedState, // Load initial state from localStorage
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState({
    transactions: store.getState().transactions,
    auth: store.getState().auth,   
  });
});

export default store;
