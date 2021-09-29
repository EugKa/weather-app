import React, { ForwardedRef, forwardRef } from 'react'
import {TextField} from '@mui/material';
// import styles from './index.module.scss';
import { FieldError } from "react-hook-form";

interface InputProps {
    error: FieldError;
    variant?: string;
    label?: string;
    id?: string;
    defaultValue?: string;
    helperText?: string;
}

export const Input = forwardRef(({ label, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <TextField
            ref={ref}
            // className={styles.input}
            error={error ? true : false}
            id={error ? "outlined-error-helper-text" : "outlined-basic"}
            label={error ? error.message: label}
            helperText={error ? "Required field." : ""}
            {...props}
            variant="outlined"
        />
    )
})