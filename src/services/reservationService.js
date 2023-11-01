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

// const reservationData = {
//   checking_date: '2023-10-30',
//   checkout_date: '2023-11-05',
//   city: 'New York',
//   house_price: 1500,
//   user_id: 1,
//   house_id: 2,
// };

const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/reservations`, reservationData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const reservationServiceAPI = { fetchReservations, addReservation };

export default reservationServiceAPI;
