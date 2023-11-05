import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from '../redux/slices/AuthentificationSlice';
import axios from 'axios';
import { baseUrl } from '../helpers/helpers';

const registerUser = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/registrations`, userData, {
        withCredentials: true,
      });

      thunkAPI.dispatch(setUser(response.data.user));
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

const authenticationServiceAPI = { registerUser, signInUser };

export default authenticationServiceAPI;
