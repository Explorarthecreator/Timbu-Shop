import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: {},
  quantity: 1,
  step: 1,
  productsLoading: false,
  productsError: false,
  productsSuccess: false,
  productLoading: false,
  productError: false,
  productSuccess: false,
};

export const getProducts = createAsyncThunk(
  "products/getAll",
  async (age, thunkAPI) => {
    //api.timbu.cloud/extrainfo/products/5d1b0ca4833d496b8c453374216cefe6

    // https:
    try {
      const response = await axios.get(
        "https://corsanywhere.osinachi.me/https://api.timbu.cloud/products",
        {
          params: {
            organization_id: process.env.REACT_APP_ORGANIZATION_ID,
            reverse_sort: false,
            page: age,
            size: 12,
            Appid: process.env.REACT_APP_APPID,
            Apikey: process.env.REACT_APP_APIKEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "products/getOne",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://corsanywhere.osinachi.me/https://api.timbu.cloud/products/${id}`,
        {
          params: {
            organization_id: process.env.REACT_APP_ORGANIZATION_ID,
            Appid: process.env.REACT_APP_APPID,
            Apikey: process.env.REACT_APP_APIKEY,
          },
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => initialState,
    resetProduct: (state) => {
      state.product = {};
      state.quantity = 1;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    increaseStep: (state) => {
      state.step = state.step + 1;
    },
    decreaseStep: (state) => {
      state.step = state.step - 1;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    resetError: (state) => {
      state.productError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsLoading = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productsLoading = false;
        state.productsError = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = action.payload;
        state.productsSuccess = true;
      })
      .addCase(getProduct.pending, (state) => {
        state.productSuccess = false;
        state.productLoading = true;
      })
      .addCase(getProduct.rejected, (state) => {
        state.productLoading = false;
        state.productError = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.productLoading = false;
        state.productSuccess = true;
        state.product = action.payload;
      });
  },
});

export const {
  reset,
  resetProduct,
  setProduct,
  setProducts,
  increaseStep,
  decreaseStep,
  setStep,
  resetError,
} = ProductSlice.actions;

export default ProductSlice.reducer;
