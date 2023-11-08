import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, setLocalStorage, getLocalStorage } from '../helpers/helpers';

const registerUser = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      const response = await axios.post(`${baseUrl}/api/v1/users`, userData);
      console.log(response.data);
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
      console.log(logInData);
      const response = await axios.post(`${baseUrl}/api/v1/login`, logInData);
      console.log(response.data);
      setLocalStorage(response.data.jwt);
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
      const userToken = getLocalStorage();
      const response = await axios.get(`${baseUrl}/api/v1/profile`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const authenticationServiceAPI = { registerUser, signInUser, checkLogInStatus };

export default authenticationServiceAPI;
