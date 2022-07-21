import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store';
import { SortType, SortValueType } from './pizzaSlice';

interface FiltersStoreType {
  categoryId : number;
  categoryItem: string[];
  sortValue: SortType;
  pages: number;
  searchValue: string;
}

type SetFilterPayloadType = {
    categoryId: number;
    pages: number;
    sortValue : SortType;
}

const initialState : FiltersStoreType = {
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
    sortName: SortValueType.SORT_RATING,
    name: 'популярности'
  },
  pages: 1,
  searchValue: '',

}

export const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>){
        state.categoryId = action.payload;
    },
    setSortValue(state, action: PayloadAction<SortType>){
        state.sortValue = action.payload;
    },
    chengePages(state, action){
      state.pages = (action.payload) +1;
    },
    setFilter(state, action : PayloadAction<SetFilterPayloadType>){ 

      state.categoryId = Number(action.payload.categoryId);
      state.pages = Number(action.payload.pages);
      state.sortValue = action.payload.sortValue;
    },
    setSearchValue(state, action : PayloadAction<string>){
      state.searchValue = action.payload
    }
  },
})

export const  selectFilters = (state : RootState) => state.filters;

export const { setCategory, setSortValue, chengePages, setFilter, setSearchValue } = filters.actions;

export default filters.reducer;