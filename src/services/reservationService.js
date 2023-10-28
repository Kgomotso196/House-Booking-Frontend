import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../helpers/helpers';

const fetchReservations = createAsyncThunk(
  'reservation/fetchReservations',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/reservations`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export default fetchReservations;
