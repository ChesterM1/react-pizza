import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaType } from "../../Components/Pizza/Pizza";
import {RootState} from '../store/store';
import {pizzasType } from '../../pages/Home';

export enum SortValueType{
    // {sortName: 'rating', name: 'популярности'},
    // {sortName: 'price', name: 'цене'},
    // {sortName: 'title', name: 'по алфавиту'}
    SORT_RATING = 'rating',
    SORT_PRICE = 'price',
    SORT_TITLE = 'title'
}

export type SortType = {
    sortName: SortValueType.SORT_RATING | SortValueType.SORT_PRICE | SortValueType.SORT_TITLE;
     name: string;
}

type AsyncArgType = {
    category: string;
    pages:number;
    searchValue: string;
    sortValue: SortType; 
}



export const fetchPizza = createAsyncThunk<pizzasType[], AsyncArgType>('pizzas/fetching', async (arg)=>{
    const {category, pages, searchValue, sortValue} = arg;
    const {data} = await axios.get(`https://629fe7af461f8173e4f2841b.mockapi.io/pizzas/items?${category}&page=${pages}&limit=4&search=${searchValue}&sortby=${sortValue.sortName}`);
    return data as pizzasType[];
})



interface PizzasStoreType {
    pizzas: PizzaType[];
    status : 'loading' | 'error' | 'success'
}

const initialState : PizzasStoreType = {
    pizzas: [],
    status: 'loading' //loading / error/ success
};



export const pizzas = createSlice({
    name: "pizzas",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchPizza.pending, (state) =>{
            state.status = 'loading'
        });
        builder.addCase(fetchPizza.fulfilled, (state, action) =>{
            state.status = 'success';
            state.pizzas = action.payload;
        });
        builder.addCase(fetchPizza.rejected, (state) =>{
            state.status = 'error';
            state.pizzas = [];
        });
    },
    
        
    
});

export const selectPizzas = (state : RootState) => state.pizzas;

export default pizzas.reducer;
