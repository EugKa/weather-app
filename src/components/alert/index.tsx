import * as React from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface CustomAlertProps {
    type: AlertColor;
    children: string
}

export const CustomAlert = ({type, children}: CustomAlertProps) =>{
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={type}>{children}</Alert>
    </Stack>
  );
}