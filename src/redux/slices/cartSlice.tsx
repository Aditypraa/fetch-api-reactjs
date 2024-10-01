import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("card") || "[]")
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload)
            }
        }
    }
})

export const { addToCart } = cartSlice.actions; // Export action
export default cartSlice.reducer; // Export reducer