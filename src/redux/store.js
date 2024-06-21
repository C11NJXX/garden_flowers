import { createStore } from 'redux';
import wishlistReducer from './wishList_reducer';

const store = createStore(wishlistReducer);

export default store;
