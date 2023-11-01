import { createSlice } from '@reduxjs/toolkit';
import fetchHouses from '../../services/housesService';

// Set the initial state
export const initialState = {
  houses: [],
  isLoading: false,
  error: null,
  isSuccessfull: false,
};

const housesSlice = createSlice({
  name: 'Houses',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // fetch all existing houses
    builder
      .addCase(fetchHouses.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchHouses.fulfilled, (state, action) => ({
        ...state,
        houses: action.payload,
        isLoading: false,
      }))
      .addCase(fetchHouses.rejected, (state) => ({
        ...state,
        error: 'Error',
        isLoading: false,
      }));
  },
});

export const { resetSuccessful } = housesSlice.actions;
export default housesSlice.reducer;
