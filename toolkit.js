import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

// const {configureStore, createAction, createReducer} = toolkit;

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], ( builder ) => { // initial state array kosong
    builder // builder
    .addCase(addToCart, (state, action) => { // jika action.type = addToCart
        state.push(action.payload) // tambahkan action.payload ke state
    })
})

const login = createAction("CREATE_SESSION"); // action login

const loginReducer = createReducer({status: false}, ( builder ) => { // initial state status = false
    builder // builder
    .addCase(login, (state, action) => { // jika action.type = login
        state.status = true // set state.status = true
    })
})

// Store : tempat menyimpan state
const store = configureStore({ // membuat store dengan reducer cartReducer
    reducer: { // reducer
        login: loginReducer, // loginReducer
        cart: cartReducer // cartReducer
    }
})

console.log("onCreate store : ", store.getState());

// subscribe : untuk mendengarkan / melihat perubahan state atau didalam store
store.subscribe(() => {
    console.log("Store Change : ", store.getState()); // menampilkan state
  });

// dispatch : untuk mengirimkan action ke reducer
const action1 = addToCart({ id: 1, qty: 20 }); // action 1
store.dispatch(action1); // dispatch action 1

const action2 = login(); // action 2
store.dispatch(action2); // dispatch action 2