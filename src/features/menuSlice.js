import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: true
}

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeMenu: (state, action) => {
      state.active = action.payload
    }
  }
})

export const { activeMenu } = slice.actions;
export const getActive = state => state.menu.active
export default slice.reducer;