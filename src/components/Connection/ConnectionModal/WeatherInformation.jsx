import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

export default function WeatherInformation({ weather }) {
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12}>
        <Typography variant={'h5'} align={'center'}>
          Weather at destination
        </Typography>
      </Grid2>
      <Grid2 xs={8}>
        <Grid2 xs={12}>
          <Typography variant={'body1'}>{weather.weather[0].description}</Typography>
          <Typography variant={'body1'}>Temperature: {weather.main.temp} C°</Typography>
          <Typography variant={'body1'}>Felt Temperature: {weather.main.feels_like} C°</Typography>
          <Typography variant={'body1'}>Wind: {weather.wind.speed} km/h</Typography>
        </Grid2>
      </Grid2>
      <Grid2 display={'flex'} alignItems={'center'} xs={4}>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
      </Grid2>
    </Grid2>
  );
}
