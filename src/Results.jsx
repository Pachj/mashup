import Grid2 from '@mui/material/Unstable_Grid2';
import Connection from './components/Connection/Connection';

export default function Results({ connections, weather }) {
  return (
    <Grid2 container spacing={2}>
      {connections.map((connection) => {
        return (
          <Grid2 xs={12} md={6} key={`grid-${connection.from.departureTimestamp}`}>
            <Connection
              key={connection.from.departureTimestamp}
              connection={connection}
              weather={weather}
            />
          </Grid2>
        );
      })}
    </Grid2>
  );
}
