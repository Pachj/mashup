import React from 'react';
import { Box, Divider, Modal, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { formatTimeStamp } from '../../../services/helpers';
import WeatherInformation from './WeatherInformation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ConnectionModal({ open, closeModal, connection, weather }) {
  return (
    <Modal open={open} onClose={() => closeModal(false)}>
      <Box sx={style}>
        <Grid2 container spacing={2}>
          <Grid2 xs={6}>
            <Typography variant={'h4'} align={'center'}>
              {connection.from.station.name}
            </Typography>
            <Typography variant={'subtitle1'} align={'center'}>
              {formatTimeStamp(connection.from.departure)}
            </Typography>
          </Grid2>
          <Grid2 xs={6}>
            <Typography variant={'h4'} align={'center'}>
              {connection.to.station.name}
            </Typography>
            <Typography variant={'subtitle1'} align={'center'}>
              {formatTimeStamp(connection.to.arrival)}
            </Typography>
          </Grid2>
          {connection.from.delay !== 0 && (
            <Grid2 xs={12}>
              <Typography align={'center'} variant={'body1'} color={'red'}>
                Delay: {connection.from.delay}
              </Typography>
            </Grid2>
          )}
          <Grid2 xs={12}>
            <Divider />
          </Grid2>
          <Grid2 xs={6}>
            <Typography align={'center'} variant={'body1'}>
              Platform: {connection.from.platform}
            </Typography>
          </Grid2>
          <Grid2 xs={6}>
            <Typography align={'center'} variant={'body1'}>
              Platform: {connection.to.platform}
            </Typography>
          </Grid2>
          <Grid2 xs={12}>
            <Divider />
          </Grid2>
          <Grid2 xs={12}>
            <WeatherInformation weather={weather} />
          </Grid2>
        </Grid2>
      </Box>
    </Modal>
  );
}
