import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store/store";

export type CardPizzaType = {
    title: string;
    price: number;
    imageUrl: string;
    sizes: number
    types: string
    id: string
    param: string
    count: number;
}

type DltPizzaType = { 
    param: string;
    price: number;
    count: number;
}

interface CardPizzaStoreType {
    pizzaMini: CardPizzaType[];
    totalPrice: number;
    totalPizzaCount: number;
}

const initialState : CardPizzaStoreType = {
    pizzaMini: [],
    totalPrice: 0,
    totalPizzaCount: 0,
};



export const cardPizza = createSlice({
    name: "cardPizza",
    initialState,
    reducers: {
        setPizzaMini(state, action: PayloadAction <CardPizzaType>) {
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
        dltPizzasItem(state, action : PayloadAction <DltPizzaType>) {
            state.pizzaMini = state.pizzaMini.filter(
                (item) => (item.param !== action.payload.param)
            );
            
            state.totalPrice =
                state.totalPrice - action.payload.price * action.payload.count;
            state.totalPizzaCount =
                state.totalPizzaCount - action.payload.count;
        },
        plusPizzaItem(state, action : PayloadAction <string>) {
            const item = state.pizzaMini.find(
                (elem) => elem.param === action.payload
            );
            if (item && item.count < 99) {
                item.count++;
                state.totalPizzaCount += 1;
                state.totalPrice += item.price;
            }
        },
        minusPizzaItem(state, action: PayloadAction <string>) {
            const item = state.pizzaMini.find(
                (elem) => elem.param === action.payload
            );
            if (item && item.count > 1) {
                item.count--;
                state.totalPizzaCount -= 1;
                state.totalPrice -= item.price;
            }
        },
    },
});

export const selectCardPizza = (state: RootState) => state.cardPizza;

export const {
    setPizzaMini,
    dltAllPizzas,
    dltPizzasItem,
    plusPizzaItem,
    minusPizzaItem,
} = cardPizza.actions;

export default cardPizza.reducer;
