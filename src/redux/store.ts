
import {
    configureStore
} from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cart.slice";
import modalReducer from "./features/modal/modal.slice";

// CONFIGURE STORE
const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
});

// EXPORT THE STORES TYPE
export type RootType = ReturnType<typeof store.getState>;

// EXPORT APP DISPATCH 
export type AppDispatch = typeof store.dispatch;

// EXPORT STORE
export default store;