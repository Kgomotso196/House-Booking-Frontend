import { createSlice } from '@reduxjs/toolkit';
import reservationServiceAPI from '../../services/reservationService';

// Set the initial state
export const initialState = {
  reservations: [],
  isLoading: false,
  error: null,
  isSuccessfull: false,
};

const getReservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // fetch all existing reservations
    builder
      .addCase(reservationServiceAPI.fetchReservations.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(reservationServiceAPI.fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        isLoading: false,
      }))
      .addCase(reservationServiceAPI.fetchReservations.rejected, (state) => ({
        ...state,
        error: 'Error',
        isLoading: false,
      }));
  },
});

export const { resetSuccessful } = getReservationSlice.actions;
export default getReservationSlice.reducer;
