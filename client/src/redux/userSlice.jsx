import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  data: { name: null, email: null, id: null, role: null, token: null },
  loading: false,
  errorStatus: false,
  error: null,
  signedIn: false,
};

export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        creds
      );
      if (!response.data || response.response) {
        return rejectWithValue(response);
      }
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signupAsync = createAsyncThunk(
  "user/signupAsync",
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/signup",
        creds
      );
      if (!response.data || response.response) {
        return rejectWithValue(response);
      }
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "user/logoutAsync",
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/logout/${creds.email}`
      );
      if (!response.data || response.response) {
        return rejectWithValue(response);
      }
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetError: (state) => {
      state.data = initialState.data;
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.errorStatus = initialState.errorStatus;
    },
    setData: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.data = JSON.parse(user);
        state.signedIn = true;
      }
    },
  },
  extraReducers: {
    [loginAsync.pending]: (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.errorStatus = false;
      state.error = null;
      state.signedIn = false;
    },
    [loginAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data.result;
      state.errorStatus = false;
      state.error = null;
      state.signedIn = true;
    },
    [loginAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = initialState.data;
      state.errorStatus = true;
      state.error = payload.response.data.message;
      state.signedIn = false;
      setTimeout(function () {
        state.error = initialState.error;
        state.errorStatus = initialState.errorStatus;
      }, 7000);
    },
    [signupAsync.pending]: (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.errorStatus = false;
      state.error = null;
      state.signedIn = false;
    },
    [signupAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data.result;
      state.errorStatus = false;
      state.error = null;
      state.signedIn = true;
    },
    [signupAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = initialState.data;
      state.errorStatus = true;
      state.error = payload.response.data.message;
      state.signedIn = false;
      setTimeout(function () {
        state.error = initialState.error;
        state.errorStatus = initialState.errorStatus;
      }, 7000);
    },
    [logoutAsync.pending]: (state) => {
      state.loading = true;
      state.errorStatus = false;
      state.error = null;
    },
    [logoutAsync.fulfilled]: (state) => {
      state.loading = false;
      localStorage.removeItem("user");
      state.data = initialState.data;
      state.errorStatus = false;
      state.error = null;
      state.signedIn = false;
    },
    [logoutAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.errorStatus = true;
      state.error = payload.response.data.message;
      setTimeout(function () {
        state.error = initialState.error;
        state.errorStatus = initialState.errorStatus;
      }, 7000);
    },
  },
});

export const { resetError, setData } = userSlice.actions;

export default userSlice.reducer;
