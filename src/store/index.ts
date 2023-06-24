import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from './ratingSlice'
import submitReducer from './submitSlice'

const store = configureStore({
  reducer: {
    rating: ratingReducer,
    submit: submitReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;