import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, getLocalStorage } from '../helpers/helpers';

const token = getLocalStorage();

const fetchReservations = createAsyncThunk(
  'reservation/fetchReservations',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/reservations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/reservations`, reservationData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const deleteReservation = createAsyncThunk(
  'reservation/deleteReservation',
  async ({ studioId, reservationId }, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseUrl}/api/v1/studios/${studioId}/reservations/${reservationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const reservationServiceAPI = { fetchReservations, addReservation, deleteReservation };

export default reservationServiceAPI;
