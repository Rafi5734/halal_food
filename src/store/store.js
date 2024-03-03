import { allUsersSlice } from "@/api/allUsers";
import { authSlice } from "@/api/auth/authSlice";
import { categorySlice } from "@/api/categorySlice/categorySlice";
import { checkoutSlice } from "@/api/checkoutSlice/checkoutSlice";
import { orderSlice } from "@/api/productSlice/orderSlice/orderSlice";
import { productSlice } from "@/api/productSlice/productSlice";
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
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
      allUsersSlice.middleware,
      categorySlice.middleware,
      productSlice.middleware,
      authSlice.middleware,
      orderSlice.middleware,
      checkoutSlice.middleware
    ),
});
setupListeners(store.dispatch);
