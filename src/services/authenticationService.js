import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../helpers/helpers';

const registerUser = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/registrations`, userData, {
        withCredentials: true,
      });
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
      const response = await axios.post(`${baseUrl}/api/v1/sessions`, logInData, {
        withCredentials: true,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const checkLogInStatus = createAsyncThunk(
  'user/status',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/logged_in`, {
        withCredentials: true,
      });
      console.log(response.data);
      console.log('We can dispatch');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const authenticationServiceAPI = { registerUser, signInUser, checkLogInStatus };

export default authenticationServiceAPI;
