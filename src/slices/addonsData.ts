import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AddOns {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface AddOnsState {
  addons: AddOns[];
}

const initialState: AddOnsState = {
  addons: [
    {
      name: "Speakers",
      price: 35,
      image: "https://d3fa68hw0m2vcc.cloudfront.net/6b4/202174908.jpeg",
      quantity: 0,
    },
    {
      name: "Microphones",
      price: 45,
      image:
        "https://images.pexels.com/photos/907823/pexels-photo-907823.jpeg?cs=srgb&dl=bokeh-mic-microphone-907823.jpg&fm=jpg",
      quantity: 0,
    },
    {
      name: "Whiteboards",
      price: 80,
      image:
        "https://www.pngall.com/wp-content/uploads/10/Whiteboard-Transparent-Image.png",
      quantity: 0,
    },
    {
      name: "Projectors",
      price: 200,
      image:
        "https://media.wired.com/photos/629feede5da297afa9ff5e6f/4:3/w_2400,h_1800,c_limit/Home-Theater-Gear-GettyImages-95781853.jpg",
      quantity: 0,
    },
    {
      name: "Signage",
      price: 80,
      image:
        "https://www.hexnode.com/blogs/wp-content/uploads/2020/04/digital-signage-in-an-airport.jpg",
      quantity: 0,
    },
  ],
};

const AddOnsSlice = createSlice({
  name: "addonsData",
  initialState,
  reducers: {
    incrementAddons: (state, action: PayloadAction<number>) => {
      state.addons[action.payload].quantity += 1;
    },
    decrementAddons: (state, action: PayloadAction<number>) => {
      if (state.addons[action.payload].quantity > 0) {
        state.addons[action.payload].quantity -= 1;
      }
    },
    resetAll: (state) => {
      state.addons.forEach((v) => (v.quantity = 0));
    },
  },
});

// ✅ Exports
export const { incrementAddons, decrementAddons, resetAll } =
  AddOnsSlice.actions;
export default AddOnsSlice.reducer;
