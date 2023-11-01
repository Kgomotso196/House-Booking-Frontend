import { createSlice } from '@reduxjs/toolkit';
import houseServiceAPI from '../../services/housesService';

const postHousesSlice = createSlice({
    name: 'studio',
    initialState,
    reducers: {
        resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
    },
    extraReducers: (builder) => {
      
      // create a new studio
      builder
            .addCase(createStudio.pending, (state) => ({
        ...state,
        status: 'loading',
        isSuccessful: false,
      }))
            .addCase(createStudio.fulfilled, (state) => ({
        ...state,
        status: 'successful',
        isSuccessful: true,
      }))
            .addCase(createStudio.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
        isSuccessful: false,
      }));
    },
  });
  
  export const {resetSuccessful  } = postHousesSlice.actions;
  export default postHousesSlice.reducer;