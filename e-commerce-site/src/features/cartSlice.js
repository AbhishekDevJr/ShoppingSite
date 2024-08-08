import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log('Action Payload---------->', action.payload);
            state.cart.push(action.payload);
        },
        updateItem: (state, action) => {
            console.log('Action Payload 1---------->', action.payload);
            state.cart.forEach((item) => {
                console.log('item.h3 === action.payload.h3---------->', item.h3 === action.payload.h3);
                if (item.h3 === action.payload.h3) {
                    item = action.payload;
                }
            });
            state.cart = state.cart.map((item) => item.h3 === action.payload.h3 ? item = action.payload : item);
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.h3 !== action.payload.h3);
        }
    }
});

export const { addItem, updateItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;