import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk('pizzas/fetching', async (arg)=>{
    const {category, pages, searchValue, sortValue} = arg;
    const {data} = await axios.get(`https://629fe7af461f8173e4f2841b.mockapi.io/pizzas/items?${category}&page=${pages}&limit=4&search=${searchValue}&sortby=${sortValue.sortName}`);
    return data;
})

const initialState = {
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



export default pizzas.reducer;
