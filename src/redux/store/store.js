import { configureStore } from '@reduxjs/toolkit';
import  filters  from '../slice/sortSlice';
import cardPizza from '../slice/cardPizza';

export const store = configureStore({
  reducer: {
    filters,
    cardPizza
  },
})

