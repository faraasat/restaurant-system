import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  errorStatus: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "prod/fetchProduct",
  async (creds = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/products",
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

export const deleteProdcut = createAsyncThunk(
  "prod/deleteProdcut",
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/product/${creds.id}`,
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

export const addProduct = createAsyncThunk(
  "prod/addProduct",
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/product",
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

export const fetchCategory = createAsyncThunk(
  "prod/fetchCategory",
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/product/category/${creds.category}`,
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

export const productSlice = createSlice({
  name: "prod",
  initialState,
  reducers: {
    resetError: (state) => {
      state.data = initialState.data;
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.errorStatus = initialState.errorStatus;
    },
  },
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.errorStatus = false;
      state.error = null;
    },
    [fetchProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data.result;
      state.errorStatus = false;
      state.error = null;
    },
    [fetchProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = initialState.data;
      state.errorStatus = true;
      state.error = payload.response.data.message;
      setTimeout(function () {
        state.error = initialState.error;
        state.errorStatus = initialState.errorStatus;
      }, 7000);
    },
    [deleteProdcut.pending]: (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.errorStatus = false;
      state.error = null;
    },
    [deleteProdcut.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data.result;
      state.errorStatus = false;
      state.error = null;
    },
    [deleteProdcut.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = initialState.data;
      state.errorStatus = true;
      state.error = payload.response.data.message;
      setTimeout(async function () {
        state.error = initialState.error;
        state.errorStatus = initialState.errorStatus;
      }, 7000);
    },
    [addProduct.pending]: (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.errorStatus = false;
      state.error = null;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data.result;
      state.errorStatus = false;
      state.error = null;
    },
    [addProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = initialState.data;
      state.errorStatus = true;
      state.error = payload.response.data.message;
      setTimeout(async function () {
        state.error = initialState.error;
        state.errorStatus = initialState.errorStatus;
      }, 7000);
    },
    [fetchCategory.pending]: (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.errorStatus = false;
      state.error = null;
    },
    [fetchCategory.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data.result;
      state.errorStatus = false;
      state.error = null;
    },
    [fetchCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.data = initialState.data;
      state.errorStatus = true;
      state.error = payload.response.data.message;
      setTimeout(async function () {
        state.error = initialState.error;
        state.errorStatus = initialState.errorStatus;
      }, 7000);
    },
  },
});

export const { resetError } = productSlice.actions;

export default productSlice.reducer;
