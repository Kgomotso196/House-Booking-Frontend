import { createSlice } from '@reduxjs/toolkit';
import { addReservation } from '../../services/reservationService';

// Set the initial state
const initialState = {
  reservations: [],
  isLoading: false,
  error: null,
  isSuccessfull: false,
};

// Create slice
const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // delete an existing reservation
    builder
      .addCase(deleteReservation.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteReservation.fulfilled, (state, action) => ({
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id,
        ),
        isLoading: false,
      }))
      .addCase(deleteReservation.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));
  },
});

export const { resetSuccessful } = reservationSlice.actions;
export default reservationSlice.reducer;
