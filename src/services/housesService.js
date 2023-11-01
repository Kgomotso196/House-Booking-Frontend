import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../helpers/helpers';

const fetchHouses = createAsyncThunk(
  'houses/fetchHouses',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/houses`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const addHouse = createAsyncThunk(
  'houses/addHouse',
  async (houseData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/houses`, houseData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

// delete an existing studio

const deleteHouse = createAsyncThunk(
  'houses/deleteHouse',
  async (houseId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/api/v1/houses/${houseId}`,
        {
          // headers: {
          //   authorization: thunkAPI.getState().auth.token,
          // },
        },
      );
      thunkAPI.dispatch(fetchHouses());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const houseServiceAPI = { fetchHouses, addHouse, deleteHouse };

export default houseServiceAPI;
