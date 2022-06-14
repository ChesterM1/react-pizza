import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
}

export const search = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue(state, action){
        state.searchValue = action.payload
    }
  },
})

export const { setSearchValue } = search.actions;

export default search.reducer;