import React from 'react'
import { Button, Card } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Input } from '../input';
import { CurrentWeatherThunk } from '../../store/features';
import { useAppDispatch } from '../../store/hooks';
import styles from './index.module.scss'

interface AddCityFormState {
    city: string;
}

export const AddCityForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddCityFormState>();
    const dispatch = useAppDispatch();

    const onSubmit = (formData: AddCityFormState) => {
        dispatch(CurrentWeatherThunk(formData.city))
        reset();
    }

    return (
        <div className={styles.AddCity}>
            <Card className={styles.card} variant="outlined">
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formWrapper}>
                        <Input 
                            label="Please enter city name"
                            {...register('city', { required: { value: true, message: 'Please enter correct city name'}})} 
                            error={errors.city!}
                        />
                        <Button className={styles.btn} variant="contained" color="primary" type="submit">
                            Add City
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}
