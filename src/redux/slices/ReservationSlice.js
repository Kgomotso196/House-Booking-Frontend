import { createSlice } from '@reduxjs/toolkit';
import fetchReservations from '../../services/reservationService';

// Set the initial state
export const initialState = {
  reservations: [],
  isLoading: false,
  error: null,
  isSuccessfull: false,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // fetch all existing reservations
    builder
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        isLoading: false,
      }))
      .addCase(fetchReservations.rejected, (state) => ({
        ...state,
        error: 'Error',
        isLoading: false,
      }));
  },
});

export const { resetSuccessful } = reservationSlice.actions;
export default reservationSlice.reducer;
