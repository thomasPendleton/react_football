import { configureStore } from '@reduxjs/toolkit';
// import statsReducer from "./features/stats/statsSlice"
import statsReducer from './features/stats/statsSlice'

export const store = configureStore({
  reducer: {
    stats: statsReducer,
  },
})
