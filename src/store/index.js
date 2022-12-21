import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggle: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;
