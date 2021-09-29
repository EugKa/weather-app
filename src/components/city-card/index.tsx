import React from 'react'
import { Button, CardMedia } from '@mui/material'
import { CurrentData } from '../../interface'
import { Progress } from '../progress'
import styles from './index.module.scss'

interface CityCardProps {
    data: CurrentData;
    handleDelete: (id: number, city: string) => void;
    handleSelect: (lon: number, lat: number, city: string) => void;
    handleUpdate: (city: string, id: number) => void;
    
}

export const CityCard = ({data, handleDelete, handleSelect, handleUpdate}: CityCardProps) => {
    // const { name, weather, main, id, coord, sys } = data;    
    return (
        <div className={styles.card}>
            {data && data.weather ?  <>
                <div>
                    {data.name}, {data.sys.country}
                </div>
                <div className={styles.imgWrapper}>
                    <CardMedia
                        height={100}
                        component="img"
                        image={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    />
                    <div>
                        {Math.floor(data.main.temp)}℃
                    </div>
                </div>            
                <div>
                </div>
                <Button className="btn-update" onClick={() => handleUpdate(data.name, data.id)}>
                    Update 
                </Button> 
                <Button className="btn-info" onClick={() => handleSelect(data.coord.lon, data.coord.lat, data.name)}>
                    More info 
                </Button> 
                <Button className="btn-delete" onClick={() => handleDelete(data.id, data.name)}>
                    Delete 
                </Button>
                </> : <Progress/>
            }
        </div>
    )
}
