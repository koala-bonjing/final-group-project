import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Meal {
  name: string;
  pricePerPerson: number;
  selected: boolean;
}

interface MealsState {
  meals: Meal[];
  people: number;
}

const initialState: MealsState = {
  people: 0,
  meals: [
    { name: "Buffet Lunch", pricePerPerson: 250, selected: false },
    { name: "Cocktail Dinner", pricePerPerson: 350, selected: false },
    { name: "Snacks & Beverages", pricePerPerson: 100, selected: false },
    { name: "Full-course Meal", pricePerPerson: 500, selected: false },
  ],
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<number>) => {
      state.people = action.payload;
    },
    toggleMeal: (state, action: PayloadAction<number>) => {
      state.meals[action.payload].selected =
        !state.meals[action.payload].selected;
    },
    resetMeals: (state) => {
      state.meals.forEach((m) => (m.selected = false));
      state.people = 0;
    },
  },
});

export const { setPeople, toggleMeal, resetMeals } = mealsSlice.actions;
export default mealsSlice.reducer;
