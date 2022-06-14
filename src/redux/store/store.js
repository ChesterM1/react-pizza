import { configureStore } from '@reduxjs/toolkit';
import  filters  from '../slice/sortSlice';
import search from '../slice/searchSlice';

export const store = configureStore({
  reducer: {
    filters,
    search
  },
})

