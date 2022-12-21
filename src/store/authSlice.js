import { createSlice } from "@reduxjs/toolkit";

// Auth slice
const initialAuthState = { authentication: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.authentication = true;
    },
    logout(state) {
      state.authentication = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
