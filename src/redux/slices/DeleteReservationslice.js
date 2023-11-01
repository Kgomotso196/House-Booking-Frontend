import { createSlice } from '@reduxjs/toolkit';
import reservationServiceAPI from '../../services/reservationService';

// Set the initial state
const initialState = {
  reservations: [],
  isLoading: false,
  error: null,
  isSuccessfull: false,
};

// Create slice
const deleteReservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // delete an existing reservation
    builder
      .addCase(reservationServiceAPI.deleteReservation.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(reservationServiceAPI.deleteReservation.fulfilled, (state, action) => ({
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id,
        ),
        isLoading: false,
      }))
      .addCase(reservationServiceAPI.deleteReservation.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));
  },
});

export const { resetSuccessful } = deleteReservationSlice.actions;
export default deleteReservationSlice.reducer;
