import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice'
import wishlistReducer from '../features/wishlist/wishList'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
    wishlist:wishlistReducer,
    cart: cartReducer
  },
});
