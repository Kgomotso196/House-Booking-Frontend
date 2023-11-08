import { createSlice } from '@reduxjs/toolkit';
import authenticationServiceAPI from '../../services/authenticationService';

const initialState = {
  registrationLoading: false,
  registrationData: null,
  registrationError: null,
  signInLoading: false,
  signInData: null,
  signInError: null,
  user: null,
  loggedIn: null,
};

const authSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticationServiceAPI.registerUser.pending, (state) => {
        state.registrationLoading = true;
        state.registrationError = null;
      })
      .addCase(authenticationServiceAPI.registerUser.fulfilled, (state, action) => {
        state.registrationLoading = false;
        state.registrationData = action.payload;
        state.user = action.payload.user;
        state.registrationError = null;
      })
      .addCase(authenticationServiceAPI.registerUser.rejected, (state, action) => {
        state.registrationLoading = false;
        state.registrationData = null;
        state.registrationError = action.payload;
      });

    builder
      .addCase(authenticationServiceAPI.signInUser.pending, (state) => {
        state.signInLoading = true;
        state.signInError = null;
      })
      .addCase(authenticationServiceAPI.signInUser.fulfilled, (state, action) => {
        state.signInLoading = false;
        state.signInData = action.payload;
        state.user = action.payload.user;
        state.signInError = null;
      })
      .addCase(authenticationServiceAPI.signInUser.rejected, (state, action) => {
        state.signInLoading = false;
        state.signInData = null;
        state.signInError = action.payload;
      });

    builder
      .addCase(authenticationServiceAPI.checkLogInStatus.pending, (state) => {
        state.signInLoading = true;
        state.signInError = null;
      })
      .addCase(authenticationServiceAPI.checkLogInStatus.fulfilled, (state, action) => {
        state.signInLoading = false;
        state.signInData = action.payload;
        state.user = action.payload;
        state.signInError = null;
      })
      .addCase(authenticationServiceAPI.checkLogInStatus.rejected, (state, action) => {
        state.signInLoading = false;
        state.signInData = null;
        state.signInError = action.payload;
      });
  },
});

export const { setLoggedIn } = authSlice.actions;

export default authSlice.reducer;
