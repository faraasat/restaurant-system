import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: { login: false, user: null, email: null, id: null, admin: null },
  loading: false,
  errorStatus: false,
  error: null,
};

export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (creds, { rejectWithValue }) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        body: JSON.stringify(creds),
        // header: {
        //   "Content-Type": "application/json",
        // },
      });
      const data = await response.json();
      if (data.result === null && data.error) {
        return rejectWithValue(data.message);
      }
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [loginAsync.pending]: (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.errorStatus = false;
      state.error = null;
    },
    [loginAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.errorStatus = false;
      state.error = null;
    },
    [loginAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = initialState.data;
      state.errorStatus = true;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
