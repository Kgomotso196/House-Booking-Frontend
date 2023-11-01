import { configureStore } from '@reduxjs/toolkit';
import getReservationSlice from './slices/GetReservationSlice';
import getHosesSlice from './slices/GetHosesSlice';

const store = configureStore({
  reducer: {
    reservations: getReservationSlice,
    houses: getHosesSlice,
  },
});

export default store;
