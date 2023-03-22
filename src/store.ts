
import {
    configureStore
} from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";


// CONFIGURE STORE
const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

// EXPORT THE STORES TYPE
export type RootType = ReturnType<typeof store.getState>;

// EXPORT STORE
export default store;