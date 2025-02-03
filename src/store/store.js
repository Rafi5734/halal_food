import { allUsersSlice } from "@/api/allUsers";
import { authSlice } from "@/api/auth/authSlice";
import { cartSlice } from "@/api/cartSlice/CartSlice";
import { categorySlice } from "@/api/categorySlice/categorySlice";
import { checkoutSlice } from "@/api/checkoutSlice/checkoutSlice";
import { orderSlice } from "@/api/productSlice/orderSlice/orderSlice";
import { productSlice } from "@/api/productSlice/productSlice";
import { sliderSlice } from "@/api/sliders/sliderSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [allUsersSlice.reducerPath]: allUsersSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [orderSlice.reducerPath]: orderSlice.reducer,
    [checkoutSlice.reducerPath]: checkoutSlice.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
    [sliderSlice.reducerPath]: sliderSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
      allUsersSlice.middleware,
      categorySlice.middleware,
      productSlice.middleware,
      authSlice.middleware,
      orderSlice.middleware,
      checkoutSlice.middleware,
      cartSlice.middleware,
      sliderSlice.middleware
    ),
});
setupListeners(store.dispatch);
