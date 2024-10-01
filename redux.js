// Contoh Redux - State Management

import { legacy_createStore } from "redux";

// Reducer  : event handler yang akan mengubah state
const cartReducer = (state = { /* initial state*/ cart: [], /* array kosong */ }, action /* object yang berisi type dan payload */) => {
  switch (action.type) { // switch case
    case "ADD_TO_CART": // jika action.type = ADD_TO_CART
      return { // return state baru
        ...state, // copy state lama
        cart: [...state.cart, action.payload], // tambahkan action.payload ke state.cart
      };
    default: // jika tidak ada action.type yang cocok
      return state; // return state lama
  }
};

// Store : tempat menyimpan state
const store = legacy_createStore(cartReducer); // membuat store dengan reducer cartReducer
console.log('on create store : ', store.getState()); // menampilkan state

// subscribe : untuk mendengarkan / melihat perubahan state atau didalam store
store.subscribe(() => {
  console.log("Store Change : ", store.getState()); // menampilkan state
});

// dispatch : untuk mengirimkan action ke reducer
const action1 = { type: "ADD_TO_CART", payload: { id: 1, name: "Laptop" } }; // action 1
store.dispatch(action1); // dispatch action 1
