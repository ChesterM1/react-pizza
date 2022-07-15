import { configureStore } from '@reduxjs/toolkit';
import  filters  from '../slice/sortSlice';
import cardPizza from '../slice/cardPizza';
import pizzas from '../slice/pizzaSlice';

export const store = configureStore({
  reducer: {
    filters,
    cardPizza,
    pizzas
  },
})

