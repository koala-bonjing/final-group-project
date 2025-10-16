import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Venue {
  name: string;
  capacity: number;
  price: number;
  image: string;
  quantity: number;
}

interface VenueState {
  venue: Venue[];
}

const initialState: VenueState = {
  venue: [
    {
      name: "Conference Room",
      capacity: 15,
      price: 3500,
      image:
        "https://www.coexcenter.com/wp-content/uploads/2018/11/venue-auditorium-1.jpg",
      quantity: 0,
    },
    {
      name: "Presentation Room",
      capacity: 50,
      price: 700,
      image:
        "https://en.idei.club/uploads/posts/2023-08/1690954879_en-idei-club-p-office-conference-room-design-dizain-krasi-85.jpg",
      quantity: 0,
    },
    {
      name: "Large Meeting Room",
      capacity: 10,
      price: 900,
      image:
        "https://i.pinimg.com/originals/8d/c0/6e/8dc06e02a176fbb2366d50d7f14ddce2.jpg",
      quantity: 0,
    },
    {
      name: "Small Meeting Room",
      capacity: 5,
      price: 1100,
      image:
        "https://i.pinimg.com/originals/44/35/32/443532781a611f4f08dd7aee555f935e.jpg",
      quantity: 0,
    },
  ],
};

const VenueSlice = createSlice({
  name: "venueData",
  initialState,
  reducers: {
    incrementVenue: (state, action: PayloadAction<number>) => {
      state.venue[action.payload].quantity += 1;
    },
    decrementVenue: (state, action: PayloadAction<number>) => {
      if (state.venue[action.payload].quantity > 0) {
        state.venue[action.payload].quantity -= 1;
      }
    },
    resetAll: (state) => {
      state.venue.forEach((v) => (v.quantity = 0));
    },
  },
});

// ✅ Exports
export const { incrementVenue, decrementVenue, resetAll } = VenueSlice.actions;
export default VenueSlice.reducer;
