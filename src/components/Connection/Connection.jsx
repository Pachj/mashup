import { Button, Card, Divider, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import ConnectionModal from './ConnectionModal/ConnectionModal';
import { useState } from 'react';
import { formatTimeStamp } from '../../services/helpers';

export default function Connection({ connection, weather }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card>
        <Grid2 container>
          <Grid2 xs={5}>
            <Typography variant={'h4'} align={'center'}>
              {connection.from.station.name}
            </Typography>
            <Typography variant={'subtitle1'} align={'center'}>
              {formatTimeStamp(connection.from.departure)}
            </Typography>
          </Grid2>
          <Grid2 xs={5}>
            <Typography variant={'h4'} align={'center'}>
              {connection.to.station.name}
            </Typography>
            <Typography variant={'subtitle1'} align={'center'}>
              {formatTimeStamp(connection.to.arrival)}
            </Typography>
          </Grid2>
          <Grid2 xs={2}>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
          </Grid2>
          <Grid2 xs={12}>
            <Divider />
          </Grid2>
          <Grid2 xs={6}>
            <Typography align={'center'} variant={'body1'}>
              Duration: {connection.duration.substring(3, 8)}h
            </Typography>
          </Grid2>
          <Grid2 xs={6}>
            <Typography align={'center'} variant={'body1'}>
              Transfers: {connection.transfers}
            </Typography>
          </Grid2>
          <Grid2 display={'flex'} justifyContent={'flex-end'} xs={12}>
            <Button variant={'contained'} onClick={() => setModalOpen(true)}>
              Details
            </Button>
          </Grid2>
        </Grid2>
      </Card>
      <ConnectionModal
        open={modalOpen}
        closeModal={setModalOpen}
        connection={connection}
        weather={weather}
      />
    </>
  );
}
