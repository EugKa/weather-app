import React, { useEffect } from 'react';
import queryString from 'query-string';
import { RouteComponentProps } from 'react-router';
import { useLocation } from 'react-router-dom';
import { IHourCastWeather, Hourly, Daily } from '../../interface';
import { HourCastWeatherThunk, selectHourCastWeather, selectHourCastWeatherStatus } from '../../store/features';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { convertToDDHHmm, getDateAndOffset, getCurrentDay } from '../../utils/time-conveert';
import { Progress, EighthDayForecast, CityFullInfo, CustomAlert } from '../../components';
import { Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Line } from 'react-chartjs-2'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


interface MatchParams {
    name: string;
}

interface CityInfoProps extends RouteComponentProps<MatchParams> {
}

export const CityInfo = (props:CityInfoProps) => {
    const location = useLocation();
    const {lon ,lat} = queryString.parse(location.search);
 
    const data: IHourCastWeather = useAppSelector(selectHourCastWeather);
    const status = useAppSelector(selectHourCastWeatherStatus);
    const { current, daily, hourly, timezone_offset } = data;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(HourCastWeatherThunk({lat, lon}))
    },[lat, lon, dispatch])

    const currentDay = getCurrentDay(current && current.dt, timezone_offset);
   
    const filtTodayWeather = data && data.hourly ? data.hourly.filter((el: Hourly) => getDateAndOffset(el.dt, timezone_offset) === currentDay) : []

    const dataLine = {
        labels: filtTodayWeather.map((labe: Hourly) => convertToDDHHmm(labe.dt, timezone_offset)),
        datasets: [
          {
            label: "Temperature",
            data: filtTodayWeather.map((temp: Hourly) => Math.floor(temp.temp)),
            fill: false,
            borderColor: "#742774"
          }
        ]
    };
    
    const renderHourlyForecast = () => {
        return <Item>
            <h2>Hourly forecast</h2>
            <Line data={dataLine}/>
        </Item>
    }

    const eighthDayForecast = () => {
        return <Item>
            <h2>8-Day Forecast</h2>
            {daily.map((item:Daily) => (
                <EighthDayForecast key={item.dt} data={item} offset={timezone_offset}/>      
            ))}
        </Item>
    }
    if(status === 'reject') return <CustomAlert type="error">
        Uh oh! Something went wrong. Please try again later
    </CustomAlert>
    
    
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    {current ? <CityFullInfo current={current} params={props.match.params.name} timezone_offset={timezone_offset}/> : <Progress/>}
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    {hourly ? renderHourlyForecast() : <Progress/>}
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    {daily ? eighthDayForecast(): <Progress/>}
                </Grid>
            </Grid>            
        </Box>
    )
}
