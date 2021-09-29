import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Progress() {
  return (
    <Box sx={{ display: 'flex' }} className="main-pr">
      <CircularProgress />
    </Box>
  );
}