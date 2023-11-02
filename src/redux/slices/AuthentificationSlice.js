import { createSlice } from "@reduxjs/toolkit";
import authenticationServiceAPI from "../../services/authenticationService";


const initialState = {
    user: getLocalStorage('user') || null,
    tempUser: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    isLoading: false,
    errors: null,
};

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        resetSuccessful: (state) => ({ ...state, isSuccessfull: false
      }),
    },
    extraReducers: (builder) => {
        builder
        .addCase(authenticationServiceAPI.registerUser.pending, (state) => ({
          ...state,
          isLoading: true,
        }))
        .addCase(authenticationServiceAPI.registerUser.fulfilled, (state) => ({
          ...state,
          isLoading: false,
          tempUser: {
            username: '',
            confirmPassword: '',
          },
        }))
        .addCase(authenticationServiceAPI.registerUser.rejected, (state, { payload }) => ({
          ...state,
          isLoading: false,
          errors: payload,
        }));
    },
  });
  export const {
    handleUpdate, toggleFormAuth, toRegister, toLogin,
  } = authSlice.actions;
  export default authSlice.reducer;