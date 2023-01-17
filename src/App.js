import './App.css';
import Form from './Form';
import { useState } from 'react';
import Results from './Results';
import { weatherDump } from './weatherDump';
import Grid2 from '@mui/material/Unstable_Grid2';

function App() {
  // TODO: link with maps link on station name

  // TODO: remove empty array
  const [connections, setConnections] = useState([]);
  const [weather, setWeather] = useState(weatherDump);

  const fetchData = ({ from, to }) => {
    fetch(`http://transport.opendata.ch/v1/connections?from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((data) => {
        setConnections(data.connections);
        console.log(data);
        // fetch(
        //   `https://api.openweathermap.org/data/2.5/weather?lat=${data.from.coordinate.x}&lon=${data.from.coordinate.y}&appid=${weatherKey}`
        // )
        //   .then((resW) => resW.json())
        //   .then((dataW) => {
        //     console.log(dataW);
        //   });
      });
  };

  return (
    <div className='App'>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} display={'flex'} justifyContent={'center'}>
          <Form fetchData={fetchData} />
        </Grid2>
        <Grid2 xs={12}>
          <Results connections={connections} weather={weather} />
        </Grid2>
      </Grid2>
    </div>
  );
}

export default App;
