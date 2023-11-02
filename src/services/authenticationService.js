import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../helpers/helpers';

const registerUser = createAsyncThunk(
    'user/register',
    async (houseData, thunkAPI) => {
      try {
        const response = await axios.post(`${baseUrl}/api/v1/houses`, houseData);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    },
);


const authenticationServiceAPI = { registerUser}

export default authenticationServiceAPI;

