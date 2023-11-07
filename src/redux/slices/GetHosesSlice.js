import { createSlice } from '@reduxjs/toolkit';
import houseServiceAPI from '../../services/housesService';

// Set the initial state
export const initialState = {
  houses: [],
  isLoading: false,
  error: null,
  isSuccessfull: false,
};

const getHousesSlice = createSlice({
  name: 'Houses',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // fetch all existing houses
    builder
      .addCase(houseServiceAPI.fetchHouses.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(houseServiceAPI.fetchHouses.fulfilled, (state, action) => ({
        ...state,
        houses: action.payload,
        isLoading: false,
      }))
      .addCase(houseServiceAPI.fetchHouses.rejected, (state) => ({
        ...state,
        error: 'Error',
        isLoading: false,
      }));
  },
});

export const { resetSuccessful } = getHousesSlice.actions;
export default getHousesSlice.reducer;
