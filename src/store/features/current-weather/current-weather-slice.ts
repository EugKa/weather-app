import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../index';
import * as api from '../../../api'
import { CurrentData } from '../../../interface';

interface dataState {
  CurrentData: CurrentData[];
  status: string;
  error?: boolean;
}

const initialState: dataState = {
  CurrentData: [],
  status: 'idle',
  error: false
}

export const CurrentWeatherThunk = createAsyncThunk(
  "@@CurrentWeather/fetchData",
  async (city: string) => {
      const data = await api.fetchCurrentWeather(city);
      return data;
  }
);

export const ParallelWeatherThunk = createAsyncThunk(
  "@@CurrentWeather/parallel",
  async (city: string[]) => {
      const data:any = await api.parallelCall(city);
      return data;
  }
);

export const UpdateCurrentWeatherThunk = createAsyncThunk(
  "@@CurrentWeather/Update",
  async (props: any) => {
    const { city } = props;
    const data = await api.fetchCurrentWeather(city);
    return data;
  }
);
    
export const deleteCountryAction = createAction<number>('@@WCurrentWeather/delete')

export const CurrentWeatherSlice = createSlice({
    name: '@@CurrentWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(CurrentWeatherThunk.pending, (state) => {
        state.status = 'loading';
      })
      builder.addCase(CurrentWeatherThunk.fulfilled, (state, action) => {
        state.status = 'successed';
        state.CurrentData = [...state.CurrentData, action.payload]
      })    
      builder.addCase(CurrentWeatherThunk.rejected, 
        (state) => {
        state.status = 'failed';
        state.error = true;
      });

      builder.addCase(deleteCountryAction, (state, action) => {
        state.CurrentData = state.CurrentData.filter(item => item.id !== action.payload)
      })
      ///
      builder.addCase(UpdateCurrentWeatherThunk.pending, (state) => {
        state.status = 'loading';
      })
      builder.addCase(UpdateCurrentWeatherThunk.fulfilled, (state, action) => {
        state.status = 'successed';
        const { name, id, main, weather } = action.payload;
        let existingPost = state.CurrentData.find((item) => item.id === id || item.name === name);
        if(existingPost) {
          existingPost.weather[0].main = weather[0].main;
          existingPost.weather[0].description = weather[0].description;
          existingPost.main.temp = main.temp;
          existingPost.main.feels_like = main.feels_like;
          existingPost.main.temp_min = main.temp_min;
          existingPost.main.temp_max = main.temp_max;
        }
      })
      builder.addCase(UpdateCurrentWeatherThunk.rejected, 
        (state) => {
        state.status = 'failed';
        state.error = true;
      });
      ///Parallel Call
      builder.addCase(ParallelWeatherThunk.pending, (state) => {
        state.status = 'loading';
      })
      builder.addCase(ParallelWeatherThunk.fulfilled, (state, action) => {
        state.status = 'successed';
        state.CurrentData = action.payload
      })    
      builder.addCase(ParallelWeatherThunk.rejected, 
        (state) => {
        state.status = 'failed';
        state.error = true;
      });
    }
  })
  
export const selectCurrentWeather = (state: RootState) => state.CurrentWeatherData.CurrentData;
export const selectCurrentWeatherStatus = (state: RootState) => state.CurrentWeatherData.status;
export default CurrentWeatherSlice.reducer;