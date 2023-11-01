import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../helpers/helpers';

export const addHouse = createAsyncThunk(
  'houses/addHouse',
  async (houseData, thunkAPI) => {
    try {
      // Convert the houseData to a JSON string
      const jsonData = JSON.stringify(houseData);

      const response = await axios.post(`${baseUrl}/api/v1/houses`, jsonData, {
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

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
    builder
      .addCase(addHouse.pending, (state) => ({
        ...state,
        isLoading: true,
        isSuccessfull: false,
      }))
      .addCase(addHouse.fulfilled, (state, action) => ({
        ...state,
        houses: [...state.houses, action.payload],
        isLoading: false,
        isSuccessfull: true,
      }))
      .addCase(addHouse.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
        isSuccessfull: false,
      }));
  },
});
export const { resetSuccessful } = houseSlice.actions;
export default houseSlice.reducer;
