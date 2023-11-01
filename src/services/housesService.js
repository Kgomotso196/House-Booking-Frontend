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

// sample house data

// const houseData = {
//   house_name: 'House Name',
//   house_image: 'Image URL',
//   house_price: 100000,
//   description: 'Description',
//   location: 'Location',
//   user_id: 1,
// };

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

const houseServiceAPI = { fetchHouses, addHouse };

export default houseServiceAPI;
