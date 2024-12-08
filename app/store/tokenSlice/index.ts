import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { fetchToken } from "./reducer";

const TokenSlice = createSlice({
  name: "tokenSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch token";
      });
  },
});

export default TokenSlice.reducer;
