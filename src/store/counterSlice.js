import { createSlice } from "@reduxjs/toolkit";

// Counter Slice
const initialCounterState = { counter: 0, toggle: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
