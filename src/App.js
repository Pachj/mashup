import './App.css';
import Form from './Form';
import { useState } from 'react';
import Results from './Results';
import Grid2 from '@mui/material/Unstable_Grid2';
import { weatherKey } from './key';
import { CircularProgress } from '@mui/material';

function App() {
  const [connections, setConnections] = useState([]);
  const [weather, setWeather] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = ({ from, to }) => {
    setIsFetching(true);

    fetch(`http://transport.opendata.ch/v1/connections?from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((data) => {
        setConnections(data.connections);
        console.log(data);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data.to.coordinate.x}&lon=${data.to.coordinate.y}&units=metric&appid=${weatherKey}`
        )
          .then((resW) => resW.json())
          .then((dataW) => {
            console.log(dataW);
            setWeather(dataW);
            setIsFetching(false);
          });
      });
  };

  return (
    <div className='App'>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} display={'flex'} justifyContent={'center'}>
          <Form fetchData={fetchData} />
        </Grid2>
        <Grid2 xs={12} display={'flex'} justifyContent={'center'}>
          {isFetching ? (
            <CircularProgress />
          ) : (
            <Results connections={connections} weather={weather} />
          )}
        </Grid2>
      </Grid2>
    </div>
  );
}

export default App;
