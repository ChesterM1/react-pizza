import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzaMini: [],
    totalPrice: 0,
    totalPizzaCount: 0,
};



export const cardPizza = createSlice({
    name: "cardPizza",
    initialState,
    reducers: {
        setPizzaMini(state, action) {
            const dublePizzas = state.pizzaMini.find(
                (item) => item.param === action.payload.param
            );
            if (dublePizzas) {
                dublePizzas.count++;
            } else {
                state.pizzaMini.push(action.payload);
            }
            state.totalPrice = state.pizzaMini.reduce(
                (acum, elem) => acum + elem.price * elem.count,
                0
            );
            state.totalPizzaCount = state.pizzaMini.reduce(
                (acum, elem) => acum + elem.count,
                0
            );
        },
        dltAllPizzas(state) {
            state.pizzaMini = [];
            state.totalPizzaCount = 0;
            state.totalPrice = 0;
        },
        dltPizzasItem(state, action) {
            state.pizzaMini = state.pizzaMini.filter(
                (item) => (item.param !== action.payload.param)
            );
            
            state.totalPrice =
                state.totalPrice - action.payload.price * action.payload.count;
            state.totalPizzaCount =
                state.totalPizzaCount - action.payload.count;
        },
        plusPizzaItem(state, action) {
            const item = state.pizzaMini.find(
                (elem) => elem.param === action.payload
            );
            if (item.count < 99) {
                item.count++;
                state.totalPizzaCount += 1;
                state.totalPrice += item.price;
            }
        },
        minusPizzaItem(state, action) {
            const item = state.pizzaMini.find(
                (elem) => elem.param === action.payload
            );
            if (item.count > 1) {
                item.count--;
                state.totalPizzaCount -= 1;
                state.totalPrice -= item.price;
            }
        },
    },
});

export const selectCardInfo = state => state.cardPizza;

export const {
    setPizzaMini,
    dltAllPizzas,
    dltPizzasItem,
    plusPizzaItem,
    minusPizzaItem,
} = cardPizza.actions;

export default cardPizza.reducer;
