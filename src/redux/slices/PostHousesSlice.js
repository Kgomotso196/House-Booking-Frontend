import { createSlice } from '@reduxjs/toolkit';
import houseServiceAPI from '../../services/housesService';

// Set the initial state
export const initialState = {
  houses: [],
  isLoading: false,
  error: null,
  isSuccessfull: false,
};

const postHousesSlice = createSlice({
  name: 'studio',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // create a new studio
    builder
      .addCase(houseServiceAPI.addHouse.pending, (state) => ({
        ...state,
        status: 'loading',
        isSuccessful: false,
      }))
      .addCase(houseServiceAPI.addHouse.fulfilled, (state) => ({
        ...state,
        status: 'successful',
        isSuccessful: true,
      }))
      .addCase(houseServiceAPI.addHouse.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
        isSuccessful: false,
      }));
  },
});

export const { resetSuccessful } = postHousesSlice.actions;
export default postHousesSlice.reducer;
