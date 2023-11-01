import { createSlice } from '@reduxjs/toolkit';
import AddHouse from '../../components/Addhouse/AddHouse';

const initialState = {
  houses: [],
  isLoading: false,
  error: null,
  isSuccessfull: false,
};

const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // create a new reservation
    builder
      .addCase(AddHouse.pending, (state) => ({
        ...state,
        isLoading: true,
        isSuccessfull: false,
      }))
      .addCase(AddHouse.fulfilled, (state, action) => ({
        ...state,
        reservations: [...state.reservations, action.payload],
        isLoading: false,
        isSuccessfull: true,
      }))
      .addCase(AddHouse.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
        isSuccessfull: false,
      }));
  },
});
export const { resetSuccessful } = houseSlice.actions;
export default houseSlice.reducer;
