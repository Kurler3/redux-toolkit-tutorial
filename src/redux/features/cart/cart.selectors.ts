import { createSelector } from "@reduxjs/toolkit";
import { RootType } from "../../store";


// GET COUNT
export const cartItemsAmountSelector = (state: RootType) => state.cart.cartItems.length;

// GET CONTAINER DATA
export const cartContainerDataSelector = createSelector(
    (state: RootType) => state.cart.cartItems,
    (cartItems) => {
        const itemCount = cartItems.reduce((total, item) => total + item.amount, 0);
        const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.amount), 0);

        return {
            cartItems,
            amount: itemCount,
            total: totalPrice,
        }

    }
)

// EXPORT CART ITEMS + LOADING
export const cartItemsAndLoadingSelector = (state: RootType) => {
    return {
        cartItems: state.cart.cartItems,
        isLoading: state.cart.isLoading,
    }
}