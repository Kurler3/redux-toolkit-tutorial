
import {
    ActionReducerMapBuilder,
    createAsyncThunk,
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
    cartItems: [],
    isLoading: false,
}

// FETCH CART ITEMS ASYNC ACTION
export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async () => {

        try {

            const cartItemsRes = await fetch("https://course-api.com/react-useReducer-cart-project");

            return await cartItemsRes.json();

        } catch (error) {
            console.error('Error while fetching cart data...', error);

            // return cartItems;
        }

    }
);

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
    },

    // EXTRA REDUCERS FOR THE ASYNC ACTION 
    extraReducers: (builder: ActionReducerMapBuilder<CartState>) => {

        // PENDING (SET IS LOADING TO TRUE)
        builder.addCase(
            getCartItems.pending,
            (state) => {
                state.isLoading = true;
            }
        )
        // GOT DATA => SET DATA AND SET IS LOADING TO FALSE
        .addCase(
            getCartItems.fulfilled,
            (state, action: PayloadAction<CartItemType[]>) => {
                state.isLoading = false;
                state.cartItems = action.payload;
            }
        )
        // IN CASE OF IT BEING REJECTED
        .addCase(
            getCartItems.rejected,
            (state) => {
                state.isLoading = false;
            }
        )
        
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