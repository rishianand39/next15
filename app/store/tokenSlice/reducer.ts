import { GenerateToken } from "@/service/token_generator";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchToken = createAsyncThunk("tokenSlice/fetchToken", async () => {
  const response = await GenerateToken();
  return response.access_token;
});
