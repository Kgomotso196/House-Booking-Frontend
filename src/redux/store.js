import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './slices/ReservationSlice';
import housesReducer from './slices/PostHousesSlice';

const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    houses: housesReducer,
  },
});

export default store;
