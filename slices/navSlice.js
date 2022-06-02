import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
  ordering: null,
};

export const navSlice = createSlice({
  name: 'nav',
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
    setOrdering: (state, action) => {
      state.ordering = action.payload;
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setTravelTimeInformation,
  setOrdering,
} = navSlice.actions;

//Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export const selectOrdering = (state) => state.nav.ordering;

export default navSlice.reducer;
