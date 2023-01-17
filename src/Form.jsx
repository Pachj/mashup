import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';

export default function Form({ fetchData }) {
  const [fromDestination, setFromDestination] = useState('');
  const [toDestination, setToDestination] = useState('');

  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12} md={5}>
        <TextField
          label={'starting destination'}
          value={fromDestination}
          onChange={(e) => setFromDestination(e.target.value)}
        />
      </Grid2>
      <Grid2 xs={12} md={5}>
        <TextField
          label={'end destination'}
          value={toDestination}
          onChange={(e) => setToDestination(e.target.value)}
        />
      </Grid2>
      <Grid2 xs={12} md={2} display={'flex'} alignItems={'flex-end'}>
        <Button
          variant={'contained'}
          onClick={() => fetchData({ from: fromDestination, to: toDestination })}
        >
          Search
        </Button>
      </Grid2>
    </Grid2>
  );
}
