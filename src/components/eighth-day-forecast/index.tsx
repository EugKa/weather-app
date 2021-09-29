import React from 'react'
import { CardMedia } from '@mui/material';
import { Daily } from '../../interface'
import { convertToDWMD, capitalizeFirstLetter } from '../../utils/time-conveert'
import styles from './index.module.scss'
interface EighthDayForecastProps {
    data: Daily;
    offset: number;
}

export const EighthDayForecast = ({data, offset}:EighthDayForecastProps) => {   
    const { dt, temp:{ min, max }, weather} = data;
    return (
        <div className={styles.eighthDayForecast}>
            <div>{convertToDWMD(dt, offset)}</div>{" "}
            <div className={styles.imgWrapper}>
                <CardMedia
                    height={70}
                    component="img"
                    image={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                />
            </div>     
            <div className={styles.text}>
                {Math.floor(min)} / {Math.floor(max)}℃
            </div>
            <div className={styles.text}>{capitalizeFirstLetter(weather[0].description)}</div>
        </div>
    )
}
