import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './demo.slice';

const store = configureStore({
  reducer: {
    timer: demoReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
