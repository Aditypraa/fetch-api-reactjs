import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ // membuat slice cart
    name: "cart", // nama slice
    initialState: [], // initial state array kosong
    reducers: { // reducers
        addToCart: (state, action) => { // action addToCart
            state.push(action.payload) // tambahkan action.payload ke state
        }
    }
})

const loginSlice = createSlice({ // membuat slice login
    name: "login", // nama slice
    initialState: { status: false }, // initial state status = false
    reducers: { // reducers
        createSession: (state, action) => { // action createSession
            state.status = true // set state.status = true
        }
    }
})

const store = configureStore({ // membuat store dengan reducer cartReducer
    reducer: { // reducer
        login: loginSlice.reducer, // loginSlice
        cart: cartSlice.reducer // cartSlice
    }
})
console.log("onCreate store : ", store.getState()); // menampilkan state

store.subscribe(() => { // subscribe : untuk mendengarkan / melihat perubahan state atau didalam store
    console.log("Store Change : ", store.getState()); // menampilkan state
});

const action1 = cartSlice.actions.addToCart({ id: 1, qty: 20 }); // action 1
store.dispatch(action1); // dispatch action 1

const action2 = loginSlice.actions.createSession(); // action 2
store.dispatch(action2); // dispatch action 2