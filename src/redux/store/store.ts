import { configureStore } from '@reduxjs/toolkit';
import  filters  from '../slice/sortSlice';
import cardPizza from '../slice/cardPizza';
import pizzas from '../slice/pizzaSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';


export const store = configureStore({
  reducer: {
    filters,
    cardPizza,
    pizzas
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
