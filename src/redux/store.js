import { configureStore } from '@reduxjs/toolkit';
import getReservationSlice from './slices/GetReservationSlice';
import getHosesSlice from './slices/GetHosesSlice';
import postReservationSlice from './slices/PostReservationSlice';
import postHousesSlice from './slices/PostHousesSlice';

const store = configureStore({
  reducer: {
    reservations: getReservationSlice,
    houses: getHosesSlice,
    postReservations: postReservationSlice,
    postHouses: postHousesSlice,
  },
});

export default store;
