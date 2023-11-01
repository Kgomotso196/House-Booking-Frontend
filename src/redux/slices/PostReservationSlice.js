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
    // create a new reservation
    builder
      .addCase(addReservation.pending, (state) => ({
        ...state,
        isLoading: true,
        isSuccessfull: false,
      }))
      .addCase(addReservation.fulfilled, (state, action) => ({
        ...state,
        reservations: [...state.reservations, action.payload],
        isLoading: false,
        isSuccessfull: true,
      }))
      .addCase(addReservation.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
        isSuccessfull: false,
      }));
  },
});

export const { resetSuccessful } = reservationSlice.actions;
export default reservationSlice.reducer;
