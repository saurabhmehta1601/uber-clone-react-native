import { createSlice} from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface NavbarState {
  origin?: string;
  destination?: string;
  travelTimeInformation?: string;
}

// Define the initial state using that type
const initialState: NavbarState = {
  origin: undefined,
  destination: undefined,
  travelTimeInformation: undefined,
};

export const navbarSlice = createSlice({
  name: "navbar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },

    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setTravelTimeInformation, setOrigin, setDestination } =
  navbarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectOrigin = (state: RootState) => state.navbar.origin;
export const selectDestination = (state: RootState) => state.navbar.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.navbar.travelTimeInformation;

export default navbarSlice.reducer;
