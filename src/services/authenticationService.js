import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../helpers/helpers';

const registerUser = createAsyncThunk(
    'user/register',
    async (userData, thunkAPI) => {
      try {
        const response = await axios.post(`${baseUrl}/api/v1/registrations`, userData);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    },
);

const signInUser = createAsyncThunk(
    'user/signin',
    async (logInData, thunkAPI) => {
      try {
        const response = await axios.post(`${baseUrl}/api/v1/sessions`, logInData);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    },
);

const authenticationServiceAPI = { registerUser, signInUser}

export default authenticationServiceAPI;

