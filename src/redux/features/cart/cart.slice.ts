
import {
    createSlice
} from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

import cartItems from "../../../cartItems"
import { CartItemType } from "../../../types/cart.types";

export interface CartState  {
    cartItems: CartItemType[];
    isLoading: boolean;
}

const initialState: CartState = {
    cartItems: cartItems,
    isLoading: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {

        // CLEAR CART
        clearCartAction: (state) => {
            state.cartItems = [];
        },
        
        // REMOVE ITEM
        removeItemAction: (state, action: PayloadAction<string>) => {

            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload);

        },

        // INCREASE
        increaseItemAction: (state, action: PayloadAction<string>) => {

            // FIND CART ITEM
            const cartItem = state.cartItems.find((item) => item.id === action.payload)!;

            // INCREATE THE AMOUNT
            cartItem.amount++;

        },

        // DECREASE
        decreaseItemAction: (state, action: PayloadAction<string>) => {
            // FIND CART ITEM
            const cartItem = state.cartItems.find((item) => item.id === action.payload)!;

            // INCREATE THE AMOUNT
            cartItem.amount--;

            // IF 0 => REMOVE FROM CART ITEMS
            if(cartItem.amount === 0) {
                state.cartItems = state.cartItems.filter((item) => item.id !== cartItem.id);
            }
        }

        // CALCULATE TOTALS


        // 
    }
});

// EXPORT ACTIONS
export const {
    clearCartAction,
    removeItemAction,
    increaseItemAction,
    decreaseItemAction,

} = cartSlice.actions;

export default cartSlice.reducer;