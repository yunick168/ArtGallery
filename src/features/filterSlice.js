import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artist: '全部',
  category: '全部',
  priceSort: 0,
}

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeArtist: (state, action) => {
      state.artist = action.payload
    },
    changeCategory: (state, action) => {
      state.category = action.payload
    },
    changePriceSort: (state, action) => {
      state.priceSort = action.payload
    },
  }
})

//state
const getArtistValue = state => state.filter.artist
const getCategoryValue = state => state.filter.category
const getPriceSortValue = state => state.filter.priceSort
//reducers
export const { changeArtist, changeCategory, changePriceSort } = slice.actions
//export out
export { getArtistValue, getCategoryValue, getPriceSortValue }
export default slice.reducer
