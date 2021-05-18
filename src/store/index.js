import { createSlice, configureStore } from '@reduxjs/toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState = {cart:[], total: 0};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUpdateCartItem(state, action) {
      const {id, title, qty, price} = action.payload;
        
        let index = state.cart.map(e => e.id).indexOf(id);
        console.log(price + ' ' + qty);
        let subTotal = price*qty;
        if (index === -1) {
          if (qty > 0 ) {
          state.cart = [...state.cart, {...action.payload, subTotal:subTotal}];
          state.total += subTotal;
          }
        } else{

          let cartItems = [...state.cart];
          let item = {...cartItems[index]};
          if (qty > 0)  {
            
            state.total = state.total - item.subTotal;
            
            item.qty = qty;
            item.subTotal = subTotal;
            cartItems[index] = item;
            state.cart = cartItems;
            state.total = state.total + subTotal;
            //updateQty(qty);
          } else{ 
            
            state.total = state.total - item.subTotal;
            
            cartItems.splice(index, 1);
            state.cart = cartItems;
           
          }
        }
    },
/*     decrement(state) {
        state.counter--;
    },
    increase(state, action) {
        state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    } */
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;