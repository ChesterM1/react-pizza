import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  categoryItem: [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
],
  sortValue: {
    sortName: 'rating',
    name: 'популярности'
    }
}

export const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action){
        state.categoryId = action.payload;
    },
    setSortValue(state, action){
        state.sortValue = action.payload;
    }
  },
})

export const { setCategory, setSortValue } = filters.actions;

export default filters.reducer;