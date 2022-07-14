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
  },
  pages: 1,
  searchValue: '',

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
    },
    chengePages(state, action){
      state.pages = (action.payload) +1;
    },
    setFilter(state, action){
      state.categoryId = Number(action.payload.categoryId);
      state.pages = Number(action.payload.pages);
      state.sortValue = action.payload.sortValue;
    },
    setSearchValue(state, action){
      state.searchValue = action.payload
    }
  },
})

export const { setCategory, setSortValue, chengePages, setFilter, setSearchValue } = filters.actions;

export default filters.reducer;