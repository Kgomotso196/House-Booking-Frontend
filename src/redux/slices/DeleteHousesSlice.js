import { createSlice } from '@reduxjs/toolkit';
import houseServiceAPI from '../../services/housesService';

// Set the initial state
export const initialState = {
  houses: [],
  isLoading: false,
  error: null,
  isSuccessfull: false,
};

// Create slice
const deleteHousesSlice = createSlice({
  name: 'deleteHouses',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // delete an existing reservation
    builder
      .addCase(houseServiceAPI.deleteHouse.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(houseServiceAPI.deleteHouse.fulfilled, (state, action) => ({
        ...state,
        reservations: state.reservations.filter(
          (house) => house.id !== action.payload.id,
        ),
        isLoading: false,
      }))
      .addCase(houseServiceAPI.deleteHouse.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));
  },
});

export const { resetSuccessful } = deleteHousesSlice.actions;

export default deleteHousesSlice.reducer;
