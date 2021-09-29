import React, { useEffect } from 'react'
import { CurrentData } from '../../interface';
import { 
    UpdateCurrentWeatherThunk,
    deleteCountryAction, 
    selectCurrentWeather,
    ParallelWeatherThunk, 
    selectCurrentWeatherStatus
} from '../../store/features'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import styles from './index.module.scss'
import { AddCityForm, CityCard, CustomAlert } from '../../components';
import { Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const MainPage = (props: any) => {
    const data: CurrentData[] = useAppSelector(selectCurrentWeather);
    const status = useAppSelector(selectCurrentWeatherStatus);
    const dispatch = useAppDispatch();
    const history = useHistory();

    const handleDelete = (id: number, city: string) => {
        dispatch(deleteCountryAction(id))
        localStorage.removeItem(city);

    }

    const handleSelect = (lon: number, lat: number, city: string) => {
        history.push({
            pathname: `/city/${city}`,
            search: `lat=${lat}&lon=${lon}`,
        })       
    }

    const handleUpdate = (city: string, id: number) => {
        dispatch(UpdateCurrentWeatherThunk({
            id: id,
            city: city
        }))
    }

    let keys = Object.keys(localStorage);

    useEffect(() => {
        dispatch(ParallelWeatherThunk(keys))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(status === 'reject') return <CustomAlert type="error">
        Uh oh! Something went wrong. Please try again later
    </CustomAlert>

    const noData = data.length === 0 && (<div>No Data</div>

    )

    return (
        <Box sx={{ flexGrow: 1}}>
            <AddCityForm/>
            {noData}
            <Grid container className={styles.cardWrapper} spacing={2}>
                {data.map((item:CurrentData) => {
                    localStorage.setItem(item.name, item.name)
                    return <Grid item key={item.id}  lg={2} md={2} sm={6} xs={12}>
                        {item.cod === 200 ? 
                            (
                                <Item className='city-item'>
                                    <CityCard 
                                        data={item} 
                                        handleDelete={handleDelete}
                                        handleSelect={handleSelect}
                                        handleUpdate={handleUpdate}
                                    />
                                </Item>              
                            ) : (
                                <CustomAlert type="error">
                                    "Uh oh! Something went wrong :("
                                    "Please try again later"
                                </CustomAlert>
                     )
                        }    
                </Grid>
                })}
            </Grid>          
        </Box>
    )
}
