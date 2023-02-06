import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from './actions';

export const store = configureStore({
  reducer: {
    registerReducer
  },
});