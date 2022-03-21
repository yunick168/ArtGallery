import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
}

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartData.push({
        item: action.payload.item,
        quantity: action.payload.quantity,
        totalPrice: action.payload.item.price * action.payload.quantity
      })
    },
    changeCartData: (state, action) => {
      state.cartData = action.payload
    },
    deleteCartItem: (state, action) => {
      state.cartData = state.cartData.filter((item) => (
        item.item.id !== action.payload
      ))
    }
  }
})

export const { addCart, deleteCartItem, changeCartData } = slice.actions
const getCartData = state => state.cart.cartData
const getCartCount = state => state.cart.cartData.length

export { getCartData, getCartCount }
export default slice.reducer