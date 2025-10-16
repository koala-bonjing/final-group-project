// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/stateLoader";
import venueReducer from "../venueData";
import mealsReducer from "../slices/mealData";
import addonsReducer from "../slices/addonsData";

const preloadedState = loadState(); // Load state on startup

export const store = configureStore({
  reducer: {
    venueData: venueReducer,
    mealsData: mealsReducer,
    addonsData: addonsReducer,
  },
  preloadedState, // Use the loaded state
});

// Save state whenever it changes
store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
