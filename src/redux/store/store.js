import { configureStore } from '@reduxjs/toolkit';
import  filters  from '../slice/sortSlice';

export const store = configureStore({
  reducer: {
    filters,
  },
})

