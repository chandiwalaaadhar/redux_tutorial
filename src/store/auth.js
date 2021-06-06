import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { islogin: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.islogin = true;
    },
    logout(state) {
      state.islogin = false;
    },
  },
});

export default authSlice;
