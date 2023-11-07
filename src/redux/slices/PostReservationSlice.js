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
const postReservationSlice = createSlice({
  name: 'postReservation',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // create a new reservation
    builder
      .addCase(reservationServiceAPI.addReservation.pending, (state) => ({
        ...state,
        isLoading: true,
        isSuccessfull: false,
      }))
      .addCase(reservationServiceAPI.addReservation.fulfilled, (state, action) => ({
        ...state,
        reservations: [...state.reservations, action.payload],
        isLoading: false,
        isSuccessfull: true,
      }))
      .addCase(reservationServiceAPI.addReservation.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
        isSuccessfull: false,
      }));
  },
});

export const { resetSuccessful } = postReservationSlice.actions;
export default postReservationSlice.reducer;
