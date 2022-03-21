import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../features/menuSlice";
import filterSlice from '../features/filterSlice'
import cartSlice from "../features/cartSlice";

export default configureStore({
  reducer: {
    menu: menuSlice,
    filter: filterSlice,
    cart: cartSlice
  }
})