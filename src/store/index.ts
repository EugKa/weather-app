import { configureStore, combineReducers } from '@reduxjs/toolkit';

import CurrentWeatherData from './features/current-weather/current-weather-slice';
import HourCastWeatherSlice from './features/hourecast-weather/housecast-weather-slice';

export const rootReducer = combineReducers({
  CurrentWeatherData,
  HourCastWeatherSlice
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch