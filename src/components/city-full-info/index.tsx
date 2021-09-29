import React from 'react'
import { Current } from '../../interface'
import styles from './index.module.scss'
import { Paper, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import {convertToMDHM, capitalizeFirstLetter, numFormatter } from '../../utils/time-conveert';


interface CityFullInfoProps {
    params: string;
    current: Current;
    timezone_offset: number;
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const CityFullInfo = ({ current, timezone_offset, params }: CityFullInfoProps) => {    
    return (
        <Item>
            <ul className={styles.todayList}>
                <li>{convertToMDHM(current.dt, timezone_offset)}</li>
                <h2>{params}</h2>
                <ul className={styles.imgWrapper}>
                    <CardMedia
                        height={70}
                        component="img"
                        image={`http://openweathermap.org/img/wn/${current.weather.map(item => item.icon)}@2x.png`}
                    />
                    <li>{Math.floor(current.temp)}℃</li>
                </ul>
                <ul className={styles.info}>
                    <li>
                        <span className={styles.infoText}>Feels like {Math.floor(current.feels_like)}℃.</span>
                        <span className={styles.infoText}>{capitalizeFirstLetter(current.weather[0].description)}.</span>
                    </li>
                </ul>
                <ul className={styles.info}>
                    <li>
                        <span className={styles.infoText}>Wind speed: {current.wind_speed}</span>
                        <span className={styles.infoText}>Preshure: {current.pressure}hPa</span>
                    </li>
                    <li>
                        <span className={styles.infoText}>Humidity: {current.humidity}%</span>
                        <span className={styles.infoText}>UV: {current.uvi}</span>
                    </li>
                    <li>
                        <span className={styles.infoText}>Dew point: {current.dew_point}℃</span>
                        <span className={styles.infoText}>Visibility: {numFormatter(current.visibility)}</span>
                    </li>
                </ul>
            </ul>
        </Item>
    )
}
