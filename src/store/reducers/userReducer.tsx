import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ThemeMode } from "../../enums";
export interface UserState {
  themeMode: ThemeMode;
  timestamp: number;
}
const currentTimestamp = () => new Date().getTime();
const initialState: UserState = {
  themeMode: ThemeMode.Light,
  timestamp: currentTimestamp(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
    changeTheme: (state, { payload }) => {
      state.themeMode = payload;
    },
  },
  // extraReducers: {
  //   [verifyAuth.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [verifyAuth.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.settings = action.payload.user;
  //     state.isAuthenticated = action.payload.isAuthenticated;
  //   },
  //   [verifyAuth.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.settings = action.payload.user;
  //     state.isAuthenticated = action.payload.isAuthenticated;
  //   },
  // },
});

export const {
  changeTheme,
  resetUser
} = userSlice.actions;

export default userSlice.reducer;
