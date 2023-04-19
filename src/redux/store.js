import {configureStore} from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  name: 'Chairil Ashar',
  address: 'Soppeng',
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = configureStore({
  reducer,
});

export default store;
