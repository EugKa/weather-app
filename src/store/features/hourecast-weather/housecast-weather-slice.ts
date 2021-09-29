import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../index';
import * as api from '../../../api'
// import { IHourCastWeather } from '../../../interface';

interface dataState {
    HourecastData: any;
    status: string;
    error?: boolean;
}

const initialState: dataState = {
    HourecastData: {},
    status: 'idle',
    error: false
}

export const HourCastWeatherThunk = createAsyncThunk(
    "@@HourCastWeather/fetchData",
    async (props: any) => {
      const { lat, lon } = props;
      const data = await api.fetchHourCastWeather(lat, lon);
      return data;
    }
);
    

export const HourCastWeatherSlice = createSlice({
    name: '@@HourCastWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(HourCastWeatherThunk.pending, (state) => {
        state.status = 'loading';
      })
      builder.addCase(HourCastWeatherThunk.fulfilled, (state, action) => {
        state.status = 'successed';
        state.HourecastData = action.payload
      })    
      builder.addCase(HourCastWeatherThunk.rejected, 
        (state) => {
        state.status = 'failed';
        state.error = true;
      });
    }
  })
  
export const selectHourCastWeather = (state: RootState) => state.HourCastWeatherSlice.HourecastData;
export const selectHourCastWeatherStatus = (state: RootState) => state.HourCastWeatherSlice.status;
export default HourCastWeatherSlice.reducer;